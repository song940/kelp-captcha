const Canvas = require('canvas');

const captcha = options => {
  const { width, height, fontSize, length, background } = options;
  const canvas = new Canvas(width, height);
  const ctx = canvas.getContext('2d');
  //
  ctx.antialias = 'gray';
  ctx.fillStyle = background;
  ctx.fillRect(0, 0, width, height);
  //
  ctx.font = `${fontSize}px sans`;
  ctx.fillStyle = options.color;
  ctx.strokeStyle = options.color;
  ctx.lineWidth = options.lineWidth;
  //
  for (var i = 0; i < 5; i++) {
    ctx.moveTo(
      Math.floor(0.08 * width), Math.random() * height);
    ctx.bezierCurveTo(
      Math.floor(0.32 * width), Math.random() * height,
      Math.floor(1.07 * height), Math.random() * height,
      Math.floor(0.92 * width), Math.random() * height);
    ctx.stroke();
  }
  var text = options.text || String(Math.random()).substr(3, length);
  for (i = 0; i < text.length; i++) {
    ctx.setTransform(
      Math.random() * 0.5 + 1, Math.random() * 0.4,
      Math.random() * 0.4, Math.random() * 0.5 + 1,
      Math.floor(0.375 * fontSize) * i + Math.floor(0.25 * fontSize),
      Math.floor(1.25 * fontSize));
    ctx.fillText(text.charAt(i), 0, 0);
  }
  return canvas.toBuffer();
};

module.exports = captcha;