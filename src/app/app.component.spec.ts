import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';


describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    console.log('before each is gettig executed');
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });


  afterEach(function () {
    console.log('after each test it will get executed')
  })

  beforeAll(function () {
    console.log("before all is getting executed");
  })

  afterAll(function () {
    console.log('after all is getting executed');
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngUnitTest'`, () => {
    expect(app.title).toEqual('AngUnitTest');
  });

  it(`should return negative count`, () => {
   app.downVote();
   expect(app.voteCount).toBe(-1);
  })
  it('should return positive compute number',()=> {
    app.computeNumber(1);
    expect(app.computenumber).toBeGreaterThan(0);
  })
  it('should return negative compute number',()=> {
    app.computeNumber(-1);
    expect(app.computenumber).toBeLessThan(0);
  })
  it('should reset the compute number',()=> {
    app.computeNumber(0);
    expect(app.computenumber).toBe(0);
  })
  it(`should return positive count`, () => {
    app.upVote();
    expect(app.voteCount).toBeGreaterThan(0);
  })
  it(`should calculate circle area`, () => {
    var area = app.calculateCircleArea(10);
    expect(area).toEqual(314);
  })
  it(`should exist selected color`, () => {
    expect(app.color).toContain('green');
  })

});
