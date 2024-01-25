enum CardinalDirections {
    North = 1, // First value of enum can be set and proceeding values auto increment
    South,
    East,
    West
}

let currentDirection = CardinalDirections.North;
console.log(currentDirection); // logs 1
currentDirection = 'North'; // Throws error as 'North' is not a valid enum

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.NotFound) // Logs 404

enum AlsoDirections {
    North = 'North',
    South = 'South',
    East = 'East',
    West = 'West',
}

console.log(AlsoDirections.East) // Logs 'East'