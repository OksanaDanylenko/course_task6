let body = document.body;
body.className = 'basket-list';

let st = window.localStorage;
let s = [];
for ( let i = 0; i < st.length; i++ ) {
    s.push(st.key(i).toString());
}

let masIndex= [];
for (let i = 0; i < s.length; i++) {
    if (s[i].indexOf('pizza')!=-1) {
        masIndex.push(s[i].substr(5, 1));
    }
}

let result = {};
masIndex.forEach(function(a){

    if (result[a] != undefined) {
        ++result[a];
    }
    else {
        result[a] = 1;
    }
});

for (let key in result){
    let div = document.createElement('div');
    div.className = 'list-of-buy';
    let minus = document.createElement('img');
    let plus = document.createElement('img');
    minus.src='images/minus.png';
    plus.src='images/plus.png';
    plus.className='plus';
    minus.className = 'minus';



    let info = JSON.parse(st.getItem('pizza' + key + 'order:1'));
    if(info!=undefined)
    div.innerHTML = info.selectedPizzaName + ', ' + result[key].toString() ;
    div.dataset.store = 'pizza'+ key + 'order:' + result[key];
    body.appendChild(div);
    div.appendChild(minus);
    div.appendChild(plus);

}

let clean = document.createElement('button');
clean.id = 'clean';
clean.innerText = "очистить корзину";
body.appendChild(clean);
clean.addEventListener('click', ()=> {
    let len = localStorage.length;
    let masOfSt = [];

    for (let i =0; i<len; i++) {
        console.log(localStorage.length);
        console.log(localStorage.key(i).slice(0, 5));
        if (localStorage.key(i).slice(0, 5) === 'pizza') {
            masOfSt.push(localStorage.key(i));

        }
    }

    for (let i = 0; i < masOfSt.length; i++){
        localStorage.removeItem(masOfSt[i]);
    }
    body.innerHTML = '';
});

body.addEventListener('click', (e)=>{
    if(e.target.className != 'plus') return;
    let plus = e.target;
    let keyStore = plus.parentElement.getAttribute('data-store');
    let tmp = keyStore.slice(-1);
    let newKeyStore = keyStore.slice(0, keyStore.length-1) + ++tmp;

    plus.parentElement.setAttribute('data-store', newKeyStore);
    let count = parseInt(plus.parentElement.textContent.slice(-1));
    let textIn = plus.parentElement.textContent.slice(0, plus.parentElement.textContent.length-1) + ++count;
    console.log(plus.parentElement.textContent.slice(-1));
    plus.parentElement.innerHTML = plus.parentElement.innerHTML.replace(plus.parentElement.innerText, textIn);

    let pJ = JSON.stringify(textIn);

    localStorage.setItem(newKeyStore, pJ);

    e.preventDefault();

});

body.addEventListener('click', (e)=>{
    if(e.target.className != 'minus') return;
    let minus = e.target;
    let keyStore = minus.parentElement.getAttribute('data-store');
    let count = parseInt(minus.parentElement.textContent.slice(-1));
    if (count!=0)--count;
    let textIn = minus.parentElement.textContent.slice(0, minus.parentElement.textContent.length-1) + count;
    minus.parentElement.innerHTML = minus.parentElement.innerHTML.replace(minus.parentElement.innerText, textIn);

    localStorage.removeItem(keyStore);

});
