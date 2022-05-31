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

  // create task bars
var createTaskBar = function (index) {
  //create the row
  var timeBlock = $("<div>").addClass("row");
  //create the columns
  var taskHour = $("<div>").addClass("col hour").attr("data-index", index);
  taskHour.value = moment().set("hour", 9+index).format("hA");
  console.log(taskHour.value);
  var taskText = $("<textarea>").addClass("col-9").attr("data-index", index);
  var taskSave = $("<div>").addClass("col saveBtn").attr("data-index", index);
  // create the icon
  var saveIcon = $("<i>").addClass("fa-solid fa-floppy-disk").attr("data-index", index);
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
  //var saveIcon = $("<i>").addClass("fa-solid fa-floppy-disk");
  for (var i = 0; i < workHours; i++) {
    createTaskBar(i);
    //assign timeblocks time(left column) from 9AM-5PM with moment().format("hA")
    //$("newHour").value = moment().set("hour", 9 + i).format("hA");
    //target first column of row and add time to it as it is created
    //maybe I need to do it in HTML?? don't know how to target dynamic creations
  }
};

initializePage();

// add colors, current hour = bg-danger, not happened yet = bg-success, old =bg-secondary
// moment object evaluating against time
// text is always dark...last class
// set interval (1 hour) and check timeblock time vs moment().get("hour")
// if timeblock time < get(hour) setClass("past")
// if timeblock = get(hour) setClass("present")
// if timeblock > get(hour) setClass("future")
// if current moment() is > current day, clear localStorage


// edit middle column with jquery textarea
// should be native with textarea?
// save with right column
// on("click", function(){
  //save middle column to array with index
// })
// localStorage.setItem("task", middlecolumn)

//initializePage();
