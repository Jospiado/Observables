import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  const myFirstObservable = new Observable(
    (observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.next(4);
      observer.next(5);
      observer.complete();
    }
  );
    myFirstObservable.subscribe((n: number) => console.log(n),
  (error) => console.error(error),
  () => console.log('Completed.');

const timerCount = interval(500);
timerCount.subscribe(
  (n) => console.log(n)
)
console.log("After interval");
}
