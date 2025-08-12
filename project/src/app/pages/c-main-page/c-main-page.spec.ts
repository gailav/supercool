import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMainPage } from './c-main-page';

describe('CMainPage', () => {
  let component: CMainPage;
  let fixture: ComponentFixture<CMainPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CMainPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
