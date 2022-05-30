var tasks = {};

//create task bars
var createTaskBar = function () {
  var timeBlock = $("<div>").addClass("row");
  var taskHour = $("<div>").addClass("col hour");
  var taskText = $("<textarea>").addClass("col-9");
  var taskSave = $("<div>").addClass("col saveBtn");
  timeBlock.append(taskHour, taskText, taskSave);
  $(".container").append(timeBlock);
};

var initializePage = function() {
  var workHours = 8;
  for (var i=0;i<workHours;i++){
    createTaskBar();
  }
};

// set date in header using momentjs for current day format moment().format("dddd,MMMM Do")
$("#currentDay").append(moment().format("dddd, MMMM Do"));

//create timeblocks from 9AM-5PM moment().format("hA")
var hourBlock = $("#hour");

// add colors, current hour = bg-danger, not happened yet = bg-success, old =bg-secondary
// moment object evaluating against time
// text is always dark...last class
//like taskMaster, check status every 15min to evaluate current time


// edit middle column with jquery textarea

//save with right column
//localStorage.setItem("task", middlecolumn)

initializePage();
