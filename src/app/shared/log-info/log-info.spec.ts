import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInfo } from './log-info';

describe('LogInfo', () => {
  let component: LogInfo;
  let fixture: ComponentFixture<LogInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
