class Classifier {

  kernel: Kernel;
  features: any[] = [];
  labels: number[]|string[] = [];

  fit(features: any[], labels: number[]|string[]) {
    this.features = features;
    this.labels = labels;
  }

}

function pre(target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
    let originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        var X_test = args[0];
        if(!Array.isArray(X_test)) {
          X_test = [X_test];
        }
        let result = originalMethod.call(this, X_test);
        return result;
    };

    return descriptor;
}
