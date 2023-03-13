// Function Set App
function setApp() {
  // Create random data
  let list = [
    { id: 1, title: "Skosić trawnik" },
    { id: 2, title: "upiec ciasto" },
    { id: 3, title: "wyjść z psem" },
  ];

  // Save data to Local Storage
  localStorage.setItem("list", JSON.stringify(list));

  // Show data on front
  show();
}

// Function showing data on front
function show() {
  let list = JSON.parse(localStorage.getItem("list"));
  document.getElementById("list").innerHTML = "";

  list.forEach(
    (el) =>
      (document.getElementById(
        "list"
      ).innerHTML += `<div id="${el.id}" class="list-item"> ${el.title} 
      <button class="btn-del" id="btn-del-${el.id}" onclick="removeFromList(${el.id})">X</button>
      </div>`)
  );
}

// Function for removing item from list
function removeFromList(element) {
  let list = JSON.parse(localStorage.getItem("list"));

  list = list.filter(function (value) {
    return value.id != element;
  });

  localStorage.setItem("list", JSON.stringify(list));
  show();
}

// Function for add new item
function addToList(element) {
  if (element) {
    let list = JSON.parse(localStorage.getItem("list"));
    let nr = 0;

    if (list && list.length > 0) {
      nr = list[list.length - 1].id + 1;
    }

    let newElement = {
      id: nr,
      title: element,
    };

    $("#todoInput").val("");
    list.push(newElement);
    localStorage.setItem("list", JSON.stringify(list));

    hideError();
    show();
  } else {
    showError();
  }
}

function showError() {
  document.getElementById("error").classList.remove("d-none");
}

function hideError() {
  document.getElementById("error").classList.add("d-none");
}

document.addEventListener("DOMContentLoaded", function (event) {
  //   When app load set data and add onClick function for add New item button
  setApp();
  $("#addToList").click(function (event) {
    addToList($("#todoInput").val());
  });
});
