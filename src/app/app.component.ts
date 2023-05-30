import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngUnitTest';
  var1: string = 'AngUnitTest';
  voteCount: number = 0;
  computenumber:number=0;
  color: Array<string> = ['red', 'black', 'green', 'yellow', 'magenta'];
  upVote() {
    this.voteCount++;
  }
  downVote() {
    this.voteCount--;
  }
  calculateCircleArea(v: number): number {
    return 3.14 * v * v;
  }
  computeNumber(i:number)
  {
    if(i>0)
    {
      this.computenumber++;
    }
    else if(i<0)
    {
      this.computenumber--;
    }
    else
    {
      this.computenumber=0;
    }

    }

}