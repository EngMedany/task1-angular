import { ComponentFixture, TestBed } from '@angular/core/testing';

import { After2Component } from './after2.component';

describe('After2Component', () => {
  let component: After2Component;
  let fixture: ComponentFixture<After2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [After2Component]
    });
    fixture = TestBed.createComponent(After2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
