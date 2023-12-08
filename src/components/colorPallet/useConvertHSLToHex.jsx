export default function useConvertHslToHex(colorPalletHSL) {
  const colorPalletHEX = colorPalletHSL.map((color) => {
    color.H /= 360;
    color.S /= 100;
    color.L /= 100;

    let r, g, b;

    if (color.S === 0) {
      r = g = b = color.L; // Gråskala
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q =
        color.L < 0.5
          ? color.L * (1 + color.S)
          : color.L + color.S - color.L * color.S;
      const p = 2 * color.L - q;

      r = hue2rgb(p, q, color.H + 1 / 3);
      g = hue2rgb(p, q, color.H);
      b = hue2rgb(p, q, color.H - 1 / 3);
    }

    const toHex = (x) => {
      const hex = Math.round(x * 255)
        .toString(16)
        .padStart(2, "0");
      return hex.length === 1 ? "0" + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  });
  return colorPalletHEX;
}
