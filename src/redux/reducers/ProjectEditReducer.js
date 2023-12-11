const initialState = {
    projectEdit: {
        "id": 0,
        "projectName": "string",
        "creator": 0,
        "description": "string",
        "categoryId": "1"
    }
}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'OPEN_EDIT_PROJECT':
            {
                return {...state, projectEdit: action.projectEditModel }
            }

        default:
            return {...state }
    }
}