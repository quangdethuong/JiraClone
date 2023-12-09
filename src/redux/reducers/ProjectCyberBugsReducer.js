const initialState = {
    projectList: [
        { id: '1', projectName: '123', description: '<p> 123 </p>' }
    ]
}

export const ProjectCyberBugsReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_ALL_PROJECT':
            {
                state.projectList = action.projectList

                return {...state }
            }

        default:
            return {...state }
    }
}