import { call, delay, fork, take, takeEvery, takeLatest, put } from 'redux-saga/effects'
import { USER_SIGNIN_API } from '../../constants/Cyberbugs/Cyberbugs';
import { DISPLAY_LOADING, HIDE_LOADING } from '../../constants/LoadingConst';
import { cyberBugsService } from '../../../services/CyberBugsService';
import { TOKEN, USER_LOGIN } from '../../../util/constants/settingSystem';
import { history } from '../../../util/history';


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