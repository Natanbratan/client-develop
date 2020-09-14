function task1(n) {
    let arr = []
    for (let j = 0; j <= n-1; j++) {
        arr[j] = j;
    }
    console.log(arr)
}

function task2(a, b, c) {
    if (a % b && a % c == 0) 
        console.log('число ' + a + ' нацело делится на ' + b + ' и на '  + c)
    else console.log ('Первое число не делится на второе и третье нацело')
}

function capitalizeIt(str) {
    if (str && typeof(str) === "string") {
        str = str.split(" ");    
        for (var i = 0, x = str.length; i < x; i++) {
            if (str[i]) {
                str[i] = str[i][0].toUpperCase() + str[i].substr(1);
            }
        }
        return str.join(" ");
    } else {
        return str;
    }
}
task1(6)
task2(6, 4, 5)
task2(14, 2, 7)
console.log(capitalizeIt("privet"))



/*Создать html-страницу с инпутом и кнопкой.
 По нажатию на кнопку выводить текст из инпута в блок div ниже на странице.*/
const m = document.getElementById("stroka")
const button = document.getElementById("knopka")
button.addEventListener("click",()=>{
    document.getElementById("blok").innerText = m.value
})
