'use strict';

let imagesArr = ['images/1.png','images/2.png','images/3.png','images/4.png','images/5.png','images/6.png','images/7.png',
    'images/8.png','images/9.png','images/10.png','images/11.png','images/12.png','images/13.png','images/14.png','images/15.png',
    'images/16.png','images/17.png','images/18.png','images/19.png','images/20.png'];
let namesArr = ['СУШИМАН','ФИРМЕННАЯ', 'СУПРИМ', 'ГАВАИ', 'ПАРМА', 'НЕАПОЛИТАНО', 'ПРОШУТТО', 'ГЕТЬМАНСКАЯ', 'ИТАЛЬЯНСКАЯ',
    'ПАПЕРОНИ', 'ФРУТТО ДЕ МАРЕ', 'ОХОТНИЧЬЯ', 'ЛАГУНА', 'ПРОШУТТО', 'ТРИ СЫРА', 'МАРГАРИТА', 'КОПЧЁНАЯ КУРИЦА',
    'МОНТАНАРА', 'ВЕНЕЦИАНСКАЯ', 'ПАПЕРЧИЛИ'];
let productsArr = ['Соус "унаги", угорь, окунь морской, семга, авокдо, сыр моцарелла, оливки','основа, фирменный соус "Пицца Хата", ветчина свиная, салями, ветчина куриная, грибы свежие, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", ветчина свиная, салями, бекон, креветки, специи, сыр "Моцарелла", помидор',
    'основа, фирменный соус "Пицца Хата", курица, специи, сыр "Моцарелла", кукуруза, ананас, помидор',
    'основа, фирменный соус "Пицца Хата", бекон, лук, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", курица, специи, сыр "Моцарелла", кукуруза, ананас, помидор',
    'основа, фирменный соус "Пицца Хата", курица, грибы свежие, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", аджика, куриное филе, свинина отварная, говядина отварная, лук, специи, сыр "Моцарелла", помидор, зелень',
    'основа, сливки кулинарные, шинка "Пармская", руккола, помидоры черри, крем - сыр, сыр "Пармезан", сыр "Моцарелла"',
    'основа, фирменный соус "Пицца Хата", салями, специи, сыр "Моцарелла", помидор,маслины',
    'основа, фирменный соус "Пицца Хата", морской коктейль, специи, сыр "Моцарелла", помидор, перец, маслины',
    'основа, фирменный соус "Пицца Хата", охотничьи колбаски, чернослив, огурцы маринованные, сыр "Моцарелла"',
    'основа, сливки кулинарные, креветки, специи, сыр "Моцарелла", сыр "Пармезан"',
    'основа, фирменный соус "Пицца Хата", курица, грибы свежие, специи, сыр "Моцарелла", помидор, маслины',
    'основа, фирменный соус "Пицца Хата", специи, сыр "Гауда", сыр "Рокфор", сыр "Пармезан"',
    'основа, фирменный соус "Пицца Хата", сыр "Моцарелла", специи, помидор',
    'основа, соус пикантный, копчёная курица, огурцы маринованные, специи, сыр "Моцарелла", помидор',
    'основа, фирменный соус "Пицца Хата", грибы свежие, специи, сыр "Моцарелла", помидор, перец, маслины',
    'основа, фирменный соус "Пицца Хата", рыба красная, лук, специи, лимонный сок, укроп, сыр "Моцарелла", помидор',
    'основа, фирменный соус "Пицца Хата", аджика грузинская, охотничьи колбаски, салями, специи, чили, сыр "Моцарелла", помидор'];

let caloriesOfProducts = new Map([
    ['Соус "унаги"',  10], ['Угорь',  40], ['окунь морской',  60], ['семга',  50], ['авокдо',  10],  ['сыр моцарелла',  60],
    ['оливки',  80],  ['основа',  50],  ['фирменный соус "Пицца Хата"',  20], ['ветчина свиная',  60], ['салями',  80],['ветчина куриная',  60], ['грибы свежие',  30], ['специи',  5], ['сыр "Моцарелла"',  40], ['помидор',  20], ['маслины',  80], ['бекон',  90], ['креветки',  50],
    ['курица',  45], ['кукуруза', 40],['ананас', 30],['лук', 10],['аджика', 5], ['куриное филе', 40],['свинина отварная',  40], ['говядина отварная',  40],
    ['зелень', 3], ['сливки кулинарные',  6], ['шинка "Пармская"',  80], ['руккола',  10], ['помидоры черри',  16], ['крем - сыр',  7],
    ['сыр "Пармезан"',  55], ['морской коктейль',  45], ['перец',  3], ['охотничьи колбаски',  55], ['чернослив',  6], ['огурцы маринованные',  7],
    ['сыр "Гауда"',  60], ['сыр "Рокфор"',  60], ['соус пикантный',  20], ['копчёная курица',  50],
    ['рыба красная',  60],['лимонный сок',  2], ['укроп',  1], ['аджика грузинская',  6],
    ['чили',  7],
]);

