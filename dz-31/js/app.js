const userName = prompt('ВВеди имя')
const someText = prompt('Напиши отзыв')

const div = document.createElement('div');
div.className = 'item'
div.innerHTML = `<h3>${userName}</h3><p>${someText}</p>`

testimonials.prepend(div)

const butt = document.createElement('button')
butt.className = 'butt'
butt.innerHTML = 'Создать новый коментарий'
testimonials.appendChild(butt)

/*
let item = testimonials.querySelector('.item');
let clone = item.cloneNode(true);
testimonials.prepend(clone);
*/


const callback = () => {
    const userName1 = prompt('ВВеди имя')
    const someText1 = prompt('Напиши отзыв')

    const div = document.createElement('div');
    div.className = 'item'
    div.innerHTML = `<h3>${userName1}</h3><p>${someText1}</p>`
   
    testimonials.prepend(div)

    let item = testimonials.querySelector('.item');
    let clone = item.cloneNode(true);
    testimonials.prepend(clone);
    };
  
butt.addEventListener('click', callback)





































