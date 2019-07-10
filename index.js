var display = function (name) {
    console.log("Hello !!!", name);
}
display("Vinod");

// Syntax
var display_arrow = (name) => {
    console.log("Hello From Arrow!!!", name);
}
display_arrow("Kumar");


var yearOfBirth = 2000;
var Person = function (name, yearOfBirth, isMarried, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.isMarried = isMarried;
    this.job = job;
    this.display = function () {
        console.log(name, yearOfBirth, isMarried, job);
    }
    this.calculateAge = function (currentYear) {

        // function getAge(year) {
        //     return year - this.yearOfBirth;
        // }

        var getAge = (year) => {
            return year - this.yearOfBirth;
        }

        console.log("Age: ", getAge(currentYear));
    }
}

var vinod = new Person("Vinod", 1990, false, 'Teacher');
vinod.display();
vinod.calculateAge(2019);
