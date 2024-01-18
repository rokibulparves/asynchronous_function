const payment = true;
const marks = 90;

function enroll() {
  console.log("Confirm payment before accessiong course..");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (payment) {
        resolve("Payment Completed.");
      } else {
        reject("Tk de bhai age!");
      }
    }, 3000);
  });
  return promise;
}

function progress() {
  console.log("Course on Progress..");

  const promise = new Promise(function (resolve, reject) {
    if (marks > 80) {
      resolve("You've passed the test!");
    } else {
      reject("You failed the test!");
    }
  }, 3000);
  return promise;
}

function certificate() {
  console.log("Certificate is creating...");
  const promise = new Promise(function (resolve) {
    resolve("Your certificate is on mail.");
  }, 3000);
  return promise;
}

//promise chaining
enroll()
  .then(progress) //first we call the sequential function
  .then(certificate) //then the second one

  //here the second .then(certificate) returns a promise as final output. thats why we need another .then to grap that promise.
  .then(function (value) {
    console.log(value);
  })
  //this catches error
  .catch(function (err) {
    console.log(err);
  });
