'use strict';

var storeLocations = [];

function Store(location, minCustPerHour, maxCustPerHour, avgCookiesPerCust) {
  this.location = location;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.custPerHour = [];
  this.cookiesPerHour = [];
  this.hoursOfOps = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
  this.dailyTotal = 0;
  
  storeLocations.push(this);
  this.render();
};

Store.prototype.genRandCustPerHour = function(min, max) {
  for(var i = 0; i < this.hoursOfOps.length; i++) {
    var randCust = Math.floor(Math.random() * (max - min + 1) + min);
    this.custPerHour.push(randCust);
  }
};

Store.prototype.genHourlySales = function() {
  // Line below will populate custPerHour array
  this.genRandCustPerHour(this.minCustPerHour, this.maxCustPerHour);

  for(var i = 0; i < this.hoursOfOps.length; i++) {
    var perHour = Math.round(this.custPerHour[i] * this.avgCookiesPerCust);
    this.cookiesPerHour.push(perHour);
    this.dailyTotal += perHour;
  }
};

Store.prototype.render = function() {
  this.genHourlySales();

  // Anchor to existing doc
  var mainEl = document.getElementById('main-content');

  // Create section element
  var containerEl = document.createElement('section');
  // Append containerEl(<section>) --> to --> mainEl(<main id="main-content">)
  mainEl.appendChild(containerEl);

  // Create h3 element and give content text
  var headingEl = document.createElement('h3');
  headingEl.textContent = this.name;
  // Append headingEl(<h3>) --> to --> containerEl(<section>)
  containerEl.appendChild(headingEl);

  // Building list items
  var ulEl = document.createElement('ul');
  // Append ulEl(<ul>) --> to --> containterEl(<section>)
  containerEl.appendChild(ulEl);
  for(var i = 0; i < this.hoursOfOps.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = `${this.hoursOfOps[i]}: ${this.cookiesPerHour[i]} cookies`;
    // Append each index of liEl(<li>) --> to --> ulEl(<ul>)
    ulEl.appendChild(liEl);
  }
  // Create extra li for total cookies and append liEl(<li>) --> to --> ulEl(<ul>)
  var liTotal = document.createElement('li');
  liTotal.textContent = `Total: ${this.dailyTotal} cookies`;
  ulEl.appendChild(liTotal);
};

new Store('First and Pike', 23, 65, 6.3);


















// var locSeaTac = {
//   location: 'SeaTac Airport',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesPerCust: 1.2,
//   custPerHour: function() {
//     return 3 + Math.floor(Math.random() * 22);
//   },
//   cookiesPerHour: function() {
//     return Math.round(this.avgCookiesPerCust * this.custPerHour());
//   },
//   hourlyTotals: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
//   sumCookies: function() {
//     var sum = 0;
//     for (var i = 0; i < this.hourlyTotals.length - 1; i++) {
//       var hourlyCookies = this.cookiesPerHour();
//       sum += hourlyCookies;
//       console.log(sum);
//       this.hourlyTotals[i] = this.hourlyTotals[i] + hourlyCookies + ' cookies';
//     }
//     this.hourlyTotals[i] = this.hourlyTotals[i] + sum + ' cookies';
//     console.log(this.hourlyTotals);
//   },
//   render() {
//     var listTitle = document.createElement('p');
//     listTitle.textContent = this.location;
//     var listContainer = document.createElement('ul');
//     var position = document.getElementById('main-content');
//     position.appendChild(listTitle);
//     position.appendChild(listContainer);

//     for(var i = 0; i < this.hourlyTotals.length; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = this.hourlyTotals[i];
//       var mainEl = document.getElementById('main-content');
//       mainEl.appendChild(listItem);
//     }
//   },
// };
// locSeaTac.sumCookies();
// locSeaTac.render();

