//Обработка ошибок
/*
const fnWithError = () => {
    throw new Error('Some error 404 uk')
}
try{
fnWithError()
} catch (error){
    console.error(error)
    console.log(error.message)
}
console.log('continue')

*/

let jsonString1 = '{"name": "John", "age": 30, "city": "New York"}';

let user1 = JSON.parse(jsonString1);

console.log( user1 );



let jsonString2 =  '{"name": "Alice", "age": "twenty-five", "city": "London"}';

try {

  let user2 = JSON.parse(jsonString2);
  if (age !== 'string') {
    console.log(user2)
  }

} catch (err) {
  console.log( "Invalid JSON: Unexpected string in JSON at position 27" );
}




















































