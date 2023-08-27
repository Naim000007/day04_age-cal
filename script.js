const getdate = document.getElementById("date");
const button = document.getElementById("cal");

// Set the maximum selectable date to today
// getdate.max = new Date().toISOString().split('T')[0];

button.addEventListener("click", function () {
  const selectedDate = new Date(getdate.value);
  const currentDate = new Date();

  const yearDifference = currentDate.getFullYear() - selectedDate.getFullYear();
  const monthDifference = currentDate.getMonth() - selectedDate.getMonth();
  const dayDifference = currentDate.getDate() - selectedDate.getDate();

  if (dayDifference < 0) {
    monthDifference--;
    const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    dayDifference += lastMonth.getDate();
  }

  if (monthDifference < 0) {
    yearDifference--;
    monthDifference += 12;
  }

  const age = document.getElementById('age');
  age.innerHTML = `${yearDifference} years, ${monthDifference} months, and ${dayDifference} days`;
});

