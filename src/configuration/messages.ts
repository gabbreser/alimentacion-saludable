const genericMessages = {
  yes: "Si",
  no: "No",
  ok: "OK",
  back: "Atras",
  next: "Siguiente",
  continue: "Continuar",
  finish: "Finalizar",
  accept: "Aceptar",
  cancel: "Cancelar",
  apply: "Aplicar",
  edit: "Editar",
  new: "Nuevo",
  manage: "Gestionar",
  administer: "Administrar",
  check: "Checkear",
  search: "Buscar",
  clean: "Limpiar",
  save: "Guardar",
  delete: "Eliminar",
  create: "Crear",
  update: "Actualizar",
  refresh: "Actualizar",
  reset: "Reiniciar",
  copyRight: `${new Date().getFullYear()} © Todos los derechos Reservados | Gabbreser`,
  list: {
    empty: "No contiene elementos",
    duplicated: (key: string, value: string) =>
      `Ya existe un elemento con el ${key} "${value}"`,
  },
  requestConfirmation: {
    title: "Confirmación",
    text: "¿Está seguro de que desea continuar?",
  },
};

const homeMessages = {
  title: "Bienvenidos!",
  access: "Inicio",
  legend:
    "Disfruta de nuestras comidas saludables! te invitamos a realizar tu pedido, podes ver las opciones semanales",
};

const orderMessages = {
  title: "Hacenos tus pedidos!",
  access: "Pedidos",
  legend:
    "Recibimos los pedidos con 24 hs de anticipación para poder prepararlos exclusivamente para vos.",
};

export { genericMessages, homeMessages, orderMessages };
