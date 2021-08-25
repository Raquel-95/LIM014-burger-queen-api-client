import axios from 'axios';
import {userService} from '../services/UsersService'

class ProductServices {
    constructor(token) {
      this.token = token;
    }

    async getProducts(){
        console.log("product servics " + userService.token);
        let response = await axios.get('/products')
        return response.data
        // console.log(response);
        }
}

const productsServices = new ProductServices();
export {productsServices}