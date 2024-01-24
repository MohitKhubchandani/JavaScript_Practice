// Football Points

// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

// Examples

// footballPoints(3, 4, 2) ➞ 13

// footballPoints(5, 0, 2) ➞ 15

// footballPoints(0, 0, 1) ➞ 0

function points(wins , draws , looses , cb) {

        const result1 = cb(wins)
         
        return result1 + draws;
    }

function count(win){

    const result = win * 3;

    return result;
}

const output = points(5, 0, 2 , count);

console.log(output);// Output = 15;