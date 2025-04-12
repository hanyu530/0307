function setup() {//設定函數,設定初始值得地方
  //建立依照視窗的高與寬當作畫面的寬高  
  createCanvas(windowWidth, windowHeight);
  //畫布的顏色為caf0f8(ca為十六進位的值,翻成10進位為202)
  background(202, 240, 248);
  
 
}

function draw() {//畫圖函數,畫圖的地方

  //畫布的背景顏色為caf0f8(ca為十六進位的值,翻成10進位為202)
  background(202, 240, 248);
  //畫圖的顏色為00509d(005為十六進位的值,翻成10進位為5,09d為十六進位的值,翻成10進位為157)
  fill(5, 9, 157);
  //畫圖的外框顏色為9a031e(9a為十六進位的值,翻成10進位為154,031e為十六進位的值,翻成10進位為798)
  stroke(154, 7, 98);
  //畫圖的外框寬度為5
  strokeWeight(10);
  //在視窗的中間畫一個圓,圓的寬高為200
  //ellipse(windowWidth/2, windowHeight/2, 200, 200);
  //依照上面的圓顏色與框限顏色,從視窗的最左邊,產生連續的圓,對視窗的最右邊
  for (let i = 0; i < windowWidth; i += 200) {
    ellipse(i, windowHeight/2, 200, 200);
  }
}
當視窗的大小改變時,重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
