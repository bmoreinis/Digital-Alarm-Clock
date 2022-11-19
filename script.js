var h, m, hA, mA, sessionA, time, alarmTime;
var session = "AM";
var alarmSet = false;
var alarmButton = document.getElementById("alarmSet");
var clock = document.getElementById("clock");

function showClock() {
  alarmButton.innerHTML = "Set Alarm";
  alarmButton.setAttribute("onClick", "setAlarm()");
  document.getElementById("clock").style.display = "block";
  showTime();
}

function showTime() {
  date = new Date();
  h = date.getHours();
  m = date.getMinutes();
  if (h == 0) h = 12;
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }
  m = (m < 10) ? "0" + m : m;
  time = h + ":" + m + " " + session;
  clock.innerText = time;
  if (alarmSet == true) checkAlarm(h, m);
  setTimeout(showTime, 60 * 1000);
}

function checkAlarm(h, m) {
  if (time == alarmTime) {
    alert("Ring! It's " + alarmTime);
    document.getElementById('audio').play();
  } 
  clearAlarm();
}

function setAlarm() {
  hA = prompt("hour?");
  mA = prompt("minute?");
  sessionA = prompt("AM or PM?").toUpperCase();
  alarmTime = hA + ":" + mA + " " + sessionA;
  alarmSet = true;
  clock.classList.add("alarmActive");
  alarmButton.innerHTML = "Remove " + alarmTime;
  alarmButton.setAttribute("onClick", "clearAlarm()");
}

function clearAlarm() {
  hA = "00";
  mA = "00";
  clock.classList.remove("alarmActive");
  alarmButton.innerHTML = "Set Alarm";
  alarmButton.setAttribute("onClick", "setAlarm()");
}