let priceOfProducts = new Map([
    ['Соус "унаги"',  15], ['Угорь',  60], ['окунь морской',  50], ['семга',  80], ['авокдо',  30],  ['сыр моцарелла',  80],
    ['оливки',  60],  ['основа',  75],  ['фирменный соус "Пицца Хата"',  55], ['ветчина свиная',  20], ['салями', 55],['ветчина куриная',  10], ['грибы свежие',  10],
    ['специи',  5], ['сыр "Моцарелла"',  60], ['помидор',  5], ['маслины',  40], ['бекон',  65], ['креветки',  58],
    ['курица',  42], ['кукуруза', 22],['ананас', 22],['лук', 88],['аджика', 4], ['куриное филе', 85],['свинина отварная',  53], ['говядина отварная',  25],
    ['зелень', 5], ['сливки кулинарные',  4], ['шинка "Пармская"',  8], ['руккола',  78], ['помидоры черри',  58], ['крем - сыр',  5],
    ['сыр "Пармезан"',  85], ['морской коктейль',  52], ['перец',  9], ['охотничьи колбаски',  45], ['чернослив',  10], ['огурцы маринованные',  20],
    ['сыр "Гауда"',  45], ['сыр "Рокфор"',  20], ['соус пикантный',  42], ['копчёная курица',  85],
    ['рыба красная',  75],['лимонный сок',  1], ['укроп',  1], ['аджика грузинская',  5],
    ['чили',  10],
]);


let priceArr = [];

for (let i = 0; i <productsArr.length; i++) {
    let tmp = 0;
    for (let j of priceOfProducts.keys()) {
        if (productsArr[i].toUpperCase().indexOf(j.toUpperCase()) != -1) {
            tmp += priceOfProducts.get(j);
        }
    }
    priceArr.push(tmp+' грн');
}

let caloriesArr = [];

for (let i = 0; i <productsArr.length; i++) {
    let tmp = 0;
    for (let j of caloriesOfProducts.keys()) {
        if (productsArr[i].toUpperCase().indexOf(j.toUpperCase()) != -1) {
            tmp += caloriesOfProducts.get(j);
        }
    }
    caloriesArr.push(tmp+' ккал');
}

function parseHTML (someString) {
    const parse = new DOMParser().parseFromString(someString, 'text/html');
    return parse.body.children;
}
/**************************/
let allSection = document.querySelector('main > div:nth-child(3)');
for (let i =0; i <20; i++){
    let divAbout = document.createElement('div');
    divAbout.classList.add('about-pizza');
    divAbout.classList.add('flip-container');
    allSection.appendChild(divAbout);
}
/**************************/
/******Buy*****/

let main = document.getElementsByTagName('main')[0];
let divBuy = document.createElement('div');
let spanBuyCount = document.createElement('span');
let st = window.localStorage;

let countAutorPizza = 0;

let k = 20;
while (st.getItem('pizzaAutor' + k)!=null) {
    countAutorPizza++;
    k++;
}

let countOrder = st.length - countAutorPizza;


spanBuyCount.innerText = countOrder;
divBuy.id = 'buy';
spanBuyCount.id = 'buy-count';

divBuy.appendChild(spanBuyCount);
main.insertBefore(divBuy, main.firstElementChild);
/***********Add new pizza*******/

let addNewPizza = document.createElement('button');
addNewPizza.innerText = 'Собрать свою пиццу';
addNewPizza.id = 'create';


main.insertBefore(addNewPizza,main.children[1]);
let insertName = document.createElement('input');
insertName.placeholder = 'Введите имя пиццы';
insertName.id = 'name-autor';
insertName.className = 'no-display';
main.insertBefore(insertName,main.children[2]);

