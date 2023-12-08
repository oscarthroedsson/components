//Ta emot HSL-värde
// Kolla så det är HSL annars skicka error
// Alt längre fram så kan du kolla vad det är för format och konvertera det till HEX

// skicka tillbaka en array med 10 objekt/nyanser
// varje obj ska ha: HSL och HEX koden i sig.

export default function useColorPalletGenerator(hsl) {
  // {H: 44, S: 87, L: 45}
  const lighterColors = [];
  const darkerColors = [];

  //creates the jumps between the colors for ligher and darker shades
  /* We need to generate 5 shades of the lighter side that is why we divide by 5 */
  const marginJumpLighter = (90 - hsl.L) / 5; // ligher

  /* We need to generate 4 shades of the darker side that is why we divide by 5 */
  const marginJumpDarker = (hsl.L - 15) / 4; // darker

  /* a loop that generate 5 lighter shades */
  for (let i = 0; i < 5; i++) {
    const newLighterColor = {
      H: hsl.H,
      S: hsl.S,
      L: hsl.L + marginJumpLighter * (i + 1),
    };
    lighterColors.push(newLighterColor); // pushes it in to the array that holds the lighter colors
  }
  /* a loop that generate 4 darker shades */
  for (let i = 0; i < 4; i++) {
    const newDarkerColor = {
      H: hsl.H,
      S: hsl.S,
      L: hsl.L - marginJumpDarker * (i + 1),
    };
    darkerColors.push(newDarkerColor); // pushes it in to the array that holds the lighter colors
  }

  // combines the two arrays and sort it from lightest to darkest
  const colorPallet = lighterColors
    .reverse()
    .concat(hsl, darkerColors)
    .sort((a, b) => a.L > b.L);

  return colorPallet;
}
