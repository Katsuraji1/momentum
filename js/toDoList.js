 const openToDoList = document.querySelector('.toDoIcon')
 const toDoList = document.querySelector('.toDoList')

 let isOpenToDoList = false

openToDoList.addEventListener('click',()=>{
     if(isOpenToDoList == false){
         toDoList.classList.add('setting-menu-open') 
         isOpenToDoList = true  
    }
    else if (isOpenToDoList == true){
        toDoList.classList.remove('setting-menu-open')   
        isOpenToDoList = false 
    }
 })

window.addEventListener('load',()=>{
    todos = JSON.parse(localStorage.getItem('todos'))|| []
	const newTodoForm = document.querySelector('#new-todo-form');

    newTodoForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const toDo = {
            content: e.target.elements.content.value,
            done: false
        }
        todos.push(toDo)
        localStorage.setItem('todos',JSON.stringify(todos))

        e.target.reset()

        DisplayToDos()
    })
    
    DisplayToDos()
})

function DisplayToDos(){
    const ulToDo = document.querySelector('.ulToDo')

    ulToDo.innerHTML ='';

    todos.forEach(toDo => {
        const el_lis = document.createElement('div')
        el_lis.classList.add('lis')

         const el_li = document.createElement('div')
         el_li.classList.add('li')

          const actions = document.createElement('div')
         actions.classList.add ('actions')

         const button_delete = document.createElement('button')
         button_delete.classList.add('addButton1')
         button_delete.innerText = '-'

         const button_edit = document.createElement('button')
         button_edit.classList.add('editToDo')
         button_edit.innerHTML = '&#x270E'

         el_li.innerHTML = `<input class = 'liContent' type="text" value="${toDo.content}" readonly>`
        el_lis.appendChild(el_li)
        ulToDo.appendChild(el_lis)
         actions.appendChild(button_delete)
         actions.appendChild(button_edit)
         el_lis.append(actions)

        button_edit.addEventListener('click',(e)=>{
            const input = el_lis.querySelector('input')
            input.removeAttribute('readonly')
            input.focus()
            if (button_edit.innerText=='✎'){
                input.removeAttribute('readonly')
                input.focus()
             button_edit.innerHTML = '&#x2714'    
               } else { 
               button_edit.innerHTML = '&#x270E' 
         }
            input.addEventListener('blur',e=>{
                input.setAttribute('readonly',true)
                toDo.content =e.target.value
                localStorage.setItem('todos',JSON.stringify(todos))
                DisplayToDos()
            })
        })

        button_delete.addEventListener('click',(e)=>{
            todos = todos.filter(t=> t!=toDo)
            localStorage.setItem('todos',JSON.stringify(todos))
            DisplayToDos()
        })
    });
}


















// const openToDoList = document.querySelector('.toDoIcon')
// const toDoList = document.querySelector('.toDoList')
// const addButton = document.querySelector('.addButton')
// const inputToDoText = document.querySelector('.inputToDoText')
// const ulToDo = document.querySelector('.ulToDo')

// let isOpenToDoList = false

// openToDoList.addEventListener('click',()=>{
//     if(isOpenToDoList == false){
//         toDoList.classList.add('setting-menu-open') 
//         isOpenToDoList = true  
//    }
//    else if (isOpenToDoList == true){
//        toDoList.classList.remove('setting-menu-open')   
//        isOpenToDoList = false 
//    }
// })

// addButton.addEventListener('click',()=>{
//  const input = inputToDoText.value
//  if (!input){
//     alert('error')
//  } else {
// const el_lis = document.createElement('div')
// el_lis.classList.add('lis')

// const el_li = document.createElement('div')
// el_li.classList.add('li')

// const el_input = document.createElement('input')
// el_input.classList.add('liContent')
// el_input.type = 'text'
// el_input.value = input
// el_input.setAttribute('readonly' , 'readonly')
// el_li.appendChild(el_input)
// el_lis.appendChild(el_li)
// ulToDo.appendChild(el_lis)

// const actions = document.createElement('div')
// actions.classList.add ('actions')

// const button_delete = document.createElement('button')
// button_delete.classList.add('addButton1')
// button_delete.innerText = '-'

// const button_edit = document.createElement('button')
// button_edit.classList.add('editToDo')
// button_edit.innerHTML = '&#x270E'

// actions.appendChild(button_delete)
// actions.appendChild(button_edit)

// el_lis.append(actions)

// button_delete.addEventListener('click',()=>{
//     ulToDo.removeChild(el_lis)
// })
// button_edit.addEventListener('click', ()=>{
//     if (button_edit.innerText=='✎'){
//          el_input.removeAttribute('readonly')
//         el_input.focus()
//         button_edit.innerHTML = '&#x2714'    
//           } else {
//         el_input.setAttribute('readonly' , 'readonly')  
//           button_edit.innerHTML = '&#x270E' 
//     }

// })
// inputToDoText.value=""
//  }
// })