let listDiv = document.createElement('div');
listDiv.className = 'no-display';
listDiv.id = 'list-of-elements';
main.insertBefore(listDiv,main.children[3]);

let addNewPizzaToList = document.createElement('button');
addNewPizzaToList.className = 'no-display';
addNewPizzaToList.innerText = 'Добавить в меню';
addNewPizzaToList.id = 'add-to-menu';
main.insertBefore(addNewPizzaToList,main.children[4]);

let format = 0;
for (let j of priceOfProducts.entries()) {
    format++;
    const oneOfIngredients = `<label><input type="checkbox" value=${j[1]}> ${j[0]}</label>`;
    if(format % 7 == 0) listDiv.innerHTML += '<br>';
    listDiv.innerHTML += oneOfIngredients;
}

let inputs = document.querySelectorAll('#list-of-elements input');
let count1 = 0;
for (let j of caloriesOfProducts.values()) {
    inputs[count1++].setAttribute('data-calories', j.toString());
}

/******************/
function buildUnint(un) {
    for (let i = 0; i < 20; i++) {
        const unit = `<img src=${imagesArr[i]} alt="pizza">
            <div id=${i} class="name">${namesArr[i]}</div>
            <div class="list-hide ins">
            </div>
            <div class="list-hide">${caloriesArr[i]}</div>
            <div>${priceArr[i]}</div>
            <button class="push-buy">Купить</button>`;

        for (let j = 0; j < 6; j++)
            un[i].appendChild(parseHTML(unit)[j]);
    }
}

function buildPage() {
    let unint = document.getElementsByClassName('about-pizza');

    for (let i = 0; i < unint.length; i++) {
        let emptyDiv = document.createElement('div');
        let divNo = document.createElement('div');
        divNo.classList.add('no-display');
        divNo.classList.add('open');
        emptyDiv.appendChild(divNo);
        unint[i].appendChild(emptyDiv);
    }

    let unints = document.querySelectorAll('.about-pizza div.no-display');
    buildUnint(unints);
    let about1 = document.querySelectorAll('.about-pizza>div');

    for (let i = 0; i < about1.length; i++) {
        let div = document.createElement('div');
        div.className = 'cover';
        let img = document.createElement('img');
        img.src = 'images/turn.png';
        img.className='turn';
        div.appendChild(img);
        about1[i].insertBefore(div, about1[i].firstChild);
    }

    let productA = [];
    for (let i = 0; i < productsArr.length; i++)
        productA = productA.concat(productsArr[i].split(','));

    let masL = [];
    for (let o = 0; o < productsArr.length; o++) {
        masL.push(productsArr[o].split(',').length);
    }

    let menu = document.querySelector('body > main > div:nth-child(8)');

    for (let j = 0; j < menu.children.length; j++) {
        let par = document.getElementsByClassName('ins')[j];

        for (let i = 0; i < productsArr[j].split(',').length; i++) {
            let label = document.createElement('label');
            let input = document.createElement('input');
            let br = document.createElement('br');
            input.setAttribute('type', 'checkbox');
            input.checked = true;

            for (let k of caloriesOfProducts.keys()) {
                if (productsArr[j].split(',')[i].toUpperCase().indexOf(k.toUpperCase()) != -1) {
                    let t = caloriesOfProducts.get(k);
                    input.setAttribute('data-calories', t);
                }
            }
            for (let k of priceOfProducts.keys()) {
                if (productsArr[j].split(',')[i].toUpperCase().indexOf(k.toUpperCase()) != -1) {
                    let t = priceOfProducts.get(k);
                    input.setAttribute('value', t);
                }
            }

            label.appendChild(input);
            label.appendChild(document.createTextNode(productsArr[j].split(',')[i]));
            label.appendChild(br);
            par.appendChild(label);
        }
    }
}

