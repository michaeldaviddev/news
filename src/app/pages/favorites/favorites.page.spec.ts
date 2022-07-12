import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FavoritesPage } from './favorites.page';
import {IonicStorageModule} from "@ionic/storage-angular";

describe('FavoritesPage', () => {
  let component: FavoritesPage;
  let fixture: ComponentFixture<FavoritesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesPage ],
      imports: [
        IonicModule.forRoot(),
        IonicStorageModule.forRoot()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
