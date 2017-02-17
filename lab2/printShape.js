module.exports = {
    description: "This is a printShape module",
    triangle: function (lines) {
        if (lines === undefined || typeof lines !== "number") {
            throw "input is not a number";
        }

        if (lines < 1 || Math.floor(lines) !== lines) {
            throw "triangle lines should be an integer and at least 1";
        }

        let i = 1;
        while (i < lines) {
            let spacesMid = "";
            for (let j = 0; j < (i - 1) * 2; j++) {
                spacesMid += " ";
            }

            let spacesLeft = "";
            for (let k = 0; k < lines - i; k++) {
                spacesLeft += " ";
            }

            console.log(`${spacesLeft}\/${spacesMid}\\`);
            i++;
        }
        let line = "";
        for (let i = 0; i < (lines - 1) * 2; i++) {
            line += "-";
        }
        console.log(`\/${line}\\`);
    },

    square: (lines) => {
        if (lines === undefined || typeof lines !== "number") {
            throw "input is not a number";
        }

        if (lines < 2 || Math.floor(lines) !== lines) {
            throw "square lines should be an integer at least 2";
        }

        let line = "";
        let spaces = "";
        for (let i = 0; i < lines; i++) {
            line += "-";
            spaces += " ";
        }

        console.log(`\|${line}\|`);
        for (let i = 0; i < lines - 2; i++) {
            console.log(`\|${spaces}\|`);
        }
        console.log(`\|${line}\|`);

    },

    rhombus: function (lines) {
        if (lines === undefined || typeof lines !== "number") {
            throw "input is not a number";
        }

        if (lines < 2 || lines % 2 !== 0) {
            throw "rhombus lines should be an even number and at least 2";
        }



        let levels = lines / 2;
        let i = 1;

        let spaces = "";
        for (let i = 0; i < levels; i++) {
            spaces += " ";
        }
        console.log(`${spaces}\/\-\\`);

        while (i < levels) {
            let spacesMid = "";
            for (let j = 0; j <= i * 2; j++) {
                spacesMid += " ";
            }

            let spacesLeft = "";
            for (let k = 0; k < levels - i; k++) {
                spacesLeft += " ";
            }

            console.log(`${spacesLeft}\/${spacesMid}\\`);
            i++;
        }
        i--;
        while (i > 0) {
            let spacesMid = "";
            for (let j = 0; j <= i * 2; j++) {
                spacesMid += " ";
            }

            let spacesLeft = "";
            for (let k = 0; k < levels - i; k++) {
                spacesLeft += " ";
            }

            console.log(`${spacesLeft}\\${spacesMid}\/`);
            i--;
        }
        console.log(`${spaces}\\\-\/`);

    },
};