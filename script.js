function addTodo() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
    
    if (todoText !== "") {
        const todoList = document.getElementById('todo-list');
        const listItem = document.createElement('li');

        const textSpan = document.createElement('span');
        textSpan.innerText = todoText;
        textSpan.className = 'todo-text';

        const actionsDiv = document.createElement('div');
        actionsDiv.className = 'actions';

        const editButton = document.createElement('button');
        editButton.innerText = 'Edit';
        editButton.className = 'edit-button';
        editButton.onclick = function() {
            editTodoItem(textSpan);
        };

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '🗑️';
        deleteButton.className = 'delete-button';
        deleteButton.onclick = function() {
            todoList.removeChild(listItem);
        };

        actionsDiv.appendChild(editButton);
        actionsDiv.appendChild(deleteButton);
        listItem.appendChild(textSpan);
        listItem.appendChild(actionsDiv);
        todoList.appendChild(listItem);

        input.value = '';
        input.focus();
    }
}

function editTodoItem(textSpan) {
    const newText = prompt("Edit your task:", textSpan.innerText);
    if (newText !== null && newText.trim() !== "") {
        textSpan.innerText = newText.trim();
    }
}

function searchTodo() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const todoItems = document.querySelectorAll('#todo-list li');
    
    todoItems.forEach(item => {
        const text = item.querySelector('.todo-text').innerText.toLowerCase();
        if (text.includes(searchInput)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function toggleSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput.style.display === 'none' || searchInput.style.display === '') {
        searchInput.style.display = 'block';
        searchInput.focus();
    } else {
        searchInput.style.display = 'none';
        searchInput.value = '';
        searchTodo();
    }
}
