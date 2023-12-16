import { BaseService } from "./BaseService";

export class UserService extends BaseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }
    getUser = (keyword) => {
        return this.get(`Users/getUser?keyword=${keyword}`);
    }

    assignUserProject = (userProject) => {
        return this.post(`Project/assignUserProject`, userProject);
    }

}

export const userService = new UserService();