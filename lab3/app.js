const fileData = require("./fileData");
const textMetrics = require("./textMetrics");

let readCpt1Result = fileData.getFileAsJSON("chapter1.result.json");
readCpt1Result.then((result) => {
    console.log("chapter1 has already been processed!")
    console.log(result);
    return;
}).catch((error) => {
    let readCpt1 = fileData.getFileAsString("chapter1.txt");
    readCpt1.then((data) => {
        let text = textMetrics.simplify(data);
        // console.log("simplified text:");
        // console.log(text);
        // console.log("\n\n\n");
        return text;
    }).then((text) => {
        fileData.saveStringToFile("chapter1.debug.txt", text);
        return text;
    }).then((text) => {
        let metric = textMetrics.createMetrics(text);
        console.log("metric 1:");
        console.log(metric);
        return metric;
    }).then((metric) => {
        return fileData.saveJSONToFile("chapter1.result.json", metric);
    }).then(() => {
        console.log("Chapter 1 done writing results");
    }).catch((error) => {
        console.log(error);
    });
})

let readCpt2Result = fileData.getFileAsJSON("chapter2.result.json");
readCpt2Result.then((result) => {
    console.log("chapter2 has already been processed!")
    console.log(result);
    return;
}).catch((error) => {
    let readCpt2 = fileData.getFileAsString("chapter2.txt");
    readCpt2.then((data) => {
        let text = textMetrics.simplify(data);
        // console.log("simplified text:");
        // console.log(text);
        // console.log("\n\n\n");
        return text;
    }).then((text) => {
        fileData.saveStringToFile("chapter2.debug.txt", text);
        return text;
    }).then((text) => {
        let metric = textMetrics.createMetrics(text);
        console.log("metric 2:");
        console.log(metric);
        return metric;
    }).then((metric) => {
        return fileData.saveJSONToFile("chapter2.result.json", metric);
    }).then(() => {
        console.log("Chapter 2 done writing results");
    }).catch((error) => {
        console.log(error);
    });
})

let readCpt3Result = fileData.getFileAsJSON("chapter3.result.json");
readCpt3Result.then((result) => {
    console.log("chapter3 has already been processed!")
    console.log(result);
    return;
}).catch((error) => {
    let readCpt3 = fileData.getFileAsString("chapter3.txt");
    readCpt3.then((data) => {
        let text = textMetrics.simplify(data);
        // console.log("simplified text:");
        // console.log(text);
        // console.log("\n\n\n");
        return text;
    }).then((text) => {
        fileData.saveStringToFile("chapter3.debug.txt", text);
        return text;
    }).then((text) => {
        let metric = textMetrics.createMetrics(text);
        console.log("metric 3:");
        console.log(metric);
        return metric;
    }).then((metric) => {
        return fileData.saveJSONToFile("chapter3.result.json", metric);
    }).then(() => {
        console.log("Chapter 3 done writing results");
    }).catch((error) => {
        console.log(error);
    });
})