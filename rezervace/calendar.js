let currentMonth = 0;
const months = [
  "Leden",
  "Únor",
  "Březen",
  "Duben",
  "Květen",
  "Červen",
  "Červenec",
  "Srpen",
  "Září",
  "Říjen",
  "Listopad",
  "Prosinec",
];
const monthsLenght = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //as it's just school project, I'm not including leap years
let currentYear = 2025;

const renderCalendar = () => {
  document.querySelector("#currentMonth").innerHTML = `${months[currentMonth]} ${currentYear}`;
  document.querySelector("#calendarBody").innerHTML = "";
  for (let i = 1; i <= monthsLenght[currentMonth]; i++) {
    const calendarItem = document.createElement("div");
    calendarItem.classList = "calendarItem";
    calendarItem.addEventListener("click", (event) => {
      const timePicker = document.querySelector("#timePickerDialog");
      const display = getComputedStyle(timePicker).display;
      if (display === "none") {
        timePicker.style.display = "grid";
        event.stopPropagation();
      }
    });
    const calendarText = document.createElement("p");
    calendarText.innerHTML = i;
    calendarItem.appendChild(calendarText);
    document.querySelector("#calendarBody").appendChild(calendarItem);
  }
};

renderCalendar();

const prevMonth = () => {
  if (currentMonth == 0) {
    currentMonth = 11;
    currentYear--;
  } else {
    currentMonth--;
  }
  renderCalendar();
};

const nextMonth = () => {
  if (currentMonth == 11) {
    currentMonth = 0;
    currentYear++;
  } else {
    currentMonth++;
  }
  renderCalendar();
};

const showDropDown = () => {
  const dropDown = document.querySelector("#dropDownList");
  const display = getComputedStyle(dropDown).display;
  if (display === "none") {
    dropDown.style.display = "flex";
  } else {
    dropDown.style.display = "none";
  }
};

const dropDownButtons = document.querySelectorAll(".dropDownButton");
dropDownButtons.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("#dropDownText").innerHTML = item.innerHTML;
    showDropDown();
  });
});

document.body.addEventListener("click", () => {
  const timePicker = document.querySelector("#timePickerDialog");
  const display = getComputedStyle(timePicker).display;
  if (display === "grid") {
    timePicker.style.display = "none";
  }
});

const timePickerItems = document.querySelectorAll(".checkBox");

timePickerItems.forEach((timePickerItem) => {
  timePickerItem.addEventListener("click", (event) => {
    const existingChecks = document.querySelectorAll(".check");
    existingChecks.forEach((check) => {
      check.remove();
    });
    const image = document.createElement("img");
    image.classList = "check";
    image.src = "https://lukasknize.github.io/uni-project-medical-web/icons/check-svgrepo-com.svg";
    event.target.appendChild(image);
  });
});
