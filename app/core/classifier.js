var Classifier = (function () {
    function Classifier() {
        this.features = [];
        this.labels = [];
    }
    Classifier.prototype.fit = function (features, labels) {
        this.features = features;
        this.labels = labels;
    };
    Classifier.randomEntities2D = function (len) {
        var entities = [];
        var labels = [];
        for (var i = 0; i < len; i++) {
            var x = random(width);
            var y = random(height);
            var vector = createVector(x, y);
            entities.push(vector);
            labels.push(round(random(1)));
        }
        return [entities, labels];
    };
    return Classifier;
}());
function pre(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var X_test = args[0];
        if (!Array.isArray(X_test)) {
            X_test = [X_test];
        }
        var result = originalMethod.call(this, X_test);
        return result;
    };
    return descriptor;
}
//# sourceMappingURL=classifier.js.map