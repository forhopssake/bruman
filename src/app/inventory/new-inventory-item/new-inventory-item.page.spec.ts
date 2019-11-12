import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInventoryItemPage } from './new-inventory-item.page';

describe('NewInventoryItemPage', () => {
  let component: NewInventoryItemPage;
  let fixture: ComponentFixture<NewInventoryItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInventoryItemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInventoryItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
