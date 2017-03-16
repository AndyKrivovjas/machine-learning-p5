class KNN extends Classifier {
  k: number = 1;
  nearest: any[] = [];

  constructor(k: number = 1) {
    super();

    this.k = k;
  }

  show() {
    push();
      stroke(255);
      strokeWeight(2);
      ellipseMode(CENTER);
      this.nearest.forEach(function(item, index) {
        noFill();
        ellipse(item.x, item.y, 25);
      });
    pop();
  }

  mode(array: any[]) {
    if(array.length == 0)
        return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
        var el = array[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }
    return maxEl;
  }

  minElements(target: any[], count: number = 1) {
    var indexes: number[] = [];

    while(indexes.length != count) {
      var minEl = target[0];
      var minIndex = 0;

      target.forEach(function(item, index) {
        if(item <= minEl) {
          minEl = item;
          minIndex = index;
        }
      });
      indexes.push(minIndex);
      target[minIndex] = max(target);
    }

    return indexes;
  }

  evaluate(item: any) {
    var self = this;
    var weigths: number[] = [];

    this.features.forEach(function(feature) {
      var w = sqrt(pow((item.x - feature.x), 2) + pow((item.y - feature.y), 2));
      weigths.push(w);
    });

    var indexes = self.minElements(weigths, self.k);

    var classes: any[] = [];
    indexes.forEach(function(ind) {
      classes.push(self.labels[ind]);
      self.nearest.push(self.features[ind]);
      if(self.nearest.length > self.k) {
        self.nearest.shift();
      }
    });

    return self.mode(classes);

  }

  @pre
  predict(X_predict: any|any[]) {
    var self = this;
    var y_test: any[] = [];

    self.nearest = [];

    X_predict.forEach(function(item, index) {
      let res = self.evaluate(item);
      y_test.push(res);
    });

    return y_test;
  }
}
