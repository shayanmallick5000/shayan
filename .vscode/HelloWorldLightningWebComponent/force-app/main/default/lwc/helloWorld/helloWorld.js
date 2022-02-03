import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
  greeting = 'Rabbit';
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}