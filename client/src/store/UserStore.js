import {makeAutoObservable} from 'mobx';

export default class UserStore {
    constructor(){
      this._isAuth = false
      this._user = {}
      makeAutoObservable(this)
    }

    setIsAuth(isAuth){
      this._isAuth = isAuth
    }
    setUser(user){
      this._user = user
    }
    getUser(){
      return this._user
    }
    getIsAuth(){
      return this._isAuth
    }
}
