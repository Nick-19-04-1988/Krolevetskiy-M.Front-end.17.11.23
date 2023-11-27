const year = prompt('In what year were you born?');
const city = prompt('What city do you live in?');
const sport = prompt('Which sports are you interested in?');

let city1 = city;
let sport1 = sport;
let age = 2023 - year;

if (year === '') {
    age = ('...It s a pity that you didn t enter your date of birth,');
} else if (year === null) {
    age = ('...It s a pity that you didn t enter your date of birth,');
}

if (city === 'Kyiv') {
    city1 = ('Kyiv.Kyiv capital of Ukraine.');
} else if (city === 'Washington') {
    city1 = ('Washington.Washington is the capital of the USA.');
}  else if (city === 'London') {
    city1 = ('London.London capital of Great Britain.');
}  else  if (city === ''){ 
    city1 = ('...Its a pity that you didnt enter the city you live in.');
}   else  if (city === null){ 
    city1 = ('...Its a pity that you didnt enter the city you live in.');
}
 
if (sport === 'Football') {
    sport1 = ('Football. Cool! Do you want to C.Ronaldo?');
} else if (sport === 'Volleyball') {
    sport1 = ('Volleyball. Cool! Do you want to F.Kiraly?');
} else if (sport === 'Basketball') {
    sport1 = ('Basketball. Cool! Do you want to M.Jordan?');
} else if(sport === ''){
    sport1 = ('...Its a pity that you didnt enter your favorite sport');
} else if(sport === null){
    sport1 = ('...Its a pity that you didnt enter your favorite sport');
}

alert (`Your age ${age} and you live in ${city1}. Your favorite sport ${sport1}`)