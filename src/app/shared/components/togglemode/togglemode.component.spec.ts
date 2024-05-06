import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogglemodeComponent } from './togglemode.component';

describe('TogglemodeComponent', () => {
  let component: TogglemodeComponent;
  let fixture: ComponentFixture<TogglemodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TogglemodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TogglemodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
