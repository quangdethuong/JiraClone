import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberBugsService } from "../../../services/CyberBugsService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";

import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";
import { history } from "../../../util/history";
import { notifiFunction } from "../../../util/Notification/NotificationCyberbus";
import { projectService } from "../../../services/ProjectService";
import { userService } from "../../../services/UserService";

function* createProjectSaga(action) {
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);
    try {
        const { data, status } = yield call(() => cyberBugsService.createProjectAuthorization(action.newProject));

        if (status === STATUS_CODE.SUCCESS) {
            // yield put({
            //     type: 'CREATE_PROJECT',
            //     data: data.content
            // })
            console.log('create project: ', data);
            history.push('/project')
        }

    } catch (error) {
        console.log(error.response.data);
    }
    yield put({
        type: HIDE_LOADING
    })

}

export function* theoDoiCreateProject() {
    yield takeLatest('CREATE_PROJECT_SAGA', createProjectSaga)
}



function* getAllProjectSaga() {

    try {
        const { data, status } = yield call(() => cyberBugsService.getAllProject());

        if (status === STATUS_CODE.SUCCESS) {
            yield put({
                type: 'GET_ALL_PROJECT',
                projectList: data.content
            })

        }

    } catch (error) {
        console.log(error.response.data);
    }


}

export function* theoDoiGetAllProject() {
    yield takeLatest('GET_ALL_PROJECT_SAGA', getAllProjectSaga)
}


function* updateProjectSaga(action) {

    yield put({
        type: DISPLAY_LOADING
    })

    yield delay(500);
    try {
        const { data, status } = yield call(() => cyberBugsService.updateProject(action.projectUpdate));

        if (status === STATUS_CODE.SUCCESS) {

            console.log('update project: ', data);

        }
        yield put({
            type: 'GET_ALL_PROJECT_SAGA'
        })

        yield put({
            type: 'CLOSE_DRAWER'
        })

    } catch (error) {
        alert('update thất bại')
        console.log(error.response.data);
    }
    yield put({
        type: HIDE_LOADING
    })

}

export function* theoDoiUpdateProject() {
    yield takeLatest('UPDATE_PROJECT_SAGA', updateProjectSaga)
}



//delete
function* deleteProjectSaga(action) {
    // console.log('action123',action);
    // return;
    //HIỂN THỊ LOADING
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);

    try {
        const { data, status } = yield call(() => projectService.deleteProject(action.idProject));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        if (status === STATUS_CODE.SUCCESS) {
            console.log(data)

            notifiFunction('success', 'Delete project successfully !')

            // history.push('/projectmanagement');
        } else {
            notifiFunction('error', 'Delete project fail !')
        }
        // yield put({
        //     type:'GET_LIST_PROJECT_SAGA'
        // })
        yield call(getAllProjectSaga);
        yield put({
            type: 'CLOSE_DRAWER'
        })
    } catch (err) {
        notifiFunction('error', 'Delete project fail !')
        console.log(err);
    }

    yield put({
        type: HIDE_LOADING
    })
}


export function* theoDoiDeleteProject() {
    yield takeLatest('DELETE_PROJECT_SAGA', deleteProjectSaga);
}