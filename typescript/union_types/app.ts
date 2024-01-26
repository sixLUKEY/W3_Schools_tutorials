// Union types used when value can be more than 1 type

function printStatusCode( code: string | number ){
    console.log(`My status code is ${code}.`);
}
printStatusCode(404);
printStatusCode('404');



