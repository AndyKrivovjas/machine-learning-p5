class Generator {

  static randomEntities2D(len: number) {
    var entities: p5.Vector[] = [];
    var labels: number[] = [];

    for(let i = 0; i < len; i++) {
      var x = random(width);
      var y = random(height);

      var vector = createVector(x, y);
      entities.push(vector);
      labels.push(round(random(1)));
    }

    return [entities, labels];
  }

  static perlinNoise(offsetx: number, offsety: number, len: number) {
    var entities: p5.Vector[] = [];
    var labels: number[] = [];

    var half = floor(len / 2);

    var xoff = 0;
    var yoff = 0;

    for(let i = 0; i < half; i++) {
      var r = random(250);
      var angle = random(TWO_PI);

      var x = offsetx + r * cos(angle);
      var y = offsety + r * sin(angle);

      var vector = createVector(x, y);
      entities.push(vector);
      labels.push(1);

      xoff += random(15);
      yoff += random(15);
    }

    for(let i = half; i < len; i++) {
      var r = random(250);
      var angle = map(noise(xoff, yoff), 0, 1, 0, TWO_PI);

      var x = width - offsetx + r * cos(angle);
      var y = height - offsety + r * sin(angle);

      var vector = createVector(x, y);
      entities.push(vector);
      labels.push(0);

      xoff += random(15);
      yoff += random(15);
    }

    return [entities, labels];
  }
}
