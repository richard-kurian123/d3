import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../data.service';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [ TableComponent ],
      providers:[
        {
          provide:DataService,
        }
     
        
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`employees has default value`, () => {
    expect(component.employees).toEqual([]);
  });

  it(`emp details has default value`, () => {
    expect(component.employeeDetails).toEqual([]);
  });
  it(`employee project has default value`, () => {
    expect(component.employeeProject).toEqual([]);
  });
  it(`projects has default value`, () => {
    expect(component.projects).toEqual([]);
  });


  it(`usersArray has default value 0000`, () => {
  component.ngOnInit();
  expect(component.employees.length).toBe(0);
  });






});





// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { DataService } from '../data.service';

// import { TableComponent } from './table.component';

// describe('TableComponent', () => {
//   let component: TableComponent;
//   let fixture: ComponentFixture<TableComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ TableComponent ]
//     })
//     .compileComponents();


//     const userServiceStub = () => ({
//       apiCall: () => ({ subscribe: (f: (arg0: {}) => any) => f({}) })
//     });

//     fixture = TestBed.createComponent(TableComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();


//     TestBed.configureTestingModule({
//       imports: [HttpClientTestingModule, RouterTestingModule,],
//       schemas: [NO_ERRORS_SCHEMA],
//       declarations: [TableComponent],
//       providers: [{ provide: DataService, useFactory: userServiceStub }]
//     });

//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it(`usersArray has default value`, () => {
//     expect(component.employees).toEqual([]);
//   });

// });

