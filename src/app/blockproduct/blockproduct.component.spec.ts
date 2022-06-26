import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockproductComponent } from './blockproduct.component';

describe('BlockproductComponent', () => {
  let component: BlockproductComponent;
  let fixture: ComponentFixture<BlockproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
