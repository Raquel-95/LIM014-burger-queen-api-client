import axios from 'axios';

class Users {
  constructor() {
   this.token = '';
  }
  async login (email, password) {
   axios.defaults.headers.common['Authorization'] = ""
   let response = await axios.post('/auth', {email, password});
   this.token = response.data.token;
   axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token; // Seteamos el token a las configur
   localStorage.setItem('token', this.token); // Seteamos el token del lado del constructor
   return response.data.token;
  }

  async getUsers () {
    let response = await axios.get('/users')
    return response.data;
  }

  async createUser(){
    let response = await axios.post('/users')
    return response.data;
  }

  async updateUser(){
    let response = await axios.put('/users')
    return response.data;
  }

}
const userService = new Users();
export {userService}
