function CustomPromise(task) {
  state = "PENDING";
  value = null;
  handlers = [];
  catchers = [];

  onResolve = function (result) {
    if (state !== "PENDING") return;
    value = result;
    state = "FULLFILLED";
    handlers.map((h) => h(result));
  };
  onReject = function (error) {
    if (state !== "PENDING") return;
    value = error;
    state = "REJECTED";
    catchers.map((c) => c(error));
  };

  this.then = function (callback) {
    if (state === "FULFILLED") {
      callback(value);
    } else {
      handlers.push(callback);
    }

    return this;
  };

  this.catch = function (callback) {
    if (state === "REJECTED") {
      callback(value);
    } else {
      catchers.push(callback);
    }
  };
  task(onResolve, onReject);
}

function isEvenNumber(num) {
  console.log("Number to check is => " + num);
  return new CustomPromise(function (resolve, reject) {
    setTimeout(function () {
      if (num % 2 == 0) {
        resolve("This is an even number");
      } else {
        reject("This is not an even number");
      }
    }, 1000);
  });
}

function generateRandomInt() {
  return parseInt(Math.random() * 100);
}

isEvenNumber(generateRandomInt())
  .then(function (result) {
    console.log("Result of operation 1 = ", result);
  })
  .then(function (result) {
    console.log("Result of operation 2 = ", result);
  })
  .catch(function (error) {
    console.log("Result of operation = ", error);
  });
