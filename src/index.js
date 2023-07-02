document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target["new-task-description"].value);
    form.reset();
  });
  
  function buildToDo(todo){
    const li = document.createElement('li');
    const btn = document.createElement('button');
    btn.addEventListener('click', handleDelete);
    btn.textContent = 'x';
    li.textContent = `${todo} `;
    li.appendChild(btn);
    document.querySelector('#tasks').appendChild(li);
   };

function handleDelete(e){
  e.target.parentNode.remove();
}

});
