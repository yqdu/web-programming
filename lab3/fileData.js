const fs = require('fs');

let fileData = exports = module.exports;

fileData.getFileAsJSON = (path) => {
    return new Promise((fulfill, reject) => {
        if (!path) {
            reject(error);
            return;
        }

        fs.readFile(path, "utf-8", (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            try {
                let jsonData = JSON.parse(data);
                fulfill(jsonData);
            } catch (parsingError) {
                reject(parsingError);
            }
        });
    })
};

fileData.saveJSONToFile = (path, obj) => {
    return new Promise((fulfill, reject) => {
        if (!path) {
            reject(error);
            return;
        }

        fs.writeFile(path, JSON.stringify(obj, null, 4), (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            fulfill(data);
        });
    });
};



fileData.getFileAsString = (path) => {
    return new Promise((fulfill, reject) => {
        if (!path) {
            reject(error);
            return;
        }

        fs.readFile(path, "utf-8", (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            let text = data;
            fulfill(text);

        });
    })
};

fileData.saveStringToFile = (path, text) => {
    return new Promise((fulfill, reject) => {
        if (!path) {
            reject(error);
            return;
        }

        fs.writeFile(path, text, (error, data) => {
            if (error) {
                reject(error);
                return;
            }

            fulfill(data);
        });
    });
};
