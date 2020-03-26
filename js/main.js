(function() {
  var divYear = document.querySelector(".year");
  var divMonth = document.querySelector(".month");
  var td = document.querySelectorAll("td");
  var nr = 0;
  var monthNames = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ];
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDay();
  var currentDate = new Date(year, month, day);

  divYear.innerText = year;
  divMonth.innerText = monthNames[month];

  function fillNamesOfDays() {
    var dayNames = ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "N"];
    [].forEach.call(document.querySelectorAll("th"), function(day, index) {
      day.innerText = dayNames[index];
    });
  }
  fillNamesOfDays();

  function clearTd() {
    [].forEach.call(td, function(day) {
      day.innerText = "";
      day.removeAttribute("class");
      day.removeAttribute("title");
      day.removeAttribute("style");
      day.removeAttribute("tabindex");
    });
  }

  function fillDays() {
    var firstDayInMonth = new Date(year, month, 1);
    var firstDay = firstDayInMonth.getDay();
    var lastDayInMonth = new Date(year, month + 1, 0);
    var daysInMonth = lastDayInMonth.getDate();
    var n = 1;

    if (firstDay === 0) {
      firstDay = 7;
    }

    for (var i = firstDay; i < daysInMonth + firstDay; i++) {
      td[i - 1].innerText = n;
      if (td[i - 1].innerText === date.getDate().toString() && nr === 0) {
        td[i - 1].className = "current-day";
        td[i - 1].style.border = "2px solid #002333";
        td[i - 1].setAttribute("title", "Obecny dzień");
        td[i - 1].setAttribute("tabindex", "0");
      }
      n++;
    }
  }
  fillDays();

  function fillAll() {
    divMonth.innerText = monthNames[month];
    divYear.innerText = year;
    clearTd();
    fillDays();
  }

  document.querySelector(".prev").addEventListener("click", function() {
    if (month < 1) {
      month = 11;
      year--;
    } else {
      month--;
    }
    nr--;
    fillAll();
  });

  document.querySelector(".next").addEventListener("click", function() {
    if (month > 10) {
      month = 0;
      year++;
    } else {
      month++;
    }
    nr++;
    fillAll();
  });
})();