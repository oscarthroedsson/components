// Ta emot hex-värde
// Kolla så det är HEX annars skicka error
// Alt längre fram så kan du kolla vad det är för format och konvertera det till HSL

// Konvertera HEX till HSL
// Returnera HSL-värde
export default function useConvertHexToHSL(hex) {
  const hsl = {
    H: null,
    S: null,
    L: null,
  };

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);

  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  s = s * 100;
  hsl.S = Math.round(s);
  l = l * 100;
  hsl.L = Math.round(l);
  hsl.H = Math.round(360 * h);

  return hsl;
}
