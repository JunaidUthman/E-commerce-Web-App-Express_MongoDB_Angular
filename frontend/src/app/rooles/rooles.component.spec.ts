import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoolesComponent } from './rooles.component';

describe('RoolesComponent', () => {
  let component: RoolesComponent;
  let fixture: ComponentFixture<RoolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
