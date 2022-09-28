import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingActivadoComponent } from './routing-activado.component';

describe('RoutingActivadoComponent', () => {
  let component: RoutingActivadoComponent;
  let fixture: ComponentFixture<RoutingActivadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingActivadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingActivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
