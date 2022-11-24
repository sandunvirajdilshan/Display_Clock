
window.addEventListener("DOMContentLoaded", showTime());

function appmenu(){
  
}

function showTime() {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? (h = "0" + h) : h;
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;

  const time = `${h}:${m}<small>|${session}</small>`;

  document.getElementById("displayClock").innerHTML = time;
  setTimeout(showTime, 1000);

  let bg;
  const userName = "Sandun.";
  const user = document.getElementById("User");
  const title = document.getElementById("title");

  bg = 'url(assets/img/background_1.jpg)';

  if (h >= 5 && h <= 8 && session === "AM") {
    user.innerHTML = `Good Morning.., ${userName}`;
    title.innerHTML = 'Good Morning';
  } else if (h > 8 && h < 12 && session === "AM") {
    user.innerHTML = `Good Morning.., ${userName}`;
    title.innerHTML = 'Good Morning';
  } else if (h >= 1 && h <= 3 && session === "PM") {
    user.innerHTML = `Good Day.., ${userName}`;
    title.innerHTML = 'Good Day';
  } else if (h <= 7 && session === "PM") {
    user.innerHTML = `Good Evening.., ${userName}`;
    title.innerHTML = 'Good Evening';
  } else {
    user.innerHTML = `Good Night.., ${userName}`;
    title.innerHTML = 'Good Night'; 
}

  const body = document.querySelector("body");
  body.style.background = `${bg} center/cover`;
}


