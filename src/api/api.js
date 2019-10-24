import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/',
  });

export const authAPI = {
    getAuth(login, pass){
        return instance.post('auth', {login, pass});
    },
    createAccount(login, pass, email){
        return instance.post('registery', {login, pass, email})
    },
    changeData(userId, newData) {
        return instance.put(`/users/${userId}`, {...newData})
    },
    deleteAccount(userId) {
        return instance.delete(`users/${userId}`)
    }
}

export const productsAPI = {
    getProducts(){
        return instance.get('/products')
    },
    getProductsByСriteria(category, query, page=0, count=5){
        return category 
                ? instance.get(`/catalog/${category}?page=${page}&count=${count}`)
                : instance.get(`/search?q=${query}&page=${page}&count=${count}`)
    },
    getSingleProduct(productId){
        return instance.get(`/products/${productId}`)
    },
    getHits(){
        return instance.get(`/hit`)
    }
}

export const searchAPI = {
    searchProducts(query, page=0, count=5) {
        return instance.get(`/search?q=${query}&page=${page}&count=${count}`)
    }
}

export const cartAPI = {
    addProduct(userId, product){
        return axios.post(`/cart/${userId}`, {...product})
    },
    changeProductCounter(userId, _id, value){
        return axios.put(`/cart/${userId}`, {_id, value})
    },
    deleteProduct(userId, _id){
        return instance.put(`/cart/${userId}/delete`, {_id})
    }
}