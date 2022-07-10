import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { Article } from '../../interfaces/article';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(private storageService: StorageService) { }

  get articles(): Article[] {
    return this.storageService.getLocalArticles;
  }

  ngOnInit() {
  }

}
