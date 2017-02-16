const mongoCollections = require("./mongoCollections");
const todoitems = mongoCollections.todoitems;
const uuidV4 = require('uuid/v4');

let exportedMethods = {

    getTask(id) {
        if (!id)
            return Promise.reject("You must provide an id to search for");

        return todoitems().then((itemsCollection) => {
            if (!itemsCollection.findOne({ _id: id }))
                return Promise.reject("The task does not exist");

            return itemsCollection.findOne({ _id: id });
        });
    },
    getAllTasks() {
        return todoitems().then((itemsCollection) => {
            // return itemsCollection.find({}).toArray()(function (err, docs) {
            //     if(err)
            //         return Promise.reject("error");
            //     return docs;
            // });
            return itemsCollection.find({}).toArray();
        });
    },
    createTask(title, description) {
        if (!title)
            return Promise.reject("You must provide a title for the item");

        if (!description)
            return Promise.reject("You must provide a description of this item");


        return todoitems().then((itemsCollection) => {
            let newItem = {
                _id: uuidV4(),
                title: title,
                description: description,
                completed: false,
                completedAt: null
            };
            // try {
            return itemsCollection.insertOne(newItem).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getTask(newId);
            });
            // } catch (err) {
            //     return Promise.reject("error in inserting");
            // }
        });
    },
    removeTask(id) {
        if (!id)
            return Promise.reject("You must provide an id to search for");

        return todoitems().then((itemsCollection) => {
            return itemsCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    return Promise.reject(`Could not delete item with id of ${id}`);
                }
            });
        });
    },
    removeAll() {
        return todoitems().then((itemsCollection) => {
            return itemsCollection.remove({}).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    return Promise.reject(`nothing to delete`);
                }
            });
        });
    },
    completeTask(taskId) {
        if (!taskId)
            return Promise.reject("You must provide an id to search for");

        return todoitems().then((itemsCollection) => {
            // let updatedItem = this.getTask(taskId).then((task) => {
            //     task.completed = true;
            //     task.completedAt = Date.now();
            //     console.log("update aaaaaaa");
            //     console.log(task);
            //     console.log();
            // })
            // return itemsCollection.updateOne({ _id: taskId }, updatedItem).then(() => {
            //     return this.getTask(taskId);
            // });

            return this.getTask(taskId).then((task) => {
                task.completed = true;
                let date = new Date();
                task.completedAt = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
                return itemsCollection.updateOne({ _id: taskId }, task).then(() => {
                    return this.getTask(taskId);
                });
            })

        });
    }
}

module.exports = exportedMethods;