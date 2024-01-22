// Convert Minutes into Seconds

// Write a function that takes an integer minutes and converts it to seconds.

// Examples

// convert(5) ➞ 300

// convert(3) ➞ 180

// convert(2) ➞ 120

function mintosec(params) {

    const convert = params * 60;

    return convert;
    
}

const output = mintosec(5);
console.log(output);// output :- 300