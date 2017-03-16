class SVM extends Classifier {

  C: number;
  tol: number;
  alphatol: number;
  maxiter: number;
  numpasses: number;


  constructor(options: SVMOptionsInterface) {
    super();

    this.C = options.C || 1.0; // C value. Decrease for more regularization
    this.tol = options.tol || 1e-4; // numerical tolerance. Don't touch unless you're pro
    this.alphatol = options.alphatol || 1e-7; // non-support vectors for space and time efficiency are truncated. To guarantee correct result set this to 0 to do no truncating. If you want to increase efficiency, experiment with setting this little higher, up to maybe 1e-4 or so.
    this.maxiter = options.maxiter || 10000; // max number of iterations
    this.numpasses = options.numpasses || 10; // how many passes over data with no change before we halt? Increase for more precision.
  }
}
