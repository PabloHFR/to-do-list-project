function getDate() {
  const date = new Date();
  [day, weekday, month, year] = [
    date.getDate(),
    date.toLocaleString("pt-BR", { weekday: "long" }),
    date.toLocaleString("en-US", { month: "short" }),
    date.getFullYear(),
  ];
}

function updateDate() {
  dateDayElement.textContent = day;
  weekdayElement.textContent = weekday;
  dateMonthElement.textContent = month;
  dateYearElement.textContent = year;
}
