import { all, fork } from 'redux-saga/effects';
import imageSaga from './imagesSaga';
import statSaga from './statSaga';

function* rootSaga() {
    // yield [imageSaga(), statSaga()];
    yield all([fork(imageSaga), fork(statSaga)]);
}
export default rootSaga;
