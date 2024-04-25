/*
Obtener input y boton
*/
const input = document.getElementById('inputTarea');
const button = document.getElementById('buttonTarea');

/*
CRUD
*/

//CREATE
button.onclick =()=>{
    //validar que input no esté vacío
    if(input.value === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debes escribir una tarea',
        })
        return;
    }
    axios({
    method: 'post',
    url: 'https://crudcrud.com/api/59e547a76e47473c8b599bfb7f77c7cf/todos',
    data: {
        name: input.value,
        edad: 25,
    }
    
})
.then((response)=>{
    console.log(response);
});
}

//READ

//UPDATE

//DELETE