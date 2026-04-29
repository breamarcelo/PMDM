import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarLibroComponent } from './guardar-libro-component';

describe('GuardarLibroComponent', () => {
  let component: GuardarLibroComponent;
  let fixture: ComponentFixture<GuardarLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuardarLibroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
