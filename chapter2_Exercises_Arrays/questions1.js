/* 
    Create a grades object that stores a set of student grades in an object. Provide a
    function for adding a grade and a function for displaying the student’s grade average. 
*/

// function constructor
function Grades() {
  this.data = [];
  this.add = (grade) => {
    this.data.push(grade);
  };
  this.displayAvg = () => {
    var sum = 0;
    sum = this.data.reduce((total, e) => (total += e));

    console.log("The average is: " + sum / this.data.length);
  };
}

// test //

// now we have object have the defined methods and propertey data as array
var grades = new Grades();

grades.add(5);
grades.add(3);
grades.add(8);
grades.add(7);
grades.add(5);

grades.displayAvg();
