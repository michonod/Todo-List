const todos = ['Make some coffee', 'Brush your teeth'];
let yourAnswer = prompt('What do you like to do?');
let addedTodos = 0;
let deletedTodos = 0;

while(yourAnswer !== 'quit'){
if(yourAnswer === 'new'){
    addedTodos ++;
    const newTodo = prompt('Enter a new todo')
    todos.push(newTodo);
}else if(yourAnswer === 'list'){
    alert(todos);
}else if(yourAnswer === 'delete'){
    deletedTodos ++;
    if(!todos.length){
        alert('There are no more todos')
    }
    const deleteTodo = prompt('Enter a index to remove');
    todos.splice(deleteTodo, 1);
    alert(todos)
}
    yourAnswer = prompt('What do you like to do')
}

alert(`Thank you for using this application. You enter ${addedTodos} todos, and delete ${deletedTodos}`)