import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTwoSubmitButtonComponent } from './page-two-submit-button.component';

describe('PageTwoSubmitButtonComponent', () => {
  let component: PageTwoSubmitButtonComponent;
  let fixture: ComponentFixture<PageTwoSubmitButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTwoSubmitButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTwoSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
