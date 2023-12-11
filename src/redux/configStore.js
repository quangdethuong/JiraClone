import { applyMiddleware, combineReducers, createStore } from 'redux';
import ToDoListReducer from './reducers/ToDoListReducer'
import LoadingReducer from './reducers/LoadingReducer';
import { UserLoginCyberBugsReducer } from './reducers/UserLoginCyberBugsReducer';
import { ProjectCategoryReducer } from './reducers/ProjectCategoryReducer';


import { ModalReducer } from './reducers/ModalReducer'
import reduxThunk from 'redux-thunk'


//middleware saga
import createMiddleWareSaga from 'redux-saga';
import { rootSaga } from './sagas/rootSaga';
import { ProjectCyberBugsReducer } from './reducers/ProjectCyberBugsReducer';
import DrawerReducer from './reducers/DrawerReducer';
import ProjectEditReducer from './reducers/ProjectEditReducer';
const middleWareSaga = createMiddleWareSaga();


const rootReducer = combineReducers({
    //reducer khai báo tại đây
    ToDoListReducer,
    LoadingReducer,
    ModalReducer,
    UserLoginCyberBugsReducer,
    ProjectCategoryReducer,
    ProjectCyberBugsReducer,
    DrawerReducer,
    ProjectEditReducer,
})

const store = createStore(rootReducer, applyMiddleware(reduxThunk, middleWareSaga));

//Gọi saga
middleWareSaga.run(rootSaga);


export default store;