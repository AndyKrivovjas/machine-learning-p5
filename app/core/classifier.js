var Classifier = (function () {
    function Classifier() {
        this.features = [];
        this.labels = [];
    }
    Classifier.prototype.fit = function (features, labels) {
        this.features = features;
        this.labels = labels;
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