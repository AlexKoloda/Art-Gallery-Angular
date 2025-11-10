import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtGrid } from './art-grid';

describe('ArtGrid', () => {
  let component: ArtGrid;
  let fixture: ComponentFixture<ArtGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
