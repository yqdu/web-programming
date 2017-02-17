const todoitems = require("./todo");
const connection = require("./mongoConnection");

let removeall = todoitems.removeAll().then(() => {
    console.log("removed");
})

// let addTask1 = todoitems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?").then((task1) => {
//     console.log("Task1 has added!");
//     console.log(task1);
//     let addTask2 = todoitems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?").then((task2) => {
//         console.log("Task2 has added!");
//         let allTasks = todoitems.getAllTasks().then((allTask) => {
//             console.log("All tasks:");
//             console.log(allTask);
//         });
//         return {
//             first: task1,
//             second: task2
//         }

//     }).then((tasks) => {
//         let removeFirst = todoitems.removeTask(tasks.first._id).then((deletionInfo) => {
//             console.log("Task 1 removed!");

//             let allTask2 = todoitems.getAllTasks().then((remainingTask) => {
//                 console.log("After remove first task:");
//                 console.log(remainingTask);
//                 return remainingTask;
//             }).then((remainingTask) => {
//                 console.log("After completed remaining task:");
//                 // for (let i = 0; i < remainingTask.length; i++) {
//                 let complete = todoitems.completeTask(remainingTask[0]._id).then((updated) => {
//                     console.log(updated);
//                 }).catch().then(() => {
//                     return connection();
//                 }).then((db) => {
//                     return db.close();
//                 });
//                 // }
//             });
//         });
//     });
// });

let addTask1 = todoitems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");

let addTask2 = addTask1.then((task1) => {
    console.log("Task1 has added!");
    console.log(task1);
    return todoitems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
});

let allTasks = addTask2.then((task2) => {
    console.log("Task2 has added!");
    return todoitems.getAllTasks();
});



let removeTask1 = allTasks.then((tasks) => {  
    console.log("All tasks:");
    console.log(tasks);  
    return todoitems.removeTask(tasks[0]._id);
});


let allTasks2 = removeTask1.then(()=>{
    console.log("Task 1 removed!");
    return todoitems.getAllTasks();
});

let completeTask2 = allTasks2.then((allTask) => {
    console.log("After first remove:");
    console.log(allTask);
    return todoitems.completeTask(allTask[0]._id);
});

let taskAfterComplete = completeTask2.then((task) => {
    console.log("Remaining task completed!")
    console.log("After completed remaining task:");
    console.log(task);
});

taskAfterComplete.catch().then(() => {
    return connection();
}).then((db) => {
    return db.close();
});


// let addTask1 = todoitems.createTask("P", "H").then((task1) => {
//     let addTask2 = todoitems.createTask("V", "S").then((task2) => {
//         return {
//             first: task1,
//             second: task2
//         }
//     }).then((all) => {
//         console.log("All tasks:");
//         console.log(all);
//     })
// });

// let removeall = todoitems.removeAll().then(() => {
//     console.log("removed");
// })

// addTask1.catch().then(() => {
//     return connection();
// }).then((db) => {
//     return db.close();
// });