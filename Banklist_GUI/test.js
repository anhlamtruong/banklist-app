'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Elements from BankList DOM
const nextStepBtn = document.querySelector('.btn--a-GUI');
/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

class Account {
  constructor(
    owner,
    movements,
    movementsDates,
    interestRate,
    pin,
    currency,
    locale
  ) {
    this.owner = owner;
    this.movements = movements;
    this.interestRate = interestRate;
    this.currency = currency;
    this.pin = pin;
    this.locale = locale;
    this.movementsDates = movementsDates;
  }
  displayMovements(sort) {
    containerMovements.innerHTML = '';

    const movs = sort
      ? this.movements.slice(0, -1).sort((a, b) => a - b)
      : this.movements;

    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';

      // const date = new Date(this.movementsDates[i]);
      // const displayDate = this.formatMovementDate(date, this.locale);

      const formattedMov = this.formatCur(mov, this.locale, this.currency);
      const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
        <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>`;

      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  }
  formatMovementDate(date, locale) {
    const CaldaysPassed = (date1, date2) =>
      Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

    const daysPassed = CaldaysPassed(new Date(), date);

    if (daysPassed === 0) {
      return 'Today';
    }
    if (daysPassed === 1) {
      return 'Yesterday';
    }
    if (daysPassed <= 7) {
      return `${daysPassed} days ago`;
    }
    return new Intl.DateTimeFormat(locale).format(date);
  }
  formatCur(cur, locale, currency) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currency,
    }).format(value);
  }
  createUsernames() {
    accs.forEach(function () {
      this.username = this.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
      // console.log(username);
    });
  }
  calcDisplayBalance() {
    this.balance = this.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = formatCur(
      this.balance,
      this.locale,
      this.currency
    );
  }
  calcDisplaySummary() {
    const incomes = this.movements
      .filter(mov => mov > 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumIn.textContent = formatCur(incomes, this.locale, this.currency);

    const out = this.movements
      .filter(mov => mov < 0)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumOut.textContent = formatCur(
      Math.abs(out),
      this.locale,
      this.currency
    );

    const interest = this.movements
      .filter(mov => mov > 0)
      .map(mov => (mov * this.interestRate) / 100)
      .filter(int => int >= 1)
      .reduce((acc, mov) => acc + mov, 0);
    labelSumInterest.textContent = formatCur(
      interest,
      this.locale,
      this.currency
    );
  }
  updateUI() {
    this.displayMovements(false);
    this.calcDisplayBalance();
    this.calcDisplaySummary();
  }
}

const account1 = new Account(
  'Anh',
  [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2022-05-05T17:01:17.194Z',
    '2022-08-10T23:36:17.929Z',
    '2022-08-11T10:51:36.790Z',
  ],
  1.2,
  1111,
  'EUR',
  'pt-PT'
);

let currentAccount, timer;
currentAccount = account1;
currentAccount.updateUI();
containerApp.style.opacity = 100;
