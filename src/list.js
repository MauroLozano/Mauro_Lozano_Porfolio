const listItem = document.querySelectorAll('.list__item');
const itemContent = document.querySelectorAll('.item__content');
const itemDots = document.querySelectorAll('.item__dot-disabled');
listItem.forEach((li)=>{
    li.addEventListener('click', (e)=>{
        let index = Array.from(listItem).indexOf(li);
        if(Array.from(itemContent)[index].classList.contains('item__content--active')){
            Array.from(itemContent)[index].classList.remove('item__content--active');
            Array.from(itemContent)[index].classList.add('item__content--disabled');
        }else{
            Array.from(itemContent)[index].classList.add('item__content--active');
            Array.from(itemContent)[index].classList.remove('item__content--disabled');
        }
        if(Array.from(itemDots)[index].classList.contains('item__dot-disabled')){
            Array.from(itemDots)[index].classList.remove('item__dot-disabled');
            Array.from(itemDots)[index].classList.add('item__dot-active');
        }else{
            Array.from(itemDots)[index].classList.add('item__dot-disabled');
            Array.from(itemDots)[index].classList.remove('item__dot-active');
        }
    })
})