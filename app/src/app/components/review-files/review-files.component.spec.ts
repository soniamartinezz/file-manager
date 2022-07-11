import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewFilesComponent } from './review-files.component';

describe('ReviewFilesComponent', () => {
  let component: ReviewFilesComponent;
  let fixture: ComponentFixture<ReviewFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewFilesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
