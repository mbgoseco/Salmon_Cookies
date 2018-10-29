'use strict';

var loc1stPike = {
  location: '1st and Pike',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerCust: 6.3,
  custPerHour: function() {
    return 23 + Math.floor(Math.random() * 43);
  },
  cookiesPerHour: function() {
    return Math.round(this.avgCookiesPerCust * this.custPerHour());
  },
  hourlyTotals: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  sumCookies: function() {
    var sum = 0;
    for (var i = 0; i < this.hourlyTotals.length - 1; i++) {
      var hourlyCookies = this.cookiesPerHour();
      sum += hourlyCookies;
      console.log(sum);
      this.hourlyTotals[i] = this.hourlyTotals[i] + hourlyCookies + ' cookies';
    }
    this.hourlyTotals[i] = this.hourlyTotals[i] + sum + ' cookies';
    console.log(this.hourlyTotals);
  },
  render() {
    var listTitle = document.createElement('p');
    listTitle.textContent = this.location;
    var listContainer = document.createElement('ul');
    var position = document.getElementById('main-content');
    position.appendChild(listTitle);
    position.appendChild(listContainer);

    for(var i = 0; i < this.hourlyTotals.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = this.hourlyTotals[i];
      var mainEl = document.getElementById('main-content');
      mainEl.appendChild(listItem);
    }
  },
};
loc1stPike.sumCookies();
loc1stPike.render();

var locSeaTac = {
  location: 'SeaTac Airport',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiesPerCust: 1.2,
  custPerHour: function() {
    return 3 + Math.floor(Math.random() * 22);
  },
  cookiesPerHour: function() {
    return Math.round(this.avgCookiesPerCust * this.custPerHour());
  },
  hourlyTotals: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  sumCookies: function() {
    var sum = 0;
    for (var i = 0; i < this.hourlyTotals.length - 1; i++) {
      var hourlyCookies = this.cookiesPerHour();
      sum += hourlyCookies;
      console.log(sum);
      this.hourlyTotals[i] = this.hourlyTotals[i] + hourlyCookies + ' cookies';
    }
    this.hourlyTotals[i] = this.hourlyTotals[i] + sum + ' cookies';
    console.log(this.hourlyTotals);
  },
  render() {
    var listTitle = document.createElement('p');
    listTitle.textContent = this.location;
    var listContainer = document.createElement('ul');
    var position = document.getElementById('main-content');
    position.appendChild(listTitle);
    position.appendChild(listContainer);

    for(var i = 0; i < this.hourlyTotals.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = this.hourlyTotals[i];
      var mainEl = document.getElementById('main-content');
      mainEl.appendChild(listItem);
    }
  },
};
locSeaTac.sumCookies();
locSeaTac.render();

var locSeattleCenter = {
  location: 'Seattle Center',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiesPerCust: 3.7,
  custPerHour: function() {
    return 11 + Math.floor(Math.random() * 28);
  },
  cookiesPerHour: function() {
    return Math.round(this.avgCookiesPerCust * this.custPerHour());
  },
  hourlyTotals: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  sumCookies: function() {
    var sum = 0;
    for (var i = 0; i < this.hourlyTotals.length - 1; i++) {
      var hourlyCookies = this.cookiesPerHour();
      sum += hourlyCookies;
      console.log(sum);
      this.hourlyTotals[i] = this.hourlyTotals[i] + hourlyCookies + ' cookies';
    }
    this.hourlyTotals[i] = this.hourlyTotals[i] + sum + ' cookies';
    console.log(this.hourlyTotals);
  },
  render() {
    var listTitle = document.createElement('p');
    listTitle.textContent = this.location;
    var listContainer = document.createElement('ul');
    var position = document.getElementById('main-content');
    position.appendChild(listTitle);
    position.appendChild(listContainer);

    for(var i = 0; i < this.hourlyTotals.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = this.hourlyTotals[i];
      var mainEl = document.getElementById('main-content');
      mainEl.appendChild(listItem);
    }
  },
};
locSeattleCenter.sumCookies();
locSeattleCenter.render();

var locCapHill = {
  location: 'Capitol Hill',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiesPerCust: 2.3,
  custPerHour: function() {
    return 20 + Math.floor(Math.random() * 19);
  },
  cookiesPerHour: function() {
    return Math.round(this.avgCookiesPerCust * this.custPerHour());
  },
  hourlyTotals: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  sumCookies: function() {
    var sum = 0;
    for (var i = 0; i < this.hourlyTotals.length - 1; i++) {
      var hourlyCookies = this.cookiesPerHour();
      sum += hourlyCookies;
      console.log(sum);
      this.hourlyTotals[i] = this.hourlyTotals[i] + hourlyCookies + ' cookies';
    }
    this.hourlyTotals[i] = this.hourlyTotals[i] + sum + ' cookies';
    console.log(this.hourlyTotals);
  },
  render() {
    var listTitle = document.createElement('p');
    listTitle.textContent = this.location;
    var listContainer = document.createElement('ul');
    var position = document.getElementById('main-content');
    position.appendChild(listTitle);
    position.appendChild(listContainer);

    for(var i = 0; i < this.hourlyTotals.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = this.hourlyTotals[i];
      var mainEl = document.getElementById('main-content');
      mainEl.appendChild(listItem);
    }
  },
};
locCapHill.sumCookies();
locCapHill.render();

var locAlki = {
  location: 'Alki',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiesPerCust: 4.6,
  custPerHour: function() {
    return 2 + Math.floor(Math.random() * 15);
  },
  cookiesPerHour: function() {
    return Math.round(this.avgCookiesPerCust * this.custPerHour());
  },
  hourlyTotals: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '],
  sumCookies: function() {
    var sum = 0;
    for (var i = 0; i < this.hourlyTotals.length - 1; i++) {
      var hourlyCookies = this.cookiesPerHour();
      sum += hourlyCookies;
      console.log(sum);
      this.hourlyTotals[i] = this.hourlyTotals[i] + hourlyCookies + ' cookies';
    }
    this.hourlyTotals[i] = this.hourlyTotals[i] + sum + ' cookies';
    console.log(this.hourlyTotals);
  },
  render() {
    var listTitle = document.createElement('p');
    listTitle.textContent = this.location;
    var listContainer = document.createElement('ul');
    var position = document.getElementById('main-content');
    position.appendChild(listTitle);
    position.appendChild(listContainer);

    for(var i = 0; i < this.hourlyTotals.length; i++) {
      var listItem = document.createElement('li');
      listItem.textContent = this.hourlyTotals[i];
      var mainEl = document.getElementById('main-content');
      mainEl.appendChild(listItem);
    }
  },
};
locAlki.sumCookies();
locAlki.render();