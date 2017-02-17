const printShape = require("./printShape");
const prompt = require("prompt");

function getInfo() {
    prompt.start();

    const lines1Prompt = {
        name: 'lines1',
        description: 'What is the triangle\'s line number?',
        type: 'number',
        required: true
    };

    const lines2Prompt = {
        name: 'lines2',
        description: 'What is the square\'s line number?',
        type: 'number',
        required: true
    };

    const lines3Prompt = {
        name: 'lines3',
        description: 'What is the rhombus\'s line number?',
        type: "number",
        required: true
    };



    prompt.get([lines1Prompt, lines2Prompt, lines3Prompt], function (err, result) {
        if (result) {

            let linesOfTriangle = result.lines1;
            if (isNaN(linesOfTriangle)) {
                console.log("Triangle lines is not a number");
                getInfo();
                return;
            }

            let linesOfSquare = result.lines2;
            if (isNaN(linesOfSquare)) {
                console.log("Square lines is not a number");
                getInfo();
                return;
            }

            let linesOfRhombus = result.lines3;
            if (isNaN(linesOfRhombus)) {
                console.log("Rhombus lines is not a number");
                getInfo();
                return;
            }

            console.log("Triangles:");
            try {
                for (let i = 0; i < 10; i++) {
                    printShape.triangle(linesOfTriangle);
                    console.log();
                }
            }
            catch (e) {
                console.log(e);
            }

            console.log("Squares:");
            try {
                for (let i = 0; i < 10; i++) {
                    printShape.square(linesOfSquare);
                    console.log();
                }
            }
            catch (e) {
                console.log(e);
            }

            console.log("Rhombus:");
            try {
                for (let i = 0; i < 10; i++) {
                    printShape.rhombus(linesOfRhombus);
                    console.log();
                }
            }
            catch (e) {
                console.log(e);
            }

        } else if (err) {
            console.error(err)
        }

    });


}

getInfo();