"use strict";
////////////////////////////////////////////////////////////////////////
// Selecting elements
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
// console.log(allSections);
const allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

// Creating and inserting elements
// .insertAdjacentHTML
const message = document.createElement("div");
message.classList.add("cookie-message");
message.classList.add("smooth-fade");
message.innerHTML =
  'We use cookied for improve functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));
////////////////////////////////////////////////////////////////////////////////////
//Delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();
  });

//////////////////////////////////////////////////////////////////////////////////
//Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);
// console.log(message.style.backgroundColor);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

/////////////////////////////////////////////////////////////////////////////////////
//Atributes
const logo = document.querySelector(".nav__logo");
// console.log(logo.alt);
// console.log(logo.src);

// Non-standard
// console.log(logo.getAttribute('designer'));
// console.log(logo.designer);

// console.log(logo.dataset.versionNumber);

//Classes
logo.classList.add("c");
logo.classList.remove("c");
logo.classList.toggle("c");
logo.classList.contains("c");

// const h1 = document.querySelector('h1');

// const alerth1 = function (e) {
//   alert('asdfavaewrg');
// };

// h1.addEventListener('mouseenter', alerth1);

// //rgb(255,255,255)
// const randomTnt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomTnt(0, 255)},${randomTnt(0, 255)},${randomTnt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target);
//   e.stopPropagation();
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target);
// });

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target);
// });

// //////////////////////////////////////////////////////////////////////////////////////////////
// //##PAGE NAVIGATION
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     console.log('LINk');
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//Going downwards: child

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orange';

// //Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// //Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.background = 'var(--gradient-primary)';
//   }
// });

//Sticky note
// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords);

// window.addEventListener("scroll", function (e) {
//   // console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add("sticky");
//   } else {
//     nav.classList.remove("sticky");
//   }
// });

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];
//     console.log(ent);
//     if (!ent.isIntersecting) {
//       document.nav.classList.add("sticky");
//     }
//     if (ent.isIntersecting) {
//       document.nav.classList.remove("sticky");
//     }
//   },
//   {
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(head);
// const obsCallBack = function (entries, ob) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.2,
// };

// window.addEventListener('beforeunload', function(e){
//   e.preventDefault();
//   console.log(e);
//   e.returnValue='';
// });

// class expression
// const PersonCl=class{

// }

//class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
<<<<<<< HEAD
//   set fullName(name) {
//     if (name.include(" ")) {
//       this.fullName = name;
//     } else {
//       alert(`${name} is not a full name!`);
//     }
//   }
// }

=======

//   // Set a property that already exist
//   set fullName(name) {
//     if (name.includes(" ")) {
//       this._fullName = name;
//     } else {
//       alert(`${name} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   //Static Method
//   static hey(){
//     console.log('Hey there 👌');
//     console.log(this);
//   }
// }

// PersonCl.hey = function () {
//   console.log("Hi there!!!!");
// };

// PersonCl.hey();
>>>>>>> 7758e6cb9801e76a35f89ac0a4b84563f1388143
// const jessica = new PersonCl("Jessica Davis", 1996);
// console.log(jessica);
// console.log(jessica.age);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };

// jessica.greet();

// const account = {
//   owner: "jonas",
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },
//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);
// account.latest = 50;
// console.log(account);

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);

// steven.name = "Steven";
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__);
// const sarah = Object.create(PersonProto);
// sarah.init("Sarah", 2139);
// sarah.calcAge();

const Car = {
  init(type, speed) {
    this.type = type;
    this.speed = speed;
  },
  acceleration() {
    this.speed += 10;
    console.log(`${this.type} acceleration: ${this.speed}`);
  },
  brake() {
    this.speed -= 5;
    console.log(`${this.type} braking: ${this.speed}`);
  },
  get speedUS() {
    return this.speed / 1.6;
  },
  set speedUS(newSpeed) {
    this.speed = newSpeed * 1.6;
  },
};

const Ford = Object.create(Car);
Ford.init("Ford", 120);
Ford.acceleration();
Ford.brake();
console.log(Ford.speedUS);
Ford.speedUS = 1000;
console.log(Ford.speedUS);
