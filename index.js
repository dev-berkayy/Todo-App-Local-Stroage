
let input = document.querySelector(".input")
let content = document.querySelector(".content")
let submit = document.querySelector(".btn2");
// let todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []

let todos;

if (localStorage.getItem("todos")) {
    todos = JSON.parse(localStorage.getItem("todos"))
} else {
    todos = []
}




submit.addEventListener("click", function () {

    if (input.value === "") {
        alert("YOU MUST  ADD SOMETHİNK")
    }

    let todo = {
        id: Math.floor(Math.random() * 9999),
        title: input.value,
        status: "todo",
        içerik: content.value
    }
    content.value = "";
    input.value = "";
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
})