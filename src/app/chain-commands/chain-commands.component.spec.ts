import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainCommandsComponent } from './chain-commands.component';

describe('ChainCommandsComponent', () => {
  let component: ChainCommandsComponent;
  let fixture: ComponentFixture<ChainCommandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChainCommandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChainCommandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
