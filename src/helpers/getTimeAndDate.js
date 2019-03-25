function getTimeAndDate() {
  const now = new Date();
  let date = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let months = [
    'Janary',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  month = months[month];

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let currentDate = `${month}, ${date} ${year}`;
  let currentTime = `${hours}:${minutes}`;

  return {
    d: currentDate,
    t: currentTime
  };
}

export { getTimeAndDate };
