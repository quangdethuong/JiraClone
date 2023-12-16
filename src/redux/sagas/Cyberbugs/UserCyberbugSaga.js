import { call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects'
import { USER_SIGNIN_API } from '../../constants/Cyberbugs/Cyberbugs';
import { DISPLAY_LOADING, HIDE_LOADING } from '../../constants/LoadingConst';
import { cyberBugsService } from '../../../services/CyberBugsService';
import { STATUS_CODE, TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem';
import { history } from '../../../util/history';
import { userService } from '../../../services/UserService';


function* signinSaga(action) {
    console.log(action);
    yield put({
        type: DISPLAY_LOADING
    })

    yield delay(500)
    try {
        const { data, status } = yield call(() => cyberBugsService.signInApi(action.userLogin))

        localStorage.setItem(TOKEN, data.content.accessToken)
        localStorage.setItem(USER_LOGIN, JSON.stringify(data.content))
        history.push('/home')
    } catch (error) {
        console.log(error.response.data)
    }
    yield put({
        type: HIDE_LOADING
    })
}

export function* theoDoiSignIn() {
    yield takeLatest(USER_SIGNIN_API, signinSaga);
}


//delete
function* getUserSaga(action) {


    try {
        const { data, status } = yield call(() => userService.getUser(action.keyword));
        //Gọi api thành công thì dispatch lên reducer thông qua put
        console.log('data user search: ', data);
        yield put({
            type: 'GET_USER_SEARCH',
            lstUserSearch: data.content
        })
    } catch (err) {

        console.log(err.response.data);
    }

    yield put({
        type: HIDE_LOADING
    })
}


export function* theoDoiGetUser() {
    yield takeLatest('GET_USER_API', getUserSaga);
}


//Quản lý các action saga
function* addUserProjectSaga(action) {


    try {
        const { data, status } = yield call(() => userService.assignUserProject(action.userProject));


        yield put({
            type: 'GET_ALL_PROJECT_SAGA'
        })

    } catch (err) {
        console.log(err.response.data)
    }
}



export function* theoDoiAddUserProject() {
    yield takeLatest('ADD_USER_PROJECT_API', addUserProjectSaga);
}