const y = document.getElementById("year");
const this_year = new Date().getFullYear();
year.setAttribute("datetime", this_year);
year.textContent = this_year;