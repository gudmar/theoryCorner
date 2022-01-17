//woker-builder.js
class WorkerBuilder extends Worker {
    constructor(worker) {
      const code = worker.toString();
      const blob = new Blob([`(${code})()`]);
      return (new Worker(URL.createObjectURL(blob)));
    }
  }

  export default WorkerBuilder;