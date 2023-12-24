var todoList = document.getElementById("list");
var newElementText = document.getElementById("add");
function AddElement() {
    todoList.innerHTML += `<li>${newElementText.value}<input type="checkbox"></li>`;
    newElementText.value = '';
}