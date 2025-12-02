import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArtModal } from './add-art-form';

describe('AddArtModal', () => {
  let component: AddArtModal;
  let fixture: ComponentFixture<AddArtModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddArtModal],
    }).compileComponents();

    fixture = TestBed.createComponent(AddArtModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
