import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsFooterComponent } from './items-footer.component';

describe('ItemsFooterComponent', () => {
  let component: ItemsFooterComponent;
  let fixture: ComponentFixture<ItemsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
