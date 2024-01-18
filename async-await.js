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

//async normalize the .then chaining. instead it uses await.

async function course() {
  try {
    await enroll();
    await progress();
    const messege = await certificate(); //again we need a variable to catch the final promise which is the final result also.
    console.log(messege);
  } catch (err) {
    //handles the error of every function efficeintly.
    console.log(err);
  }
}

course();

// enroll()
//   .then(progress)
//   .then(certificate)
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });
