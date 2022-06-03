// set date in header 
// $("#currentDay").append(moment().format("dddd, MMMM Do"));

// var workHours = 8;
// var tasks = {};
// var rows = {};
// //infor needed to be stored locally for permenance
// var stuffToSave = {
//   //need date to clear for each new day
//   saveDate: currentDay,
//   //need time to know which row to populate on reload
//   // timeColumnTime: time,
//   // need task to know what to fill textArea with
//   task: {}
// };


// // create task bars to dynamically add to page
// var createTaskBar = function (index) {
//   //create the row
//   var timeBlock = $("<div>").addClass("row");
//   //create the columns
//   var taskHour = $("<div>").attr("id", index + "hour").addClass("col hour");
//   var taskText = $("<textarea>").attr("id", index + "text").addClass("col-10");
//   var taskSave = $("<button>").attr("id", index + "save").addClass("col saveBtn");
//   // create the icon
//   var saveIcon = $("<i>").addClass("fa-solid fa-floppy-disk");
//   // attach the icon to the save column
//   taskSave.append(saveIcon);
//   //attach all three columns to the row
//   timeBlock.append(taskHour, taskText, taskSave);
//   //add the row containing 3 columns to the page
//   $(".container").append(timeBlock);
// };

// var initializePage = function (index) {
//   var newTaskHour = $("<div>").attr("id", index + "hour").addClass("col hour");
//   console.log(newTaskHour);
//   var workHours = [
//     9, 10, 11, 12, 13, 14, 15, 16];

//   for (var i = 0; i < workHours.length; i++) {
//     createTaskBar(i);
//     //assign timeblocks time(left column) from 9AM-5PM with moment().format("hA")
//     var time = moment().set("hour", 9 + i).format("hA");
//     console.log($(newTaskHour));
//     console.log(time);
//     $(taskHour).textContent = time;
//     console.log($(taskHour).textContent);
//     // i don't know how to set the value of taskHour to time and make it display on page!?
//     //maybe I need to do it in HTML?? don't know how to target dynamic creations
//     // retrieve values from local storage for middle textarea column
//     //if savedDate = moment(), else clear localStorage
//   }
// };



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
// var saveData = function (taskText) {
//   //var index = data-index of saveTask
//   var savedTextarea = taskText;//with associated data-index of save click
//   var savedDate = moment().format("dddd, MMMM Do")
//   var storedInfo = {
//     text: savedTextarea.value,
//     date: savedDate,
//   }
//   localStorage.setItem("textarea", JSON.stringify(storedInfo))
// }

// $("taskHour").click(function () {
//   console.log("click worked");
//   saveData();
// })

// initializePage();



//abandoning dynamic creation...it is too hard :(
//new session
$(document).ready(function () {
  //set date at top of schedule
  $("#currentDay").append(moment().format("dddd, MMMM Do"));

  var workHours = [9, 10, 11, 12, 13, 14, 15, 16];
  //get storage
  setInterval(function () {
    //loop through to check past/present/future and load tasks
    for (var i = 0; i < workHours.length; i++) {
      $("#hour-" + workHours[i] + " .description").val(localStorage.getItem(workHours[i]));
    }
    //updating current time to evaluate past present future
    //loop over timeblocks .row to color code past/present/future
    $(".row").each(function () {
      var currentTime = moment().hour();
      var timeScheduled = parseInt($(this).attr("id").split("-")[1]);
      if (timeScheduled < currentTime) {
        $(this).addClass("past").removeClass("present").removeClass("future");
      }
      else if (timeScheduled === currentTime) {
        $(this).addClass("present").removeClass("past").removeClass("future");
      }
      else {
        $(this).addClass("future").removeClass("past").removeClass("present");
      };
    });
  }, (15000));

  //load tasks previously stored to localStorage
  for (var i = 0; i < workHours.length; i++) {
    //loop through each work hour
    $("#hour-" + workHours[i] + " .description").val(localStorage.getItem(workHours[i]));
  };

  //listen for button click
  $(".row .saveBtn").on("click", function (e) {
    var btn = e.target;
    var index = btn.dataset.index;
    // get nearby values to save to local storage
    var taskText = $("textarea[data-index=" + "'" + index + "'" + "]").val();
    // use time as key for local storage
    var time = $(this).parent().attr("id").split("-")[1];
    // set localStorage with time and textarea
    localStorage.setItem(time, taskText);
  });
});