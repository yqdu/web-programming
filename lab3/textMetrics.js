let textMetrics = exports = module.exports;

textMetrics.simplify = (text) => {
    return new Promise((fulfill, reject) => {
        if (typeof text !== "string") {
            reject(error);
            return;
        }

        let simplifiedText = text.toLowerCase().replace(/[\W|\_]/g, " ").replace(/[\s|\n|\r|\n\r]+/g, " ").replace(/^\s+|\s+$/g,"");
        
        fulfill(simplifiedText);
    })
};

textMetrics.createMetrics = (text) => {
    return new Promise((fulfill, reject) => {
        if (typeof text !== "string") {
            reject(error);
            return;
        }
        let totalLetters = 0, totalWords = 0, uniqueWords = 0, longWords = 0, averageWordLength = 0;
        let wordOccurrences = {};
        let strs = text.split(" ");
        totalWords = strs.length;
        totalLetters = text.replace(/\s+/g, "").length;
        averageWordLength = totalLetters / totalWords;
        for (let i = 0; i < strs.length; i++) {
            if (strs[i].length > 5) {
                longWords++;
            }
        }
        for (let i = 0; i < strs.length; i++) {
            let currentWord = strs[i];
            let j = wordOccurrences[currentWord];
            if (j === undefined) {
                wordOccurrences[currentWord] = 1;
            }
            else {
                wordOccurrences[currentWord] = j + 1;
            }
        }
        
        Object.keys(wordOccurrences).forEach((key) =>{
            uniqueWords++;
        });

        let result = {};
        result["totalLetters"] = totalLetters;
        result["totalWords"] = totalWords;
        result["uniqueWords"] = uniqueWords;
        result["longWords"] = longWords;
        result["averageWordLength"] = averageWordLength;
        result["wordOccurrences"] = wordOccurrences;
        fulfill(result);
    })
};