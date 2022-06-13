import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BatchService 
{
 constructor() { }

 // Write method in service class which returns array 
 // of batch details
Add()
{
  var n1:number = 20;
  var n2:number = 30;
  var Ans :number = 0;
  Ans = n1 + n2;
  return Ans
}

Sub()
{
  var n1:number = 50;
  var n2:number = 30;
  var Ans :number = 0;
  Ans = n1 - n2;
  return Ans
}

}