// var locSeattleCenter = {
//   location: 'Seattle Center',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesPerCust: 3.7,
//   custPerHour: function() {
//     return 11 + Math.floor(Math.random() * 28);
//   },
//   cookiesPerHour: function() {
//     return Math.round(this.avgCookiesPerCust * this.custPerHour());
//   },
//   hourlyTotals: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
//   sumCookies: function() {
//     var sum = 0;
//     for (var i = 0; i < this.hourlyTotals.length - 1; i++) {
//       var hourlyCookies = this.cookiesPerHour();
//       sum += hourlyCookies;
//       console.log(sum);
//       this.hourlyTotals[i] = this.hourlyTotals[i] + hourlyCookies + ' cookies';
//     }
//     this.hourlyTotals[i] = this.hourlyTotals[i] + sum + ' cookies';
//     console.log(this.hourlyTotals);
//   },
//   render() {
//     var listTitle = document.createElement('p');
//     listTitle.textContent = this.location;
//     var listContainer = document.createElement('ul');
//     var position = document.getElementById('main-content');
//     position.appendChild(listTitle);
//     position.appendChild(listContainer);

//     for(var i = 0; i < this.hourlyTotals.length; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = this.hourlyTotals[i];
//       var mainEl = document.getElementById('main-content');
//       mainEl.appendChild(listItem);
//     }
//   },
// };
// locSeattleCenter.sumCookies();
// locSeattleCenter.render();

// var locCapHill = {
//   location: 'Capitol Hill',
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   avgCookiesPerCust: 2.3,
//   custPerHour: function() {
//     return 20 + Math.floor(Math.random() * 19);
//   },
//   cookiesPerHour: function() {
//     return Math.round(this.avgCookiesPerCust * this.custPerHour());
//   },
//   hourlyTotals: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
//   sumCookies: function() {
//     var sum = 0;
//     for (var i = 0; i < this.hourlyTotals.length - 1; i++) {
//       var hourlyCookies = this.cookiesPerHour();
//       sum += hourlyCookies;
//       console.log(sum);
//       this.hourlyTotals[i] = this.hourlyTotals[i] + hourlyCookies + ' cookies';
//     }
//     this.hourlyTotals[i] = this.hourlyTotals[i] + sum + ' cookies';
//     console.log(this.hourlyTotals);
//   },
//   render() {
//     var listTitle = document.createElement('p');
//     listTitle.textContent = this.location;
//     var listContainer = document.createElement('ul');
//     var position = document.getElementById('main-content');
//     position.appendChild(listTitle);
//     position.appendChild(listContainer);

//     for(var i = 0; i < this.hourlyTotals.length; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = this.hourlyTotals[i];
//       var mainEl = document.getElementById('main-content');
//       mainEl.appendChild(listItem);
//     }
//   },
// };
// locCapHill.sumCookies();
// locCapHill.render();

// var locAlki = {
//   location: 'Alki',
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookiesPerCust: 4.6,
//   custPerHour: function() {
//     return 2 + Math.floor(Math.random() * 15);
//   },
//   cookiesPerHour: function() {
//     return Math.round(this.avgCookiesPerCust * this.custPerHour());
//   },
//   hourlyTotals: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
//   sumCookies: function() {
//     var sum = 0;
//     for (var i = 0; i < this.hourlyTotals.length - 1; i++) {
//       var hourlyCookies = this.cookiesPerHour();
//       sum += hourlyCookies;
//       console.log(sum);
//       this.hourlyTotals[i] = this.hourlyTotals[i] + hourlyCookies + ' cookies';
//     }
//     this.hourlyTotals[i] = this.hourlyTotals[i] + sum + ' cookies';
//     console.log(this.hourlyTotals);
//   },
//   render() {
//     var listTitle = document.createElement('p');
//     listTitle.textContent = this.location;
//     var listContainer = document.createElement('ul');
//     var position = document.getElementById('main-content');
//     position.appendChild(listTitle);
//     position.appendChild(listContainer);

//     for(var i = 0; i < this.hourlyTotals.length; i++) {
//       var listItem = document.createElement('li');
//       listItem.textContent = this.hourlyTotals[i];
//       var mainEl = document.getElementById('main-content');
//       mainEl.appendChild(listItem);
//     }
//   },
// };
// locAlki.sumCookies();
// locAlki.render();