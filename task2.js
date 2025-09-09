// Task 2: listUsers()




export function listUsers() {
  fetch("http://localhost:3000/users")
    .then(res => {
        return res.json(); // si no es JSON, lo leo como texto
      }
    )
    .then(data => {
      console.log("Respuesta:", data);
    })
}
