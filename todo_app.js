const addForm = document.querySelector('.add');
const todoList = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
    const todoHtml = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
            </li>
    `;

    todoList.innerHTML += todoHtml;

}

// add todo
addForm.addEventListener('submit', e => {

    e.preventDefault();
    
    const todo = addForm.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
    }
    addForm.reset();
    
});

// remove todo
todoList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

// filter funcionality for keyup event
const filterTodos = (searchQuery) => {
    Array.from(todoList.children)
        .filter((todo) => !todo.textContent.toLowerCase().includes(searchQuery))
        .forEach((todo) => todo.classList.add('filtered'));

    Array.from(todoList.children)
        .filter((todo) => todo.textContent.toLowerCase().includes(searchQuery))
        .forEach((todo) => todo.classList.remove('filtered'))
};

// keyup event for search
search.addEventListener('keyup', () => {
    const searchQuery = search.value.trim().toLowerCase();
    filterTodos(searchQuery);
});