import axios from 'axios';

class ProductServices {
    constructor(token) {
      this.token = token;
    }

    async getProducts(){
        let response = await axios.get('/products?limit=100')
        return response.data
        }

    async createProduct(producto){
      let response = await axios.post('/products', producto)
      return response.data
    }
}

const productsServices = new ProductServices();
export {productsServices}