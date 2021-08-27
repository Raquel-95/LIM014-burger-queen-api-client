import axios from 'axios';

class ProductServices {
    constructor(token) {
      this.token = token;
    }

    async getProducts(){
        let response = await axios.get('/products')
        return response.data
        }

    async createProduct(name, price, type){
      let response = await axios.post('/products', {name, price, type})
      return response.data
    }
}

const productsServices = new ProductServices();
export {productsServices}