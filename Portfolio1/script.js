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

function showList (){
  var list = document.getElementById("html-list");
  if (list.style.display == "none"){
        list.style.display = "block";
    }else{
        list.style.display = "none";
    }
}
function cssList(){
  var list1 = document.getElementById("css-list");
  if (list1.style.display == "none"){
        list1.style.display = "block";
    }else{
        list1.style.display = "none";
    }
}
function javaList (){
  var list2 = document.getElementById("java-list");
  if (list2.style.display == "none"){
        list2.style.display = "block";
    }else{
        list2.style.display = "none";
    }
}
function colorList (){
  var list3 = document.getElementById("color-list");
  if (list3.style.display == "none"){
        list3.style.display = "block";
    }else{
        list3.style.display = "none";
    }
}
function imgList (){
  var list4 = document.getElementById("image-section-list");
  if (list4.style.display == "none"){
        list4.style.display = "block";
    }else{
        list4.style.display = "none";
    }
}
