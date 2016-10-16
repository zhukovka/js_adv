/*
 We don't have any specific task we'd like to assign to you for this lesson.
 Feel free to explore all three functions at your own pace. When you are
 preparing to submit though, make sure you are using at least catch and one
 of Promise.resolve and Promise.reject ☺

 */
var promise = new Promise(function (fulfill, reject) {
    fulfill("It's OK!");
    reject(new Error("It's error"));
});
promise.catch(console.log);
Promise.reject("It's error").then(function(reason) {
}, function(reason) {
    console.log(reason); // "Проверка статического reject"
});

Promise.resolve("It's OK!").then(function(value) {
    console.log(value); // "Success"
}, function(value) {
    // не будет вызванна
});