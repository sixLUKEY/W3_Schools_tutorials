const car: {
  type: string;
  model: string;
  year: number;
} = {
  type: "Toyota",
  model: "Corolla",
  year: 2009,
};

const anotherCar = {
  type: "Travis",
};
anotherCar.type = "Ford"; // No error as same type
anotherCar.type = 5; // Error because not same type

const bakkie: {  // Example without optional property
  type: string;  // Will error out because mileage is missing
  mileage: number;
} = {
    type: 'Ford'
};
bakkie.mileage = 250000;

const anotherBakkie: { type: string, mileage?: number } = {
    type: 'Ford'
};
anotherBakkie.mileage = 120000;

const nameAgeMap: {
    [index: string] : number
} = {};

nameAgeMap.Joey = 27;
nameAgeMap.Philip = 'twenty'; // Won't work because not type number