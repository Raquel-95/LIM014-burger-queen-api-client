import axios from 'axios';

class Users {
  constructor() {
   this.token = '';
  //  if (this.token === "") {
  //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  //  }
  }
  async login (email, password) {
   let response = await axios.post('/auth', {email, password})
   this.token = response.data.token;
   axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token;
   localStorage.setItem('token', this.token);
   return response.data.token;
  }

  //loguot

  async getUsers () {
    
    console.log("actual token " + this.token);
    //axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
    let response = await axios.get('/users')
    // this.token = resp_users.data.token;
    //axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
    console.log(response.data)
    return response.data;
  }
}
const userService = new Users();
export {userService}





// export default {
//   name: 'Admin',

//   async created() {
//     let response = await axios.get('https://rociovalentin.herokuapp.com');
//     this.bqApi= response.data;
//   },

  
//   // async login() {
//   //   let payload = {
//   //     email: this.usuario,
//   //     password: this.password
//   //   };
//   //   this.loading = true;
//   //   await this.axios.post('/home', payload)
//   //   .then(response => {
//   //     this.axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data; // definir la cabecera authorization con un valor por defecto con 'Bearer ' + token
//   //     this.$router.push('/admin');
//   //   })
//   //   .catch(error =>{
//   //     let data = error.response.data;
//   //     M.toast({html: data.messenge});
//   //   });

//   //   this.loading = false;
//   }
