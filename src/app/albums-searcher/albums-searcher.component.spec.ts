import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsSearcherComponent } from './albums-searcher.component';

describe('AlbumsSearcherComponent', () => {
  let component: AlbumsSearcherComponent;
  let fixture: ComponentFixture<AlbumsSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
