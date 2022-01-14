import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfTranslationComponent } from './self-translation.component';

describe('SelfTranslationComponent', () => {
  let component: SelfTranslationComponent;
  let fixture: ComponentFixture<SelfTranslationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfTranslationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
