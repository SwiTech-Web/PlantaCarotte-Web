import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedProductComponent } from './liked-product.component';

describe('LikedProductComponent', () => {
  let component: LikedProductComponent;
  let fixture: ComponentFixture<LikedProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
