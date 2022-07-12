import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopHeadlinesPage } from './top-headlines.page';
import {HttpClientModule} from "@angular/common/http";

describe('TopHeadlinesPage', () => {
  let component: TopHeadlinesPage;
  let fixture: ComponentFixture<TopHeadlinesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopHeadlinesPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TopHeadlinesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
