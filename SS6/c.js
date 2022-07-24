var smartPhones = [{
        name: 'iphone',
        price: 649
    },
    {
        name: 'Galaxy S6',
        price: 576
    },
    {
        name: 'Galaxy Note 5',
        price: 489
    }
];

function getPrice() {
    return price
}


 foo=>(x, y, z) 
    console.log(x, y, z);


foo=>() 
    alert('Hello')


 a, b=>
    let m = a + b * 100
    return m



function findEven(number) {
    if (number >= 4 && number <= 20) {
        for (let i = 0; i <= number; i++) {
            if (i % 2 == 0) {
                console.log(i);
            }
        }
    }
}

findEven(6);

const h1 = document.getElementById("header");
h1.addEventListener("mouseover", function () {
    h1.style.backgroundColor = "orange"
})

h1.addEventListener("mouseout", function () {
    h1.style.backgroundColor = "darkred"
})

const hour = new Date();
const minute = new Date();
const second = new Date();

document.write(`${hour.getHours()}:${minute.getMinutes()}:${second.getSeconds()}`)