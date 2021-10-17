"use strict";

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'; // add
//reg.test(good.product_name)


var app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: ''
    },
    isVisibleCart: false,

    methods: {
        FilterGoods() {
            if (this.searchLine == '') {
                this.filteredGoods = this.goods;
                return;
            }
            const reg = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter((good) => reg.test(good.product_name));
            return this.filteredGoods;

        },

        loadGoods() {
            fetch(`${API_URL}catalogData.json`)
                .then((request) => request.json())
                .then((data) => {
                    this.goods = data;
                    this.filteredGoods = data;
                })
                .then(() => {
                    this.FilterGoods();

                })
        },


        cartOnClick() {
            this.isVisibleCart = !this.isVisibleCart;

        }
    },
    mounted() {
        this.loadGoods();
    },

    FilterGoods() {
        return;
        //     if (!this.searchLine == '') {
        //         for (let i = 0; i < this.goods.lenght; i++) {
        //             if (this.goods[i].product_name.match(this.searchLine)) {
        //                 this.filteredGoods.push(this.goods[i]);
        //             }
        //         }
        //     }
    },

})

// let a = ['fhgjk', 'ertygo', 'cvbgnm'];
// let b = a.filter((el) => /g/gi.test(el));
// console.log(b);