import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcompenComponent } from './editcompen.component';


describe('EditcompenComponent', () => {
  let component: EditcompenComponent;
  let fixture: ComponentFixture<EditcompenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcompenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcompenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
