import axios from 'axios';

class Users {
  constructor() {
   this.token = '';
  }
  async login (email, password) {
   let response = await axios.post('/auth', {email, password})
   this.token = response.data.token;
   axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token; // Seteamos el token a las configuraciones
   localStorage.setItem('token', this.token); // Seteamos el token del lado del constructor
   return response.data.token;
  }

  //logout: borrar del local staorage el token.

  async getUsers () {
    let response = await axios.get('/users')
    return response.data;
  }
}
const userService = new Users();
export {userService}
