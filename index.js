var form = document.querySelector("form");
var Name = document.getElementById("name");
var Age = document.getElementById("age");
var showDetails = document.querySelector("#showDetails");

var tbody = document.querySelector("tbody");
var thead = document.querySelector("thead");

var arr = [];

if (localStorage.getItem("PersonDetails")) {
  arr = JSON.parse(localStorage.getItem("PersonDetails"));
  displayData();
}

form.addEventListener("submit", function (e) {
  showDetails.style.display = "block";
  e.preventDefault();
});

showDetails.addEventListener("click", function () {
  thead.style.visibility = "visible";
  tbody.style.visibility = "visible";
  let data = {};
  data.name = Name.value;
  data.age = Age.value;

  arr.push(data);

  localStorage.setItem("PersonDetails", JSON.stringify(arr));

  tbody.innerHTML = "";
  displayData();
  showDetails.style.display = "none";
});

function displayData() {
  arr.forEach((el, index, arr) => {
    let rowdata = document.createElement("tr");
    let serial_no = document.createElement("td");
    let person_name = document.createElement("td");
    let person_age = document.createElement("td");

    serial_no.innerText = `${index + 1}.`;
    person_name.innerText = el.name;
    person_age.innerText = el.age;

    rowdata.append(serial_no, person_name, person_age);
    tbody.append(rowdata);

    Name.value = "";
    Age.value = "";
  });
}
