var todos = ["Buy new turtle"];
var input = prompt ("What whould you like to do?");

while(input !== "quit") {
    // handler input
    if(input ==="list") {
        listTodos();
    } else if(input === "new") {
        addTodo();
    } else if (input === "delete"){
       deleteTodo();
    }

    // ask again for new input
    input = prompt("What whould you like to do?");
}
console.log("OK, you quit the app");

function listTodos(){
    console.log("***********");
    todos.forEach(function(todo,index) {
    console.log(index +": " + todo);
    });
    console.log("***********")
}

function addTodo() {
    var newtodo = prompt("Enter new todo");
    // add to todos array
    todos.push(newtodo);
    console.log("added todo");
}

function deleteTodo() {
    // ask for idex todo to be delted
    // delete that todo
    var index = prompt("Enter index of todo to delete");
    // delete that todo
    todos.splice(index, 1);
    console.log("Deleted todo");
}