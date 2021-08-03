import {makeAutoObservable} from 'mobx';

export default class ProductStore {
    constructor(){
      this._types = [
        {id: 1, title: "Phone"},
        {id: 2, title: "Bikini"},
        {id: 3, title: "TV Box"},
        {id: 4, title: "Coffe"}
      ]
      this._brends = [
        {id: 1, title: "Samsung"},
        {id: 2, title: "Bianca"},
        {id: 3, title: "Armani"},
        {id: 4, title: "Apple"}
      ]
      this._products = [
        {id: 1, title: "Iphone 12Pro", price: 2000, rating: 5, img: "https://hotline.ua/img/tx/287/2876273065.jpg"},
        {id: 2, title: "Iphone 12Pro", price: 2000, rating: 5, img: "https://hotline.ua/img/tx/287/2876273065.jpg"},
        {id: 3, title: "Iphone 12Pro", price: 2000, rating: 5, img: "https://hotline.ua/img/tx/287/2876273065.jpg"},
        {id: 4, title: "Iphone 12Pro", price: 2000, rating: 5, img: "https://hotline.ua/img/tx/287/2876273065.jpg"}
      ]
      this._selectedType = {}
      this._selectedBrend = {}
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
    setSelectedType(type) {
      this._selectedType = type
    }
    setSelectedBrend(brend) {
      this._selectedBrend = brend
    }
    get types(){
      return this._types
    }
    get brends(){
      return this._brends
    }
    get products(){
      return this._products
    }
    get selectedType(){
      return this._selectedType
    }
    get selectedBrend(){
      return this._selectedBrend
    }
}
