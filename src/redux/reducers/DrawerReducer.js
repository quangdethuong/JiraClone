import React from "react"
const initialState = {
    visible: false,
    ComponentContentDrawer: <p>default ComponentContentDrawer</p>,

}

export default (state = initialState, action) => {
    switch (action.type) {

        case 'OPEN_DRAWER':
            return { ...state, visible: true }
        case 'CLOSE_DRAWER':
            return { ...state, visible: false }
        case 'OPEN_FORM_EDIT':

            return { ...state, ComponentContentDrawer: action.Component, visible: true }
        default:
            return { ...state }
    }

}