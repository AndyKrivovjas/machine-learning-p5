var meter;
var knn = new KNN(5);
var X_train;
var y_train;
function setup() {
    createCanvas(windowWidth, windowHeight);
    meter = new FPSmeter();
    var gen = Classifier.randomEntities2D(50);
    X_train = gen[0];
    y_train = gen[1];
    knn.fit(X_train, y_train);
}
function draw() {
    background(51);
    push();
    stroke(255);
    strokeWeight(2);
    ellipseMode(CENTER);
    X_train.forEach(function (item, index) {
        if (y_train[index]) {
            fill(100, 200, 50);
        }
        else {
            fill(200, 100, 50);
        }
        ellipse(item.x, item.y, 15);
    });
    pop();
    knn.show();
    meter.tick();
}
function mouseClicked() {
    var X_test = createVector(mouseX, mouseY);
    var y_test = knn.predict(X_test);
    X_train.push(X_test);
    y_train.push(y_test[0]);
    knn.fit(X_train, y_train);
    // prevent default
    return false;
}
//# sourceMappingURL=main.js.map