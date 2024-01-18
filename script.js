const ananna = true;

console.log("Task 1");

//promise defination
//here we create a promise, pass two function resolve and reject
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    if (ananna) {
      //if we able to return a promise or valid value which ever we say then we pass the value in resolve function.
      resolve("Task 2");
    } else {
      //if the promise if faild then we call the reject funciton
      reject("Failed!");
    }
  }, 2000);
});

//here we call the promise whitch we created
promise
  //if any promise value returns then we get that as a parameter. here is cames as a "value" name
  .then(function (value) {
    //then we print the value
    console.log(value);
  })
  .catch(function (err) {
    //catch catches the error from the resolve function
    console.log(err);
  });

console.log("Task 3");
console.log("Task 4");
