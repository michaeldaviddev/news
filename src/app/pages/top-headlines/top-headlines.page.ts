import { Component, OnInit, ViewChild } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/article';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.page.html',
  styleUrls: ['./top-headlines.page.scss'],
})
export class TopHeadlinesPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public articles: Article[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopHeadlines()
      .subscribe( articles => this.articles.push( ...articles ) );
  }

  loadData() {
    this.newsService.getTopHeadlinesByCategory( 'business', true )
      .subscribe( articles => {
        if ( articles.length === this.articles.length ) {
          this.infiniteScroll.disabled = true;
          return;
        }

        this.articles = articles;
        this.infiniteScroll.complete();
      });
  }

}
