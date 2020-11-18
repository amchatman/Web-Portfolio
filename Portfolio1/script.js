var tool = "rock";
console.log(tool);

var d = new Date();
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov","Dec"]; //Array for each month

var d = new Date();
var curr_date = d.getDate();
var curr_month = months[d.getMonth()];
var curr_year = d.getFullYear();
var dateStr = curr_date + "-" + curr_month + "-" + curr_year;
document.getElementById("test").innerHTML = dateStr;
//console.log(curr_date + "-" + curr_month + "-" + curr_year);
