class RepositoryAPI {
  constructor(collection) {
    this.axios = axios.create({
      withCredentials: true,
    });
    
    this.urlBase = `http://localhost:5000/api/${collection}`;
  }
  async post(data,endpoint = 'create') {
    try {
      console.log(this.urlBase);
      const route = `${this.urlBase}/${endpoint}`
      const response= await this.axios.post(route,data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  async update(data,id){
    try {
      const route = `${this.urlBase}/${id}`
      const response= await this.axios.update(route,data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  async delete(id){
    try {
      const route = `${this.urlBase}/${id}`;
      const response = await this.axios.delete(route);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
  async get(endpoint = '',id = ''){
    try {
      const route = `${this.urlBase}/${endpoint || id}`
      const response = await this.axios.get(route);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
}
export default RepositoryAPI;
