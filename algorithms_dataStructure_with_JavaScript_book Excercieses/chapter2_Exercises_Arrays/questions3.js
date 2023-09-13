/* 
function weekTemps() {
    this.dataStore = [];
    this.add = add;
    this.average = average;
   }
   function add(temp) {
    this.dataStore.push(temp);
   }
   function average() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; ++i) {
    total += this.dataStore[i];
    }
    return total / this.dataStore.length;
   }
 */

/* 
    Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
    data using a two-dimensional array. Create functions to display the monthly aver‐
    age, a specific week’s average, and all the weeks’ averages.
*/

function MonthTemps() {
  this.data = [[], [], [], []];
  this.add = (week, temp) => {
    // week - 1 => because we start array from 0
    this.data[week - 1].push(temp);
  };
  this.monthAverage = () => {
    var dataLength = 0;
    var totalDeg = 0;
    for (var i = 0; i < this.data.length; i++) {
      /* dataLength += this.data[i].reduce( (counter , temp) => sum + 1 ) */
      /* this was my solution to get the number of elements but i discovered that always on the reduce function the counter take the first element as its default value and i could't handel it for example if the first element is 5 then the counter start with five and the cost to solve this is high so instead i will use for each to count them easier */
      this.data[i].forEach((temp) => (dataLength += 1));
      totalDeg += this.data[i].reduce((sum, temp) => sum + temp);
    }
    console.log("Average of this month is: " + totalDeg / dataLength);
  };
  this.weekAverage = (week) => {
    var total = 0;
    total = this.data[week - 1].reduce((sum, temp) => (sum += temp));

    console.log("week " + week + " average is: " + total / this.data.length);
  };
  this.allWeeksAverage = () => {
    this.data.forEach((week, index) => {
      this.weekAverage(index + 1);
    });
  };
}

var monthTemps = new MonthTemps();
monthTemps.add(1, 5);
monthTemps.add(1, 5);
monthTemps.add(1, 5);

monthTemps.add(2, 10);
monthTemps.add(2, 10);
monthTemps.add(2, 10);

monthTemps.add(3, 15);
monthTemps.add(3, 15);
monthTemps.add(3, 15);

monthTemps.add(4, 20);
monthTemps.add(4, 20);
monthTemps.add(4, 20);

//test

console.log("_________________________________________________________");
monthTemps.monthAverage();
console.log("_________________________________________________________");
monthTemps.allWeeksAverage();
console.log("_________________________________________________________");
monthTemps.weekAverage(1);
console.log("_________________________________________________________");
