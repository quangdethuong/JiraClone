import { call, delay, put, takeLatest } from "redux-saga/effects";
import { cyberBugsService } from "../../../services/CyberBugsService";
import { STATUS_CODE } from "../../../util/constants/settingSystem";

import { DISPLAY_LOADING, HIDE_LOADING } from "../../constants/LoadingConst";

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
    yield put({
        type: DISPLAY_LOADING
    })
    yield delay(500);
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
    yield put({
        type: HIDE_LOADING
    })

}

export function* theoDoiGetAllProject() {
    yield takeLatest('GET_ALL_PROJECT_SAGA', getAllProjectSaga)
}