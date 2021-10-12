"use strict";

const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/'

function send(onError, onSuccess, url, method = 'GET', data = null, headers = [], timeout = 60000) {
  let xhr;

  if (window.XMLHttpRequest) {
    // Chrome, Mozilla, Opera, Safari
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    // Internet Explorer
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  xhr.open(method, url, true);


  headers.forEach((header) => {
    xhr.setRequestHeader(header.key, header.value);
  })


  xhr.timeout = timeout;

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 400) {
        onError(xhr.statusText)
      } else {
        onSuccess(xhr.responseText)
      }
    }
  }

  xhr.send(data);
}


class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

  render() {
    return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p></div>`;
  }
}

class GoodsList {
  constructor() {
    this.goods = [];
  }

  fetchGoods() {
    //через метод fetch (возвращает промис):
    // fetch(`${API_URL}catalogData.json`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((request) => {
    //     this.goods = request.map(good => ({title: good.product_name, price: good.price}))
    //     this.render();
    //   })
    //   .catch((err) => { 
    //     console.log(err.text)
    //   })

    //метод fetchGoods() реализуем  через Promis:
    new Promise((resolve, reject) => {
      send(
        reject,
        resolve,
        `${API_URL}catalogData.json`
      )
    })
      .then((request) => {
        this.goods = JSON.parse(request).map(good => ({ title: good.product_name, price: good.price }))
        this.render();
      })
      .catch((err) => {
        console.log(err.text)
      })

    send(
      (err) => {
        console.log(err.text)
      },
      (request) => {
        this.goods = JSON.parse(request).map(good => ({ title: good.product_name, price: good.price }))
        this.render();
      },
      `${API_URL}catalogData.json`
    )

  }

  render() {
    let listHtml = '';
    this.goods.forEach(good => {
      const goodItem = new GoodsItem(good.title, good.price);
      listHtml += goodItem.render();
    });
    document.querySelector('.goods-list').insertAdjacentHTML('beforeend', listHtml);
  }


}

class ChartItem extends GoodsItem {
  constructor(title, price) {
    super(title, price);
  }

  render() {
    return true;
  }

}


class ChartList extends GoodsList {
  constructor() {
    super();

  }

  addGoodItemToChart(goodItem) {
    return true;
  }

  removeGoodItemFromChart(goodItem) {
    return true;

  }

  changeGoodItemQuantity() {
    return true;

  }

  getTotalGoodsCosts() {
    // let totalGoodsCosts = 0;
    // for (let item of this.goods) {
    //   totalGoodsCosts += item.price;
    // }
    // return totalGoodsCosts;
    return true;
  }

}

const list = new GoodsList();
list.fetchGoods();