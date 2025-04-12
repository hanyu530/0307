function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100); // 設定顏色模式為HSB
}

function draw() {
  background(165, 60, 100);

  // 根據滑鼠的水平位置計算色相
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  // 根據滑鼠的垂直位置計算亮度
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定圓的顏色
  fill(hue, 100, brightness); // 使用HSB顏色格式
  noStroke();

  // 畫圓
  ellipse(mouseX, mouseY, 200, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

