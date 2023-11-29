var Chars = ["*", "X", "+", "-", "1", "0", "1", "@", "六", "L", "八", "8"];
var Cells = [];
var tileSize = 16;
var dropspeed = 6;
var tiles = 160;
var x = 0;

window.addEventListener("keydown", function (event) {
  if (event.code == "F11") {
    setTimeout(setup, 100);
  }
});

function setup() {
  noStroke();
  colorMode(HSB, 360, 100, 1, 0.1);
  createCanvas(window.innerWidth, window.innerHeight);
  for (var i = 0; i < tiles; i++) {
    console.log(width / tileSize);
    x += tileSize;
    var y = round(random(height / dropspeed) * tileSize) - window.innerHeight;
    var r = tileSize;
    var h = random(100, 150);
    var t = random(0.8, 8);
    var u = random(0.3, 0.8);
    Cells[i] = new Matrix(x, y, r, h, t, u);
  }
}

function draw() {
  background(100, 100, 0, 0.009);

  for (var i = 0; i < tiles; i++) {
    Cells[i].spread();
    Cells[i].update();
  }
}

function Matrix(isX, isY, myD, myHue, newX, newY) {
  this.x = isX;
  this.y = isY;
  this.tS = newX;
  this.tU = newY;
  this.diameter = myD;
  this.h = myHue;
  this.spread = function () {
    var tx = 0;
    var ty = round(random(0, 2));
    this.x += tx * tileSize;
    if (this.x > width + tileSize * 8 || this.x < -tileSize * 8) {
      this.x = random(width / tileSize) * tileSize;
    }
    this.y += ty * dropspeed;
    if (this.y > height + tileSize * 8 || this.y < -tileSize * 8) {
      this.y = random(-height / tileSize) * tileSize;
      this.x = random(width / tileSize) * tileSize;
    }

    if (this.y < window.innerHeight) this.y += this.tU;
  };

  this.update = function () {
    var thecol = round(random(0, 10));
    var thebri = 0;

    if (thecol == 10) {
      thecol = 0;
      thebri = 100;
    } else {
      myHue = 120;
      thecol = 100;
      thebri = 50;
    }
    fill(myHue, thecol, thebri, 0.7);
    textSize(14);
    textFont("Verdana");
    var thechar = round(random(0, 8));
    text(Chars[thechar], this.x, this.y);
  };
}

function mousePressed() {
  tileSize = random(0.3, 2);
  tiles = random(1, 239);

  for (var i = 0; i < tiles; i++) {
    var x = random(width / tileSize) * tileSize;
    var y = random((height / tileSize) * tileSize) - height;
    var r = tileSize;
    var h = random(10, 300);
    var t = random(0.5, 2);
    var u = random(0.3, 3.8);
    Cells[i] = new Matrix(x, y, r, h, t, u);
  }
}
