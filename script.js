var h, m, alarmHour, alarmMinutes, sessionA, time, alarmTime, dateToday;
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
  dateToday = new Date();
  h = dateToday.getHours();
  m = dateToday.getMinutes();
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

function checkAlarm() {
  if (time == alarmTime) {
    alert("Ring! It's " + alarmTime);
    document.getElementById('audio').play();
  }
  clearAlarm();
}

function setAlarm() {
  alarmHour = prompt("hour?");
  alarmMinutes = prompt("minute?");
  sessionA = prompt("AM or PM?").toUpperCase();
  alarmTime = alarmHour + ":" + alarmMinutes + " " + sessionA;
  alarmSet = true;
  clock.classList.add("alarmActive");
  alarmButton.innerHTML = "Remove " + alarmTime;
  alarmButton.setAttribute("onClick", "clearAlarm()");
}

function clearAlarm() {
  alarmHour = "00";
  alarmMinutes = "00";
  clock.classList.remove("alarmActive");
  alarmButton.innerHTML = "Set Alarm";
  alarmButton.setAttribute("onClick", "setAlarm()");
}