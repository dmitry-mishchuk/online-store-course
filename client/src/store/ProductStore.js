import {makeAutoObservable} from 'mobx';

export default class ProductStore {
    constructor(){
      this._types = [
        {id: 1, title: "Phone"},
        {id: 2, title: "Bikini"}
      ]
      this._brends = [
        {id: 1, title: "Samsung"},
        {id: 2, title: "Bianca"}
      ]
      this._products = [
        {id: 1, title: "Iphone 12Pro", price: 2000, rating: 5, img: "https://hotline.ua/img/tx/287/2876273065.jpg"},
        {id: 2, title: "Iphone 12Pro", price: 2000, rating: 5, img: "https://hotline.ua/img/tx/287/2876273065.jpg"},
        {id: 3, title: "Iphone 12Pro", price: 2000, rating: 5, img: "https://hotline.ua/img/tx/287/2876273065.jpg"},
        {id: 4, title: "Iphone 12Pro", price: 2000, rating: 5, img: "https://hotline.ua/img/tx/287/2876273065.jpg"}
      ]
      makeAutoObservable(this)
    }

    setTypes(types){
      this._types = types
    }
    setBrends(brends){
      this._brends = brends
    }
    setProducts(products){
      this._products = products
    }
    getTypes(){
      return this._types
    }
    getBrends(){
      return this._brends
    }
    getProducts(){
      return this._products
    }
}