/****************************************************/
function startFlip() {
    let menu = document.getElementsByClassName('menu-for-grid')[0];
    menu.addEventListener('click', (e) => {

        if (e.target.tagName != 'IMG' && e.target.className !='turn' ) {
            return;
        }
        let flip = e.target.parentElement.parentElement.parentElement;

        let fl1 = document.getElementsByClassName('flipper')[0];
        if (fl1 != undefined) {
            fl1.className = '';
        }

        let fr1 = document.getElementsByClassName('front')[0];
        if (fr1 != undefined) {
            fr1.className = 'cover';
        }
        let bc1 = document.getElementsByClassName('back')[0];
        if (bc1 != undefined) {
            bc1.className = 'no-display open';
        }

        flip.firstElementChild.classList = 'flipper';
        let front = document.querySelector('div.flipper > div.cover');

        let back = document.querySelector('.flipper > div.open');

        front.className = 'front';
        back.className = 'back';

    });

    menu.addEventListener('click', (event) => {
        if (event.target.tagName != 'INPUT'){ return;}
        let pr = document.getElementsByClassName('price-first')[0];
        if (pr != undefined) {
            pr.className = '';
        }

        let priceFirst = document.querySelector('div.back div:nth-child(5)');

        priceFirst.classList.add('price-first');

        let lastPrice = document.getElementsByClassName('price-first')[0];
        let lastCalories = lastPrice.previousElementSibling;

        let inputs = document.querySelectorAll(' div.back div.list-hide label>input');

        let price = 20;
        let calorie = 20;
        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].checked) {
                price += parseInt(inputs[i].value);
                calorie += parseInt(inputs[i].dataset.calories);
            }
        }
        lastPrice.innerHTML = price + ' грн';
        lastCalories.innerHTML = calorie + ' ккал';

    });
    /*****************************************************/
}
/*****************************************************/

