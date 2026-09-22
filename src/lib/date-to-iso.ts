export const dateToIso = (dateStr: string) => {
  // Dividimos la cadena por la barra '/'
  const parts = dateStr.split("/");

  return `${parts[2]}-${parts[1]}-${parts[0]}`;
};
