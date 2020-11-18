var tool = "rock";
console.log(tool);

var d = new Date();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]; //Array for each month
document.getElementById("day").innerHTML = d.getDate();
document.getElementById("month").innerHTML = months[d.getMonth()];    //Get the current date base on the Array
document.getElementById("year").innerHTML = d.getFullYear();
