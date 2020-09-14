// Promise = cool way to do async programming
// API call: request from front end to back end, prodive a service
// -That API call is asynchronous- not synchronous with rest of code

// html should run syncrhonously, data should run async = wait for backend

// Any call to the backend- to get all notes, images, etc.
// Set timeout, setTimeout() - set timer and then do something
// Async = not run syncrhonous => doesnt matter if setTimeout is set to 0 or 3 seconds,
// setTimeout() - doesn't follow rest of code block

console.log(1);

setTimeout(() => {
  console.log("Hello World");
}, 3000);

console.log(2);

// Cleaner code = prmoises- finish running then run some other task
// Promise constructor
// What you pass to promise function is a callback function
// Whenever you deal with a callback = what do you get as an input =>
// 1. write code in body of callback, not limited to one data = write a piece of code
// 2. get some data => resolve and reject
// 3. Reject and resolve are async functions, so dont run immeadietly
// runs rest of promise code and then runs reject and resolve

// Creating a promise is syncrhonous = promise wraps your async

// .then .catch registers the response

const p = new Promise((resolve, reject) => {
  // resolve and reject are functions!!!!
  // resolve  = .then
  // reject = catch
  // reject before resolve = resolve doesnt run again
  // call reject only if async function finished unsuccesfully
  // async operations: API call
});

// data provided to you as an input of the functuion

// .then(function (data)
// {console.log(data)})

const p = new Promise((resolve, reject) => {
  // resolve and reject are functions!!!!
  // async operations: API call
});

// chaining .thens
// if you want to pass data to a .then, you have to do it in a previous .then
p.then((data) => data)
  .then()
  .catch()
  // whether or not a catch or then, log finally
  .finally(() => console.log("all done"));

//////////////////
console.log(1);

const p = new Promise((resolve, reject) => {
  console.log(2);
  // async operations: eg. API call
  setTimeout(() => {
    console.log(6);
    reject("ERROR DATA");
    resolve("RESOLVED DATA");
    console.log(7);
  }, 2000);

  console.log(3);
});

console.log(4);

p.then((data) => data)
  .then((someData) => console.log(someData))
  .catch((err) => console.log(err))
  .finally(() => console.log("all done!!!"));

console.log(5);

// multiple API calls, when two calls have been succesfully completed
// .Aall() only after all promises have been resolved

Promise.all([p1, p2, p3]).then(() => console.log());
// Using Promise instead of new Promise = call class not object
const p1 = Promise.resolve(1);

/// Until promise is resolve or rejected = pending

const p1 = Promise.resolve(1);
const p2 = Promise.resolve("hello");
const p3 = new Promise((resolve) => setTimeout(resolve, 2000, "Resolved data"));

Promise.all([p1, p2, p3]).then((values) => console.log(values));