let choose = document.getElementById('choose');
let chooseNum;
let c = 0;
choose.addEventListener('click', function a(event) {

    if (chooseNum != undefined) {
        choose.removeEventListener('click', a);
        choose.addEventListener('click', a);
        let main = document.getElementsByTagName('main')[0];
        main.classList.add('no-display');
        let filter1 = document.querySelector('main > div:nth-child(6)');
        filter1.classList.add('no-display');
        let filter2 = document.querySelector('main > div:nth-child(7)');
        filter2.classList.add('no-display');

        for (let i = 2; i <5; i++)
            main.children[i].classList.add('no-display');

        let rem = document.getElementsByClassName('menu-for-grid')[0];
        if (rem!=undefined)
            rem.classList.remove('menu-for-grid');

        document.getElementById('filter-value-for-grid').value = null;

        let radios = document.getElementsByName('filter');
        for (let i = 0; i < radios.length; i++) {
            radios[i].checked = false;
        }

        let clear = document.querySelector('main > div:nth-child(8)');
        clear.innerHTML = '';

        for (let i = 0; i < 20; i++) {
            let divs = document.createElement('div');
            divs.className = 'about-pizza';
            clear.appendChild(divs);
        }
    }

    if (event.target.id == 'list') chooseNum = 2;
    else  if (event.target.id == 'grid') chooseNum = 1;


    if (chooseNum == 1) {
        buildPage();

        let noDisplayOne = document.getElementsByClassName('no-display')[0];
        let noDisplayTwo = document.getElementsByClassName('no-display')[4];
        noDisplayOne.className = '';
        noDisplayTwo.className = '';
        let menu = document.querySelector('main div:nth-child(8)');
        menu.className = 'menu-for-grid';
        let about = menu.children;
        for (let i = 0; i < about.length; i++) {
            about[i].className = 'about-pizza-for-grid flip-container';
        }

        let divFilter = document.querySelector('main > div:nth-child(6)');

        divFilter.addEventListener("click", event => {
            let listElements = document.getElementsByClassName('menu-for-grid')[0];
            let numberElements = document.getElementsByClassName('menu-for-grid')[0].children.length;

            if (event.target.tagName != 'BUTTON') return;
            let filterVal = document.getElementById('filter-value-for-grid').value;
            for (let i = 0; i < numberElements; i++) {///add All and users
                if (listElements.children[i].classList.contains('no-display')) {
                    listElements.children[i].classList = 'about-pizza-for-grid flip-container';
                }
            }
            filterByIngredient(filterVal);
        });
        divFilter.addEventListener("keyup", event => {
            let listElements = document.getElementsByClassName('menu-for-grid')[0];
            let numberElements = document.getElementsByClassName('menu-for-grid')[0].children.length;

            if (event.target.tagName != 'INPUT') return;
            if (event.keyCode != 13) return;
            let filterVal = document.getElementById('filter-value-for-grid').value;
            for (let i = 0; i < numberElements; i++) {
                if (listElements.children[i].classList.contains('no-display')) {
                    listElements.children[i].classList = 'about-pizza-for-grid flip-container';
                }
            }
            filterByIngredient(filterVal);
        });

        let filterByIngredient = (ingr) => {

            /*Get from user storage*/

            let idL = 20;
            let st = window.localStorage;
            while (st.getItem('pizzaAutor'+idL)!=null) {
                let pizzaA = JSON.parse(st.getItem('pizzaAutor' + idL));
                if (pizzaA.selectedPizzaIndredients.toUpperCase().indexOf(ingr.toUpperCase()) == -1) {
                    document.getElementById(idL.toString()).parentElement.parentElement.parentElement.className = 'no-display';
                }
                idL++;
            }

            /////////////////////////////////
            for (let i = 0; i < productsArr.length; i++) {
                if (productsArr[i].toUpperCase().indexOf(ingr.toUpperCase()) == -1) {
                    about[i].className = 'no-display';
                }
            }
        };
        startFlip();

        ///////////////////////////////////////////////////////////////////////////////////////////////////////
        let idLast = 20;
        /**if there is smth in storage of auth pizzas*/
        let st = window.localStorage;
        while (st.getItem('pizzaAutor'+idLast)!=null) {

            let pizzaA = JSON.parse(st.getItem('pizzaAutor' + idLast));
            idLast++;
            let menu = document.getElementsByClassName('menu-for-grid')[0];

            let divFirst = document.createElement('div');
            divFirst.classList.add('about-pizza-for-grid');
            divFirst.classList.add('flip-container');
            let divSecond = document.createElement('div');
            divFirst.appendChild(divSecond);
            let divThird = document.createElement('div');
            divThird.className = 'cover';
            divSecond.appendChild(divThird);
            let img1 = document.createElement('img');
            img1.src = "images/turn.png";
            img1.classList.add('turn');
            divThird.appendChild(img1);
            let divFourth = document.createElement('div');
            divFourth.className = 'no-display open';
            divSecond.appendChild(divFourth);
            let img2 = document.createElement('img');
            img2.src = "images/autor.png";
            divFourth.appendChild(img2);
            let divFifth = document.createElement('div');
            divFourth.appendChild(divFifth);
            let idA = menu.children.length;
            divFifth.id = idA;
            divFifth.innerText = pizzaA.selectedPizzaName;
            let divSixth = document.createElement('div');

            divSixth.className = 'list-hide ins';

            /*split in labels with inputs*/

            for (let i = 0; i <pizzaA.selectedPizzaIndredients.split(',').length; i++) {
                let label = document.createElement('label');
                let input = document.createElement('input');
                let br = document.createElement('br');
                input.setAttribute('type', 'checkbox');
                input.checked = true;

                for (let k of caloriesOfProducts.keys()) {
                    if (pizzaA.selectedPizzaIndredients.split(',')[i].toUpperCase().indexOf(k.toUpperCase()) != -1) {
                        let t = caloriesOfProducts.get(k);
                        input.setAttribute('data-calories', t);
                    }
                }
                for (let k of priceOfProducts.keys()) {
                    if (pizzaA.selectedPizzaIndredients.split(',')[i].toUpperCase().indexOf(k.toUpperCase()) != -1) {
                        let t = priceOfProducts.get(k);
                        input.setAttribute('value', t);
                    }
                }
                label.appendChild(input);
                label.appendChild(document.createTextNode(pizzaA.selectedPizzaIndredients.split(',')[i]));
                label.appendChild(br);
                divSixth.appendChild(label);

            }
            divFourth.appendChild(divSixth);

            let divSeventh = document.createElement('div');
            divSeventh.innerText = pizzaA.selectedPizzaCalories + ' ккал';
            divFourth.appendChild(divSeventh);
            divSeventh.className = 'list-hide';
            let divEighth = document.createElement('div');
            divEighth.innerText = pizzaA.selectedPizzaPrice + ' грн';
            divFourth.appendChild(divEighth);
            let button = document.createElement('button');
            button.innerText = 'Купить';

            button.className = 'push-buy';

            divFourth.appendChild(button);

            menu.appendChild(divFirst);
            let inputsAll = document.querySelectorAll('div.list-hide.ins input[type="checkbox"]');
            for (let i = 0; i < inputsAll.length; i++)
                if (!inputsAll[i].checked) inputsAll[i].checked = true;

        }
//////////////////////////////////////////////////////////////////////////////////////////////////

    } else if (chooseNum == 2) {
        let unints = document.getElementsByClassName('about-pizza');
        buildUnint(unints);

        let noDisplayOne = document.getElementsByClassName('no-display')[0];
        let noDisplayTwo = /*document.getElementsByClassName('no-display')[5];*/document.querySelector('main > div:nth-child(7)');
        noDisplayOne.className = '';
        noDisplayTwo.className = '';
        let menu = document.querySelector('main div:nth-child(8)');
        let about = menu.children;
        let hide = [];
        for (let i = 0; i < about.length; i++) {
            about[i].className = 'about-pizza-for-list';
            hide.push(about[i].children[2]);
            hide.push(about[i].children[3]);
            /**add-list-of-products*/
            about[i].children[2].innerText = productsArr[i];
        }
        for (let i = 0; i < hide.length; i++) {
            hide[i].className = 'list-hide-for-list';
        }

        let separ = document.querySelectorAll('.about-pizza-for-list div:nth-child(2)');
        for (let i = 0; i < separ.length; i++) {
            separ[i].innerHTML += ',&nbsp';
        }

        let ab = document.querySelectorAll('.about-pizza-for-list');
        for (let i =0; i <ab.length; i++) {
            let content='';
            for (let j=0; j <5; j++) {
                content+= ab[i].children[j].outerHTML;
            }
            ab[i].innerHTML = '<div class="wrapper">' +content+'</div>' + '<button class="push-buy">Купить</button>';

        }

        let button = document.getElementById('run-for-list');

        button.addEventListener("click", () => {

            let radios = document.getElementsByName('filter');
            let filter;
            for (let i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    filter = radios[i].value;
                    break;
                }
            }

            about = [].slice.call(about, 0);/*in array*/
            let parent = about.map(function (el) {
                return el.parentNode;
            });

            if (filter == 'priceToCheap') {
                about.sort((a, b) => {
                    return parseInt(b.children[0].children[4].textContent) - parseInt(a.children[0].children[4].textContent);
                }).forEach(function (el, i) {
                    parent[i].appendChild(el)
                });
            } else if (filter == 'priceToExpensive') {
                about.sort((a, b) => {
                    return parseInt(a.children[0].children[4].textContent) - parseInt(b.children[0].children[4].textContent);
                }).forEach(function (el, i) {
                    parent[i].appendChild(el)
                });
            } else if (filter == 'nameToZ') {
                about.sort((a, b) => {
                    return (b.children[0].children[1].textContent.toLowerCase().localeCompare(a.children[0].children[1].textContent.toLowerCase()));
                }).forEach(function (el, i) {
                    parent[i].appendChild(el)
                });
            } else if (filter == 'nameToA') {
                about.sort((a, b) => {
                    return (a.children[0].children[1].textContent.toLowerCase().localeCompare(b.children[0].children[1].textContent.toLowerCase()));
                }).forEach(function (el, i) {
                    parent[i].appendChild(el)
                });
            }
        });

        let idLast = 20;
        /**if there is smth in storage of authors pizzas*/
        let st = window.localStorage;
        while (st.getItem('pizzaAutor'+idLast)!=null){

            let pizzaA = JSON.parse(st.getItem('pizzaAutor'+idLast));
            idLast++;

            let divFirst = document.createElement('div');
            divFirst.classList.add('about-pizza-for-list');
            let wrapper  = document.createElement('div');
            wrapper.classList.add('wrapper');
            divFirst.appendChild(wrapper);
            let img1 = document.createElement('img');
            img1.src = "images/autor.png";
            wrapper.appendChild(img1);
            let divSecond = document.createElement('div');
            let idA = menu.children.length;
            divSecond.id = idA;
            divSecond.innerHTML = pizzaA.selectedPizzaName + ',&nbsp';
            wrapper.appendChild(divSecond);
            let divThird = document.createElement('div');
            divThird.className = 'list-hide-for-list';
            divThird.innerText =pizzaA.selectedPizzaIndredients;
            wrapper.appendChild(divThird);
            let divFourth = document.createElement('div');
            divFourth.innerText = pizzaA.selectedPizzaCalories + ' ккал';
            divFourth.className = 'list-hide-for-list';
            wrapper.appendChild(divFourth);
            let divFifth = document.createElement('div');
            divFifth.innerText = pizzaA.selectedPizzaPrice + ' грн';
            wrapper.appendChild(divFifth);
            let button = document.createElement('button');
            button.innerText = 'Купить';
            button.className = 'push-buy';
            divFirst.appendChild(button);
            menu.appendChild(divFirst);

        }
    }

});
//-------------------------------
let menuG = document.querySelector('main div:nth-child(8)');
if (menuG !=undefined)
menuG.addEventListener('click', (eButton) => {

    if(eButton.target.tagName != 'BUTTON') return;
    if(document.getElementsByClassName('about-pizza-for-grid flip-container')[0] == undefined) return;
    let priceBlock = eButton.target.previousElementSibling;
    let price = priceBlock.innerHTML;

    let calorieBlock = priceBlock.previousElementSibling;
    let calorie = calorieBlock.innerHTML;
    let divList = calorieBlock.previousElementSibling;
    let name = divList.previousElementSibling.innerHTML;

    let idB = divList.previousElementSibling.id;

    let ipPizza = "";
    for(let i =0; i < divList.children.length; i++){
        if(divList.children[i].children[0].checked)
            ipPizza +=divList.children[i].textContent+',';
    }
    let objToStore = {
        selectedPizzaName: name,
        selectedPizzaIndredients:ipPizza,
        selectedPizzaCalories:calorie,
        selectedPizzaPrice:price
    };
    /***/
    let add = document.getElementById('buy-count');
    let count = parseInt(add.innerText);
    count++;
    add.innerText=count;
    /***/
    let st = window.localStorage;
    let pJ = JSON.stringify(objToStore);

    let i = 1;
    while (st.getItem('pizza' + idB + 'order:' + i) !=null) {
        i++;
    }

    st.setItem(('pizza'+ idB + 'order:' + i),pJ);
});
//----------------------------------
let menuL = document.querySelector('main div:nth-child(8)');
if(menuL!=undefined)
menuL.addEventListener('click', (eButton) => {
    if(eButton.target.tagName != 'BUTTON' && eButton.target.className != 'push-buy') return;
    if (document.getElementsByClassName('about-pizza-for-list')[0] == undefined) return;
    let wrapperBlock = eButton.target.previousElementSibling;
    let name = wrapperBlock.children[1].innerHTML;
    let divList = wrapperBlock.children[2].innerHTML;;
    let calorie = wrapperBlock.children[3].innerHTML;
    let price = wrapperBlock.children[4].innerHTML;

    let idB = wrapperBlock.children[1].id;

    let objToStore = {
        selectedPizzaName: name,
        selectedPizzaIndredients:divList,
        selectedPizzaCalories:calorie,
        selectedPizzaPrice:price
    };
    /***/
    let add = document.getElementById('buy-count');
    let count = parseInt(add.innerText);
    count++;
    add.innerText=count;
    /***/
    let st = window.localStorage;
    let pJ = JSON.stringify(objToStore);

    let i = 1;
    while (st.getItem('pizza' + idB + 'order:' + i) !=null) {
        i++;
    }

    st.setItem(('pizza'+ idB + 'order:' + i),pJ);

});

