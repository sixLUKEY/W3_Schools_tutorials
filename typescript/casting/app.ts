let x: unknown = 'hello';
console.log((x as string).length); // 'as' can be used to change type
console.log((<string>x).length); // Using '<>' works the same as casting with 'as'
