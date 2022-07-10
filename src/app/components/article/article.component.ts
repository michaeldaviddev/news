import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';
import { ActionSheetButton, ActionSheetController, Platform } from '@ionic/angular';
import { Browser } from '@capacitor/browser';
import { StorageService } from '../../services/storage.service';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() index: number;

  constructor(
    private platform: Platform,
    private storageService: StorageService,
    private actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {}

  openArticle() {
    if ( this.platform.is('ios') || this.platform.is('android') ) {
      Browser.open({ url: this.article.url });
      return;
    }

    window.open( this.article.url, '_blank' );
  }

  async onOpenMenu() {
    const articleInFavorite = this.storageService.articleInFavorites(this.article);

    const actionButtons: ActionSheetButton[] = [
      {
        text: articleInFavorite ? 'Remove favorite' : 'Favorite',
        icon: articleInFavorite ? 'star' : 'star-outline',
        handler: () => this.onToggleFavorite()
      },
      {
        text: 'Cancel',
        icon: 'close-outline',
        role: 'cancel',
      }
    ];

    const shareBtn: ActionSheetButton = {
      text: 'Share',
      icon: 'share-outline',
      handler: () => this.onShareArticle()
    };

    if ( this.platform.is('desktop') ) {
      actionButtons.unshift(shareBtn);
    }

    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: actionButtons
    });

    await actionSheet.present();
  }

  onShareArticle() {
    const { title, url } = this.article;
    Share.share({
      title,
      url
    });
  }

  onToggleFavorite() {
    this.storageService.saveRemoveArticle(this.article);
  }

}
