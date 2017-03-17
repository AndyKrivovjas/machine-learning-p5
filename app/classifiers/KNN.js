var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var KNN = (function (_super) {
    __extends(KNN, _super);
    function KNN(k) {
        if (k === void 0) { k = 1; }
        var _this = _super.call(this) || this;
        _this.k = 1;
        _this.nearest = [];
        _this.k = k;
        return _this;
    }
    KNN.prototype.show = function () {
        push();
        stroke(255);
        strokeWeight(2);
        ellipseMode(CENTER);
        this.nearest.forEach(function (item, index) {
            noFill();
            ellipse(item.x, item.y, 25);
        });
        pop();
    };
    KNN.prototype.mode = function (array) {
        if (array.length == 0)
            return null;
        var modeMap = {};
        var maxEl = array[0], maxCount = 1;
        for (var i = 0; i < array.length; i++) {
            var el = array[i];
            if (modeMap[el] == null)
                modeMap[el] = 1;
            else
                modeMap[el]++;
            if (modeMap[el] > maxCount) {
                maxEl = el;
                maxCount = modeMap[el];
            }
        }
        return maxEl;
    };
    KNN.prototype.minElements = function (target, count) {
        if (count === void 0) { count = 1; }
        var indexes = [];
        while (indexes.length != count) {
            var minEl = target[0];
            var minIndex = 0;
            target.forEach(function (item, index) {
                if (item <= minEl) {
                    minEl = item;
                    minIndex = index;
                }
            });
            indexes.push(minIndex);
            target[minIndex] = max(target);
        }
        return indexes;
    };
    KNN.prototype.evaluate = function (item) {
        var self = this;
        var weigths = [];
        this.features.forEach(function (feature) {
            var w = sqrt(pow((item.x - feature.x), 2) + pow((item.y - feature.y), 2));
            weigths.push(w);
        });
        var indexes = self.minElements(weigths, self.k);
        var classes = [];
        indexes.forEach(function (ind) {
            classes.push(self.labels[ind]);
            self.nearest.push(self.features[ind]);
            if (self.nearest.length > self.k) {
                self.nearest.shift();
            }
        });
        return self.mode(classes);
    };
    KNN.prototype.predict = function (X_predict) {
        var self = this;
        var y_test = [];
        self.nearest = [];
        X_predict.forEach(function (item, index) {
            var res = self.evaluate(item);
            y_test.push(res);
        });
        return y_test;
    };
    return KNN;
}(Classifier));
__decorate([
    pre,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KNN.prototype, "predict", null);
//# sourceMappingURL=KNN.js.map