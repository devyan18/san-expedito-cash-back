export const removeTildes = (text: string) => {
  const newText = text.replace(/[áéíóúäÁÉÍÓÚÄ]/g, (match) => {
    const mapTildes = {
      á: "a",
      é: "e",
      í: "i",
      ó: "o",
      ú: "u",
      ä: "a",
      Á: "A",
      É: "E",
      Í: "I",
      Ó: "O",
      Ú: "U",
      Ä: "A",
    };
    return mapTildes[match];
  });

  return newText;
};
