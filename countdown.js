function dateAgo(date) {
  var startDate = new Date(date);
  var diffDate = new Date(new Date() - startDate);
  let Y = diffDate.toISOString().slice(0, 4) - 1970;
  let M = diffDate.getMonth();
  let D = diffDate.getDate() - 1;

  let hours = diffDate.getHours();
  let minutes = diffDate.getMinutes();
  let seconds = diffDate.getSeconds();

  if (hours == 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  document.querySelector('#Years').innerText = Y;
  document.querySelector('#Months').innerText = M;
  document.querySelector('#Days').innerText = D;
  document.querySelector('#Hours').innerText = hours;
  document.querySelector('#Minutes').innerText = minutes;
  document.querySelector('#Seconds').innerText = seconds;
}

setInterval(() => dateAgo('2020-02-09'), 1000);
