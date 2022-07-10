import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-top-headlines',
  templateUrl: './top-headlines.page.html',
  styleUrls: ['./top-headlines.page.scss'],
})
export class TopHeadlinesPage implements OnInit {

  public articles: Article[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopHeadlines()
      .subscribe( articles => this.articles.push( ...articles ) );
  }

}
