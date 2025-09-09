
export function delUser(id) {
  fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE"
  })
    .then(response => {
      if (response.ok) {
        console.log(`Usuario con id ${id} eliminado correctamente.`);
      } else {
        console.error("Error al eliminar usuario:", response.status);
      }
    })
    .catch(error => {
      console.error("Error en la petición DELETE:", error);
    });
}