//*******************************************************************************************//

addNewPizza.addEventListener('click', (createPizza) => {
    let name = document.getElementById('name-autor');
    name.classList.remove('no-display');
    let inputBlock = document.getElementById('list-of-elements');
    inputBlock.classList.remove('no-display');
    let addToMenu = document.getElementById('add-to-menu');
    addToMenu.classList.remove('no-display');
});

addNewPizzaToList.addEventListener('click', (addToMenu) => {
    let inputBlock = document.getElementById('list-of-elements');
    let name = document.getElementById('name-autor');

    name.classList.add('no-display');
    inputBlock.classList.add('no-display');
    document.getElementById('add-to-menu').classList.add('no-display');

    let nameAutor = name.value;
    let price = 20;
    let calorie = 20;

    let inputs = document.querySelectorAll('#list-of-elements > label >input');
    let inputsHTML = '';

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked) {
            if(document.getElementsByClassName('menu-for-grid')[0] != undefined) { //this is grid
                inputsHTML += inputs[i].parentElement.outerHTML + '<br>';
            }
            else inputsHTML +=inputs[i].parentElement.innerText + ',';
            price += parseInt(inputs[i].value);
            calorie += parseInt(inputs[i].dataset.calories);
        }
    }

    /***grid*/
    let menu = document.getElementsByClassName('menu-for-grid')[0];

    if (menu != undefined) {

        let divFirst = document.createElement('div');
        divFirst.classList.add('about-pizza-for-grid');
        divFirst.classList.add('flip-container');
        let divSecond = document.createElement('div');
        divFirst.appendChild(divSecond);
        let divThird = document.createElement('div');
        divThird.className = 'cover';
        divSecond.appendChild(divThird);
        let img1 = document.createElement('img');
        img1.src = "images/turn.png";
        img1.classList.add('turn');
        divThird.appendChild(img1);
        let divFourth = document.createElement('div');
        divFourth.className = 'no-display open';
        divSecond.appendChild(divFourth);
        let img2 = document.createElement('img');
        img2.src = "images/autor.png";
        divFourth.appendChild(img2);
        let divFifth = document.createElement('div');
        divFourth.appendChild(divFifth);
        let idA = menu.children.length;
        divFifth.id = idA;
        divFifth.innerText = nameAutor;
        let divSixth = document.createElement('div');
        divFourth.appendChild(divSixth);
        divSixth.className = 'list-hide ins';
        divSixth.innerHTML = inputsHTML;
        let textListIndr='';
        for (let i =0; i <divSixth.children.length; i+=2)
            textListIndr+= divSixth.children[i].innerText + ',';
        textListIndr = textListIndr.slice(1,textListIndr.length-1);
        let divSeventh = document.createElement('div');
        divSeventh.innerText = calorie + ' ккал';
        divFourth.appendChild(divSeventh);
        divSeventh.className = 'list-hide';
        let divEighth = document.createElement('div');
        divEighth.innerText = price + ' грн';
        divFourth.appendChild(divEighth);
        let button = document.createElement('button');
        button.innerText = 'Купить';
        button.className = 'push-buy';
        divFourth.appendChild(button);
        menu.appendChild(divFirst);
        let inputsAll = document.querySelectorAll('div.list-hide.ins input[type="checkbox"]');
        for (let i = 0; i < inputsAll.length; i++)
            if (!inputsAll[i].checked) inputsAll[i].checked = true;
//---------
        unchecked();

        /***************************************************************************************/

        /***save to storage****/
        let objToStore = {
            selectedPizzaName: nameAutor,
            selectedPizzaIndredients:textListIndr,
            selectedPizzaCalories:calorie,
            selectedPizzaPrice:price
        };

        let st = window.localStorage;
        let pJ = JSON.stringify(objToStore);
        st.setItem(('pizzaAutor'+ idA),pJ);

    }
    else {
        menu = document.querySelector('body > main > div:nth-child(8)');

        let divFirst = document.createElement('div');
        divFirst.classList.add('about-pizza-for-list');
        let wrapper  = document.createElement('div');
        wrapper.classList.add('wrapper');
        divFirst.appendChild(wrapper);
        let img1 = document.createElement('img');
        img1.src = "images/autor.png";
        wrapper.appendChild(img1);
        let divSecond = document.createElement('div');
        let idA = menu.children.length;
        divSecond.id = idA;
        divSecond.innerHTML = nameAutor + ',&nbsp';
        wrapper.appendChild(divSecond);
        let divThird = document.createElement('div');
        divThird.className = 'list-hide-for-list';
        divThird.innerText = inputsHTML.slice(1, inputsHTML.length-1);
        wrapper.appendChild(divThird);
        let divFourth = document.createElement('div');
        divFourth.innerText = calorie + ' ккал';
        divFourth.className = 'list-hide-for-list';
        wrapper.appendChild(divFourth);
        let divFifth = document.createElement('div');
        divFifth.innerText = price  + ' грн';
        wrapper.appendChild(divFifth);
        let button = document.createElement('button');
        button.innerText = 'Купить';
        button.className = 'push-buy';
        divFirst.appendChild(button);
        menu.appendChild(divFirst);

        unchecked();
        /***************************************************************************************/

        /***save to storage****/
        let objToStore = {
            selectedPizzaName: nameAutor,
            selectedPizzaIndredients:inputsHTML.slice(1, inputsHTML.length-1),
            selectedPizzaCalories:calorie,
            selectedPizzaPrice:price
        };

        let st = window.localStorage;
        let pJ = JSON.stringify(objToStore);
        st.setItem(('pizzaAutor'+ idA),pJ);

    }

});

function unchecked() {
    let unchecked = document.querySelectorAll('#list-of-elements input');
    for (let i = 0; i < unchecked.length; i++)
        unchecked[i].checked = false;
    let clearName = document.getElementById('name-autor');
    clearName.value = '';
}