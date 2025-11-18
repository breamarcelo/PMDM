import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Despedida } from './despedida';

describe('Despedida', () => {
  let component: Despedida;
  let fixture: ComponentFixture<Despedida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Despedida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Despedida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
