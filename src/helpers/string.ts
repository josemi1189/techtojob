export const cleanString = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD") // Separa las letras de sus tildes (ej: "ó" se convierte en "o" + "´")
    .replace(/[\u0300-\u036f]/g, "") // Elimina todas las tildes y acentos
    .replace(/\s+/g, "-") // Reemplaza los espacios en blanco por guiones
    .replace(/[^a-z0-9-]/g, ""); // Elimina cualquier otro carácter especial que no sea letra, número o guión
};
