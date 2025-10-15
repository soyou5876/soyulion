document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('.main');
    const writeBtn = document.querySelector('.write_btn');
    const writeWrap = document.querySelector('.write_wrap');
    const newNoteInput = document.querySelector('.write_pop input');
    const cancleBtn = document.querySelector('.cancle');
    const applyBtn = document.querySelector('.apply');
    const empty = document.querySelector('.empty');
    const listContainer = document.querySelector('.main .list');

    let todos = [];

    const renderTodos = () => {
        listContainer.innerHTML = '';

        if (listContainer) {
            listContainer.classList.remove('list');
        }

        if (todos.length === 0) {
            empty.style.display = 'flex';
            main.classList.remove('has-items');
            return;
        } else {
            empty.style.display = 'none';
            main.classList.add('has-items');
        }

        todos.forEach(todo => {
            const todoId = `check-${todo.id}`;
            const todoElement = document.createElement('div');
            todoElement.classList.add('list');
            if (todo.completed) {
                todoElement.classList.add('completed');
            }
            todoElement.innerHTML = `
                <div class="check_wrap">
                    <input type="checkbox" id="${todoId}" ${todo.completed ? 'checked' : ''}>
                    <label for="${todoId}"></label>
                </div>
                <p class="content">${todo.text}</p>
                <div class="button_wrap">
                    <button class="modify"></button>
                    <button class="delete"></button>
                </div>
            `;
            listContainer.appendChild(todoElement);
        });
    };

    const addTodo = () => {
        const text = newNoteInput.value.trim();
        if (text === '') {
            alert('내용을 입력해주세요.');
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: text,
            completed: false
        };

        todos.push(newTodo);
        renderTodos();
        newNoteInput.value = '';
        closePopup();
    };

    const openPopup = () => {
        writeWrap.style.display = 'flex';
        newNoteInput.focus();
    };

    const closePopup = () => {
        writeWrap.style.display = 'none';
    };

    writeBtn.addEventListener('click', openPopup);
    cancleBtn.addEventListener('click', closePopup);
    applyBtn.addEventListener('click', addTodo);

    listContainer.addEventListener('change', (e) => {
        if (e.target.matches('input[type="checkbox"]')) {
            const item = e.target.closest('.list');
            const idStr = e.target.id.replace('check-', '');
            const id = Number(idStr);
            const todo = todos.find(t => t.id === id);
            if (todo) {
                todo.completed = e.target.checked;
                item.classList.toggle('completed', todo.completed);
            }
        }
    });

    listContainer.addEventListener('click', (e) => {
        const deleteBtn = e.target.closest('.delete');
        const modifyBtn = e.target.closest('.modify');
        const item = e.target.closest('.list');
        if (!item) return;

        const checkbox = item.querySelector('input[type="checkbox"]');
        const id = Number(checkbox.id.replace('check-', ''));

        if (deleteBtn) {
            todos = todos.filter(t => t.id !== id);
            renderTodos();
            return;
        }

        if (modifyBtn) {
            const contentEl = item.querySelector('.content');
            if (item.querySelector('.edit-input')) return;

            const originalText = contentEl.textContent;
            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'edit-input';
            input.value = originalText;

            contentEl.replaceWith(input);
            input.focus();
            input.setSelectionRange(input.value.length, input.value.length);


            const save = () => {
                const newText = input.value.trim();
                if (newText === '') {
                    alert('내용을 입력해주세요.');
                    input.focus();
                    return;
                }
                const t = todos.find(t => t.id === id);
                if (t) t.text = newText;
                const newP = document.createElement('p');
                newP.className = 'content';
                newP.textContent = newText;
                input.replaceWith(newP);
            };

            const cancel = () => {
                const newP = document.createElement('p');
                newP.className = 'content';
                newP.textContent = originalText;
                input.replaceWith(newP);
            };

            input.addEventListener('keydown', (ev) => {
                if (ev.key === 'Enter') save();
                if (ev.key === 'Escape') cancel();
            });

            input.addEventListener('blur', save);
        }
    });
});
