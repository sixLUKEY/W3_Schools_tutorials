let w: unknown = 1;

w = "String"; //? No error

w = {
  runMethod: () => {
    console.log("I think therefore I am");
  },
} as { runMethod: () => void };

if ( typeof w === 'object' && w != null ){
    (w as { runMethod: Function }).runMethod();
}
