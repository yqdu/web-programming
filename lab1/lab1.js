//Yaoqi Du
//CS 546
//lab1


function sumOfSquares(num1, num2, num3){
    if(typeof(num1)=="number" && typeof(num2)=="number" && typeof(num3)=="number"){
        return num1*num1 + num2*num2 + num3*num3;
    }
    else{
        throw "Invalid input!";
    }
}
console.log("sumOfSquares(num1, num2, num3) :");
console.log();
try{
    console.log(sumOfSquares(5, 3, 10));  
}
catch(e){
    console.log(e);
}
console.log();
try{
    console.log(sumOfSquares("5", 3, 10));
}
catch(e){
    console.log(e);
}
console.log();

function sayHelloTo(firstName, lastName, title){
    if(arguments.length == 1 && typeof(firstName)  == "string" ){
        console.log(`Hello, ${firstName}!`);
    }
    else if(arguments.length == 2 && typeof(firstName) == "string" && typeof(lastName) == "string"){
        console.log(`Hello, ${firstName} ${lastName}. I hope you are having a good day!`);
    }
    else if(arguments.length == 3 && typeof(firstName) == "string" && typeof(lastName) == "string" && typeof(title) == "string"){
        console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`)
    }
    else{
        throw "Invalid input!";
    }
}
console.log("sayHelloTo(firstName, lastName, title) :");
console.log();
try{
    sayHelloTo("Phil");
    sayHelloTo("Phil", "Barresi");
    sayHelloTo("Phil", "Barresi", "Mr.");
}
catch(e){
    console.log(e);
}
console.log();
try{
    sayHelloTo("1", true);
}
catch(e){
    console.log(e);
}
console.log();
try{
    sayHelloTo();
}
catch(e){
    console.log(e);
}
console.log();


function cupsOfCoffee(howManyCups){
    if(typeof(howManyCups) == "number" && howManyCups > 0){
        for(let i=howManyCups; i>=1; i--){
            if(i==1){
                console.log("1 cup of coffee on the desk! 1 cup of coffee!");
                console.log("Pick it up, drink the cup, no more coffee left on the desk!");
            }
            else if(i==2){
                console.log("2 cups of coffee on the desk! 2 cups of coffee!");
                console.log("Pick one up, drink the cup, 1 cup of coffee on the desk!");
            }
            else{
                console.log(`${i} cups of coffee on the desk! ${i} cups of coffee!`);
                console.log(`Pick one up, drink the cup, ${i-1} cups of coffee on the desk!`);
            }
        }
    }
    else{
        throw "Invalid input!";
    }
}

console.log("cupsOfCoffee(howManyCups) :");
console.log();
try{
    cupsOfCoffee(5);
}
catch(e){
    console.log(e);
}
console.log();
try{
    cupsOfCoffee("5");
}
catch(e){
    console.log(e);
}
console.log();
try{
    cupsOfCoffee(-1);
}
catch(e){
    console.log(e);
}
console.log();

function occurrencesOfSubstring(fullString, subString){
    if(typeof(fullString)=="string" && typeof(subString)=="string"){
        let count = 0;
        let fullLength = fullString.length;
        let subLength = subString.length;
        if(fullLength < subLength){
            return 0;
        }
        for(let i=0; i<fullLength-subLength+1; i++){
            if(fullString.substr(i, subLength) == subString){
                count++;
            }
        }
        return count;

    }
    else{
        throw "Invalid input!";
    }
}
console.log("occurrencesOfSubstring(fullString, subString) :");
console.log();
try{
    console.log(occurrencesOfSubstring("Helllllllo, class!", "ll"));
}
catch(e){
    console.log(e);
}
console.log();
try{
    console.log(occurrencesOfSubstring("Helllllllo, class!", 11));
}
catch(e){
    console.log(e);
}
console.log();


function randomizeSentences(paragraph){
    if(typeof(paragraph) == "string"){
        let result = "";
                
        //split paragraph to a string array
        //solution 1 

        // let puncts = [];
        // let num = 0;
        // for(let i=0; i<paragraph.length; i++){
        //     if(paragraph.charAt(i)=='.'||paragraph.charAt(i)=='!'||paragraph.charAt(i)=='?'){
        //         puncts[num++] = paragraph.charAt(i);
        //     }
        // }
        // let strs = paragraph.split(/\.|!|\?/);
        // strs[0] = " "+strs[0];
        // for(let i=0; i<strs.length-1; i++){
        //     strs[i] = strs[i] + puncts[i];
        // }

        //solution 2
        let strs = paragraph.match(/([\w|\s|\,|\-]*)(\.|\!|\?)/g);// cannot process all the puncts
        strs[0] = " "+strs[0];

        //random array
        // let length = strs.length - 1;
        let length = strs.length;
        let arr = [];
        let randomArray = [];
        for(let i=0; i<length; i++){
            arr[i] = i;
        }
        for(let i=0; i<length; i++){
            let j = Math.floor(Math.random() * arr.length);
            randomArray[i] = arr[j];
            arr.splice(j, 1);
        }

        //random paragraph
        for(let i=0; i<length; i++){
            result += strs[randomArray[i]];
        }

        result = result.replace(/^\s+|\s+$/g,"");
        return result;
    }
    else{
        throw "Invalid input!";
    }
}
console.log("randomizeSentences(paragraph) :");
console.log();
try{
    console.log(randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations."));
}
catch(e){
    console.log(e);
}
console.log();
try{
   console.log(randomizeSentences(1));
}
catch(e){
    console.log(e);
}
console.log();
