var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SVM = (function (_super) {
    __extends(SVM, _super);
    function SVM(options) {
        var _this = _super.call(this) || this;
        _this.C = options.C || 1.0; // C value. Decrease for more regularization
        _this.tol = options.tol || 1e-4; // numerical tolerance. Don't touch unless you're pro
        _this.alphatol = options.alphatol || 1e-7; // non-support vectors for space and time efficiency are truncated. To guarantee correct result set this to 0 to do no truncating. If you want to increase efficiency, experiment with setting this little higher, up to maybe 1e-4 or so.
        _this.maxiter = options.maxiter || 10000; // max number of iterations
        _this.numpasses = options.numpasses || 10; // how many passes over data with no change before we halt? Increase for more precision.
        return _this;
    }
    return SVM;
}(Classifier));
//# sourceMappingURL=svm.js.map