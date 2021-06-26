document.addEventListener('DOMContentLoaded', function () {
  const formElement = document.querySelector('#js-form');
  const inputElement = document.querySelector('#js-form-input');
  const todoItemCountElement = document.querySelector('#js-todo-count');
  const todoUlElement = document.querySelector('#todo-ul');
  
  
  let todoItemCount = 0;
  
  const todoTask = [];
  
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    const todo = { comment: inputElement.value };
    inputElement.focus();
    
    if (inputElement.value === '') {
      alert('タスクを入力してください');
      return;
    }
    if (todo) {
      todoTask.push(todo);
      inputElement.value = '';
      todoItemCount +=1;
      showTodoTask();
    }
  });

  const showTodoTask = () => {
    todoUlElement.textContent = '';
    todoTask.forEach((todo, number) => {
      const todoElement = document.createElement('li');

      // チェックボタン on off の実装
      const checkButton = document.createElement('input');
      checkButton.type = 'checkbox';
      todoElement.classList.add('checkbox');

      checkButton.addEventListener('click', () => {
        if (checkButton.checked === true) {
          todoElement.classList.toggle('checked');
        } else if (checkButton.checked === false) {
          todoElement.classList.toggle('checked');
        }
      });

      todoElement.append(checkButton);

      // テキストの追加
      const todoTextComment = document.createElement('span');
      todoTextComment.textContent = todo.comment;
      todoElement.append(todoTextComment);

      // 削除ボタンの実装
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete');
      deleteButton.textContent = 'X';

      deleteButton.addEventListener('click', () => {
        todoItemCount -=1;
        todoTask.splice(number, 1);
        showTodoTask();
      });

      todoElement.appendChild(deleteButton);

      // 作成したliのHTML追加
      todoUlElement.appendChild(todoElement);

    });
    // todoのリスト数の実施
    todoItemCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;
    inputElement.value = '';
  };
  
});
