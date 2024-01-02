const inputElement = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.querySelector("button");

button.addEventListener("click", addTask);

function addTask() {
  if (inputElement.value === "") {
    alert("Please enter a task!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputElement.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    let deleteImage = document.createElement("img");
    deleteImage.style.width = "15px";
    deleteImage.style.alignItems = "center";
    deleteImage.style.justifyContent = "center";
    deleteImage.classList.add("delete-img");
    deleteImage.src = "./images/deleteIcon.jpg";
    span.appendChild(deleteImage);
    li.appendChild(span);
  }

  inputElement.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("Tasks", listContainer.innerHTML);
}

function displayData() {
  listContainer.innerHTML = localStorage.getItem("Tasks");
}
displayData();
