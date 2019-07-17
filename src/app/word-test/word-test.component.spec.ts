import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordTestComponent } from './word-test.component';

describe('WordTestComponent', () => {
  let component: WordTestComponent;
  let fixture: ComponentFixture<WordTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
