//woker-builder.js
class SharedWorkerBuilder extends SharedWorker {
    constructor(worker) {
      const code = worker.toString();
      const blob = new Blob([`(${code})()`]);
      return (new SharedWorker(URL.createObjectURL(blob)));
    }
  }

  export default SharedWorkerBuilder;