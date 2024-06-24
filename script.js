const dialog = document.querySelector('dialog');
const box = dialog.querySelector('.box');
const btn_two = dialog.querySelector('.shto');
const button = document.querySelector('.button')


btn_two.onclick = () => {
    dialog.close();
  };

  button.onclick = () => {
        dialog.showModal();
  };


const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13]

for(let item of arr) {
    elem(item)
}


function elem(array) {
    const box2 = document.createElement('div');
    const first = document.createElement('div');
    const minus = document.createElement('div');
    const itemName = document.createElement('h6');
    const minusButton = document.createElement('button');
    const count = document.createElement('span');
    const img = document.createElement('img');
    const plusButton = document.createElement('button');
    const second = document.createElement('div');
    const item = document.createElement('div');
    const price = document.createElement('span');
    const removebtn = document.createElement('div');
    const remove = document.createElement('button');
    const img_blanket = document.createElement('div');
    
    img.src = 'https://m.media-amazon.com/images/I/81-x+F2EsHL._AC_UF894,1000_QL80_.jpg';
    img.alt = '';
    
    img_blanket.classList.add('img'); 
    first.classList.add('first');
    box2.classList.add('box2');
    minus.classList.add('minus');
    second.classList.add('second');
    item.classList.add('item'); 
    removebtn.classList.add('removeContainer'); 
    itemName.innerHTML = 'blanket';
    minusButton.innerHTML = '-';
    count.innerHTML = '1';
    plusButton.innerHTML = '+';
    price.innerHTML = '$29.99';
    remove.innerHTML = 'Remove';
    
    img_blanket.append(img);
    minus.append(itemName);
    minus.append(minusButton);
    minus.append(count);
    minus.append(plusButton);
    item.append(price);
    removebtn.append(remove);
    first.append(img_blanket);
    first.append(minus);
    second.append(item);
    second.append(removebtn);
    
    box2.append(first);
    box2.append(second);
    
    box.append(box2);
}

elem(arr); 

