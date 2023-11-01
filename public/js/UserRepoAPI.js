import RepositoryAPI from "./RepositoryAPI.js";
class UserRepoApi extends RepositoryAPI{
    constructor(){
        super('user');
    }
    async signin(data){
        await this.post(data,'signing');
    }
}
export default UserRepoApi;