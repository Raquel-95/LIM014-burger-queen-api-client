import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      bqApi: null
    }
  },
  async created() {
    let response = await axios.get('https://rociovalentin.herokuapp.com');
    this.bqApi= response.data;
  }
}