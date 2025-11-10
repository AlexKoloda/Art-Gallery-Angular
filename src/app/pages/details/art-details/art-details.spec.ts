import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtDetails } from './art-details';

describe('ArtDetails', () => {
  let component: ArtDetails;
  let fixture: ComponentFixture<ArtDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
