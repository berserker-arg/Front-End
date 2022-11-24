import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesylogComponent } from './redesylog.component';

describe('RedesylogComponent', () => {
  let component: RedesylogComponent;
  let fixture: ComponentFixture<RedesylogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesylogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
