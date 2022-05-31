// set date in header 
$("#currentDay").append(moment().format("dddd, MMMM Do"));
var workHours = 8;
var tasks = {};
var rows = {};
//infor needed to be stored locally for permenance
var stuffToSave = {
  //need date to clear for each new day
  todaysDate: Date,
  //need time to know which row to populate on reload
  // timeColumnTime: time,
  // need task to know what to fill textArea with
  task: {}
};

// var setTime=function(){
//   for(var i=0;i<workHours;i++){
//     var time =moment().set("hour",9+i).format("hA");
//     $("#hour").attr("data-index",i).value = time; 
//   };
// };
// setTime();

  // added task bars in HTML
  // create task bars
var createTaskBar = function (index) {
  //create the row
  var timeBlock = $("<div>").addClass("row");
  //create the columns
  var taskHour = $("<div>").addClass("col hour").attr("data", index);
  taskHour.value = moment().set("hour", 9+index).format("hA");
  console.log(taskHour.value);
  var taskText = $("<textarea>").addClass("col-9").attr("data", index);
  var taskSave = $("<div>").addClass("col saveBtn").attr("data", index);
  // create the icon
  var saveIcon = $("<i>").addClass("fa-solid fa-lock").attr("data", index);
  // attach the icon to the save column
  taskSave.append(saveIcon);
  //attach all three columns to the row
  timeBlock.append(taskHour, taskText, taskSave);
  //add the row containing 3 columns to the page
  $(".container").append(timeBlock);

};

var initializePage = function () {
  var workHours = 8;
  //var timeBlock = $("<div>").addClass("row");
  //create the columns
  //var taskHour = $("<div>").addClass("col hour");
  //var taskText = $("<textarea>").addClass("col-9");
  //var taskSave = $("<div>").addClass("col saveBtn");
  // create the icon
  //var saveIcon = $("<i>").addClass("fa-solid fa-lock");
  for (var i = 0; i < workHours; i++) {
    //var newHour = $("taskHour").addId("index"+i);
    createTaskBar(i);
    //$(document.querySelector(".hour").data)
    //$("newHour").value = moment().set("hour", 9 + i).format("hA");
    //target first column of row and add time to it as it is created
    //maybe I need to do it in HTML?? don't know how to target dynamic creations
  }
};
initializePage();
// // Construct some new DOM element.
// $(whatever).html('... id="mynewthing"...');

// // This won't work...
// $("#mynewthing")...

// // But this will...
// $(document.getElementById("mynewthing"))...



//create timeblocks from 9AM-5PM moment().format("hA")



// add colors, current hour = bg-danger, not happened yet = bg-success, old =bg-secondary
// moment object evaluating against time
// text is always dark...last class
//like taskMaster, check status every 15min to evaluate current time


// edit middle column with jquery textarea

//save with right column
//localStorage.setItem("task", middlecolumn)

//initializePage();
