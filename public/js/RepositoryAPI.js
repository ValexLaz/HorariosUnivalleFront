class RepositoryAPI {
  constructor(collection) {
    this.axios = axios;
    this.urlBase = "";
    this.collection = "";
    this.#generateUrlBase(collection);
  }
  #generateUrlBase(collection) {
    this.urlBase = `http://localhost:5000/api/${collection}`;
  }

  setCollection(collection) {
    this.collection = collection
    this.#generateUrlBase(collection);
  }
  async post(data, endpoint = "create") {
    const route = `${this.urlBase}/${endpoint}`;
    console.log(route);
    const response = await this.axios.post(route, data);
    return response.data;
  }
  async updateByID(data, id) {
    const route = `${this.urlBase}/${id}`;
    const response = await this.axios.put(route, data);
    return response.data;
  }
  async deleteByID(id) {
    const route = `${this.urlBase}/${id}`;
    const response = await this.axios.delete(route);
    return response.data;
  }
  async getAll() {
    const route = `${this.urlBase}/all`;
    const response = await this.axios.get(route);
    return response.data;
  }
  async getByID(id) {
    const route = `${this.urlBase}/${id}`;
    const response = await this.axios.get(route);
    return response.data;
  }
  async get(endpoint, id) {
    const route = `${this.urlBase}/${endpoint}/${id}`;
    const response = await this.axios.get(route);
    return response.data;
  }
}

export default RepositoryAPI;
