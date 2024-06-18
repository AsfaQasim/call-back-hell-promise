// call back hell
setTimeout(() => {
    console.log("Called to HR");
    setTimeout(() => {
        console.log("HR to director");
        setTimeout(() => {
            console.log("Information update!");
            
        }, 1000)
        
    }, 2000)
    
}, 2000)

// Promise 

let promises = new Promise ((resolve, reject) => {
    console.log("Promise called");
    let obj = {
        name: "asfa",
        age: 21,
        class: "Thursday"
    }
    resolve(obj)
    reject("Something went wrong!")
})
promises.then((res) => console.log(res)).catch((err) => console.log(err));

