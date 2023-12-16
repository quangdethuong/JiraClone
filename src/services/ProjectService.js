import { BaseService } from "./BaseService";

export class ProjectService extends BaseService {
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super()
    }
    deleteProject = (id) => {
        return this.delete(`Project/deleteProject?projectId=${id}`);
    }
}

export const projectService = new ProjectService();