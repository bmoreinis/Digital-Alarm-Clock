var hA = "00";
var mA = "00";
var alarmSet = false;
function showClock() {
  let alarmButton = document.getElementById("alarmSet");
  alarmButton.innerHTML = "Set Alarm";
  alarmButton.setAttribute("onClick", "setAlarm()");
  document.getElementById("clock").style.display = "block";
  showTime();
}

function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var session = "AM";
  if (h == 0) h = 12;
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  m = (m < 10) ? "0" + m : m;
  var time = h + ":" + m + " " + session;
  document.getElementById("clock").innerText = time;
  if (alarmSet == true) checkAlarm(h, m);
  setTimeout(showTime, 60 * 1000);
}

function checkAlarm(h, m) {
  if (h == hA && m == mA) alert("Ring! It's "+ hA + ":" + mA);
  clearAlarm();
}

function setAlarm() {
  hA = prompt("hour?");
  mA = prompt("minute?");
  alarmSet = true;
  let alarmButton = document.getElementById("alarmSet");
  let clock = document.getElementById("clock");
  clock.classList.add("alarmActive");
  alarmButton.innerHTML = "Remove " + hA + ":" + mA;
  alarmButton.setAttribute("onClick", "clearAlarm()");
}

function clearAlarm() {
  hA = "00";
  mA = "00";
  let clock = document.getElementById("clock");
  clock.classList.remove("alarmActive");
  let alarmButton = document.getElementById("alarmSet");
  alarmButton.innerHTML = "Set Alarm";
  alarmButton.setAttribute("onClick", "setAlarm()");
}

