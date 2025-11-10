import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaPersonaje } from './tarjeta-personaje';

describe('TarjetaPersonaje', () => {
  let component: TarjetaPersonaje;
  let fixture: ComponentFixture<TarjetaPersonaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaPersonaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaPersonaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
