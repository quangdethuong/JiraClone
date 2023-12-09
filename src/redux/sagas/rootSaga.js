import { all } from "redux-saga/effects";
import Todolist from "../../pages/Todolist/Todolist";
import TodolistRFC from "../../pages/Todolist/TodolistRFC";
import * as ToDoListSaga from './ToDoListSaga'
import * as Cyberbugs from './Cyberbugs/UserCyberbugSaga'
import * as ProjectCategory from './Cyberbugs/ProjectCategorySaga'
import * as ProjectCyberBugs from './Cyberbugs/ProjectCyberBugs'



// import {theoDoiActionGetTaskApi} from './ToDoListSaga'


export function* rootSaga() {

    yield all([
        //Nghiệp vụ theo dõi các action saga todolist
        ToDoListSaga.theoDoiActionGetTaskApi(),
        ToDoListSaga.theoDoiActionAddTaskApi(),
        ToDoListSaga.theoDoiActionDeleteTask(),
        ToDoListSaga.theoDoiDoneTask(),
        ToDoListSaga.theoDoiRejectTask(),
        //Nghiệp vu CyberBugs
        Cyberbugs.theoDoiSignIn(),
        ProjectCategory.theoDoiGetAllProjectCategory(),
        ProjectCyberBugs.theoDoiCreateProject(),
        ProjectCyberBugs.theoDoiGetAllProject()
    ])


}