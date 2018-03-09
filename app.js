window.onload = function() {
onReady();
};
function Delete() {
  const toDoList = document.getElementById('toDoList');
  const items = toDoList.getElementsByTagName("li");
  //console.log(items.length);
  for (var i = 0; i < items.length; i++) {
    //console.log(items[i]);
    if (items[i].getElementsByTagName('input')[0].checked == true) {
      console.log(items[i]);
      toDoList.removeChild(items[i]);
      }
  }
  //console.log(toDoList);
}

function onReady() {
  //The array is the container of the todo items.
  let toDos = [];
  let id = 0;  //Id of individual todo item.

  function createNewTodo(){
    //Checks to see if textbox is empty, leave function
    if (!newToDoText.value) {return;}
    //If something is in field, add to list (array)
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });
    newToDoText.value = '';
    renderTheUI();
    //console.log(toDos);
  }

  function renderTheUI(){


    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';

//For each item in the array, execute function on the  item (argument)
      toDos.forEach(function (toDo) {
        //console.log(toDo);
        //For each item in array, turn it into a list item
        //and a checkbox
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      //Set the text of the list item to the title property
      newLi.textContent = toDo.title;
      //Add the new list item and checkbox to the unordered list
      toDoList.appendChild(newLi);
      //Note:  checkbox is a child of the new list item
      newLi.appendChild(checkbox);
      //Append button to new list item

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add("deleteBtn");  //add class to button
      newLi.appendChild(deleteBtn);
      //event listener for delete button
      deleteBtn.addEventListener('click',event=>{
        deleteToDo(toDo.id);
        renderTheUI();
      });
    });
  }
  function deleteToDo(id) {
    //Loops through array and for each item, filters out if id is not equal to current item.
    toDos = toDos.filter(item => item.id !== id);
    console.log(toDos);
  }



  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
//  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewTodo();
    newToDoText.value = '';
  });
  //renderTheUI();
}
