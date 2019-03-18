import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players.js';

Meteor.startup(function(){

});


  // class Person {
  //   constructor(name = 'Anonymous', age = 0) {
  //     this.name = name;
  //     this.age = age;
  //   }
  //   getGreeting() {
  //     return `Hi, this is ${this.name}!`;
  //   }
  //   getPersonDescription() {
  //     return `${this.name} is ${this.age} years old.`
  //   }
  // }
  //
  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age);
  //     this.title = title;
  //   }
  //   getGreeting() {
  //     if(this.title) {
  //       return `Hi, this is ${this.name}! I work as ${this.title}`;
  //     } else {
  //       return super.getGreeting();
  //     }
  //   }
  //   hasJob() {
  //     return !!this.title;
  //   }
  // }
  //
  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'assembly') {
  //     super(name, age);
  //     this.preferredLanguage = preferredLanguage;
  //   }
  //   getGreeting() {
  //       return `Hi, I am ${this.name}. I am a ${this.preferredLanguage} programmer`;
  //   }
  // }
  //
  // let programmer = new Programmer('Dino', 35, 'C++');
  // console.log(programmer.getGreeting());
  //
  // let p2 = new Programmer('Jimmy', 30);
  // console.log(p2.getGreeting());
