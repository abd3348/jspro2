let Burger = {
    name: "Burger",
    price: 3.55,
    available: true,
    category: 'S'
};

let Pizza = {
    name: "Pizza",
    price: 3.55,
    available: false,
    category: 'M'
};

let Shawarma = {
    name: "Shawarma",
    price: 3.55,
    available: true,
    category: 'M'
};

let Zinger = {
    name: "Zinger",
    price: 3.55,
    available: true,
    category: 'S'
};

let Pasta = {
    name: "Pasta",
    price: 3.55,
    available: true,
    category: 'M'
};

let menu = [Burger, Pizza, Shawarma, Zinger, Pasta];

function showMenu() {

    for (let i = 0; i < menu.length; i++) {
        document.write(i + 1 + ". " + menu[i].name + "<br>");
    }

}

showMenu();

let isfound = false;
let foodname = "";

while (!isfound) {

    foodname = prompt("Enter a food name:");

    for (let i = 0; i < menu.length; i++) {

        if (menu[i].available === false) {
            continue;
        }

        if (foodname == menu[i].name) {

            isfound = true;

            document.write(
                "<br>Selected Food: " + menu[i].name +
                "<br>Price: $" + menu[i].price +
                "<br>Category: " + menu[i].category
            );

            let cuantity = prompt("Enter number of them");
            document.write("<br>total price: "+cuantity * menu[i].price);
            break;
        }
    }

    if (!isfound) {
        alert("Food not found or unavailable. Try again.");
    }
}