import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhamentoFilmesComponent } from './detalhamento-filmes.component';

describe('DetalhamentoFilmesComponent', () => {
  let component: DetalhamentoFilmesComponent;
  let fixture: ComponentFixture<DetalhamentoFilmesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhamentoFilmesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhamentoFilmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
