declare var $: any;
var meter;
var cls = new KNN(5);
var X_train;
var y_train;

function setup() {
  createCanvas(windowWidth, windowHeight);
  meter = new FPSmeter();

  var gen = Classifier.randomEntities2D(50);
  X_train = gen[0];
  y_train = gen[1];

  cls.fit(X_train, y_train);
}

function draw() {
  background(51);

  push();
    stroke(255);
    strokeWeight(2);
    ellipseMode(CENTER);
    X_train.forEach(function(item, index) {
      if(y_train[index]) {
        fill(100, 200, 50);
      } else {
        fill(200, 100, 50);
      }
      ellipse(item.x, item.y, 15);
    });
  pop();

  cls.show();

  meter.tick();
}

function mouseClicked() {
  var dashboardWidth = $('#dashboard').outerWidth();
  var dashboardHeight = $('#dashboard').outerHeight();

  if(mouseX > 0 && mouseX < width
  && mouseY > 0 && mouseY < height
  && (mouseX < (width - dashboardWidth)
  || mouseY > dashboardHeight)) {
    var X_test = createVector(mouseX, mouseY);
    var y_test = cls.predict(X_test);

    X_train.push(X_test);
    y_train.push(y_test[0]);

    cls.fit(X_train, y_train);
  }

  return false;
}
