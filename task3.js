// Task 3: addUser(first_name, last_name, email)

export function  addUser(nombre, apellido, correo){
const nuevoUsuario = {
    first_name: nombre, 
    last_name: apellido, 
    email: correo }



fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(nuevoUsuario)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Usuario agregado en el servidor:", data);
    })
}