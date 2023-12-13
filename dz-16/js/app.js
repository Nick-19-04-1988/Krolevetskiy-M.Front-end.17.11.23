const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
key = '';
for(let i = 0; i < 16; i++){
  key += characters[Math.round(Math.random() * (characters.length - 1))];
}
console.log(key);
