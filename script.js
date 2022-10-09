
window.addEventListener("DOMContentLoaded", showTime());

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

  bg = 'url(background.jpg)';

  if (h >= 5 && h <= 10 && session === "AM") {
    user.innerHTML = `Good Morning.., ${userName}`;
  } else if (h > 10 && h <= 12 && session === "AM") {
    user.innerHTML = `Good Day.., ${userName}`;
  } else if (h > 12 && h <= 3 && session === "PM") {
    user.innerHTML = `Good Afternoon.., ${userName}`;
  } else if (h > 3 && h <= 7 && session === "PM") {
    user.innerHTML = `Good Evening.., ${userName}`;
  } else {
    user.innerHTML = `Good Night.., ${userName}`;
  }

  const body = document.querySelector("body");
  body.style.background = `${bg} center/cover`;
}

document
  .querySelector(".focus-container input")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      const focus = document.querySelector(".focus-container input");
      document.querySelector(
        ".focus-container"
      ).innerHTML = `<h6>TODAY:</h6><h1>${focus.value}</h1>`;
    }
  });