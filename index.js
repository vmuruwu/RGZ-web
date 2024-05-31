//Выбор варианта

let a = 0x74bd4c5;
console.log(a%600); // компания
console.log(a%9); // меню
console.log(a%43); // валюта


// Страница Новости
function showNews (){
    document.querySelector('.Nnews2').style='display:block;';
    document.querySelector('.butShow').style='display:none;';
    document.querySelector('.butHide').style='display:block;';
}
function hideNews(){
    document.querySelector('.butHide').style='display:none;';
    document.querySelector('.Nnews2').style='display:none;';
    document.querySelector('.butShow').style='display:block;';
}

// Страница Курс Валют
function cursIDR(){
    const url = 'https://www.cbr-xml-daily.ru/daily_json.js'
    fetch (url)
        .then( function(response){
            return response.json();
        })
        .then( function(json){
            let IDR = json.Valute.IDR.Value / 10000;
            let val = document.querySelector('.val');
            let from = document.querySelector('.from');
            let result = document.querySelector('.result');

            if (from.value == 'IDR'){
                result.value =  (val.value * IDR).toFixed(5);
            }
            else{
                result.value =  (val.value * (1/IDR)).toFixed(5);
            }
        })
}