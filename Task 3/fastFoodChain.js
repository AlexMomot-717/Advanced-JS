"use strict";
class Hamburger {
    constructor(size, stuffing) {
        this.price = 0;
        this.calories = 0;
        this.size = size;
        this.stuffing = stuffing;
        this.hamburgerFormula = {
            size: '',
            stuffing: '',
            spices: false,
            sause: false,
        };
        this.hamburgerFormula.size = size;
        this.hamburgerFormula.stuffing = stuffing;

    }


    addTopping(topping) {    // Добавить добавку 
        if (topping == 'spices') {
            this.hamburgerFormula.spices = true;
        }
        if (topping == 'sause') {
            this.hamburgerFormula.sause = true;
        }
    }

    removeTopping(topping) { // Убрать добавку 
        if (topping == 'spices') {
            this.hamburgerFormula.spices = false;
        }
        if (topping == 'sause') {
            this.hamburgerFormula.sause = false;
        }
    }

    getToppings() {   // Получить список добавок
        let toppingList = [];
        if (this.hamburgerFormula.spices == true) {
            toppingList.push('spices');
        }
        if (this.hamburgerFormula.sause == true) {
            toppingList.push('sause');
        }
        return `Chosen optional ingredients: ${toppingList.join(", ")}`;
    }

    getSize() {              // Узнать размер гамбургера 
        return `Chosen ${this.hamburgerFormula.size} hamburger`;
    }

    getStuffing() {          // Узнать начинку гамбургера 
        return `Chosen stuffing: ${this.hamburgerFormula.stuffing}`;
    }

    calculatePrice() {       // Узнать цену 
        const costsObj = {
            big: 100,
            small: 50,
            cheese: 10,
            salad: 20,
            potatoes: 15,
            spices: 15,
            sause: 20,
        };

        this.price += (costsObj[`${this.hamburgerFormula.size}`] + costsObj[`${this.hamburgerFormula.stuffing}`]);
        if (this.hamburgerFormula.spices == true) {
            this.price += costsObj.spices;
        }
        if (this.hamburgerFormula.sause == true) {
            this.price += costsObj.sause;
        }
        return `hamburger price: ${this.price}`;
    }

    calculateCalories() {    // Узнать калорийность 
        const caloriesObj = {
            big: 40,
            small: 20,
            cheese: 20,
            salad: 5,
            potatoes: 10,
            spices: 0,
            sause: 5,
        };

        this.calories += (caloriesObj[`${this.hamburgerFormula.size}`] + caloriesObj[`${this.hamburgerFormula.stuffing}`]);
        if (this.hamburgerFormula.spices == true) {
            this.calories += caloriesObj.spices;
        }
        if (this.hamburgerFormula.sause == true) {
            this.calories += caloriesObj.sause;
        }
        return `hamburger total calories: ${this.calories}`;
    }
}

let myHamburger = new Hamburger('big', 'potatoes');
console.log(myHamburger.getSize());
console.log(myHamburger.getStuffing());
myHamburger.addTopping('sause');
myHamburger.addTopping('spices');
console.log(myHamburger.getToppings());
myHamburger.removeTopping('spices');
console.log(myHamburger.getToppings());
console.log(myHamburger.calculatePrice());
console.log(myHamburger.calculateCalories());
