//const { take } = require('redux-saga/effects');
import { fork, take, all, call, put, retry } from 'redux-saga/effects';
import { fetchImageStats } from '../api';
import { IMAGES } from '../constants';
import { loadImageStats, setImageStatError, setImageStats } from '../actions';

function* handleStatsRequest(id) {
    console.log('fetching stats for id' + id);

    //const res = yield call(fetchImageStats, id);
    for (let i = 0; i < 3; i++) {
        try {
            yield put(loadImageStats(id));
            const res = yield call(fetchImageStats, id);
            yield put(setImageStats(id, res.downloads.total));
            return true;
        } catch (e) {}
    }

    yield put(setImageStatError(id));
}
function* watchStatsRequest() {
    //yield takeEvery(IMAGES.LOAD, handleImagesLoad);
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);
        // images.forEach(image =>{
        //      yield all(fork(handleStatsRequest,image.id));
        // })
        yield all(images.map(image => fork(handleStatsRequest, image.id)));
        // for (let i = 0; i < images.length; i++) {
        //     if (images[i].id != undefined) {
        //         yield fork(handleStatsRequest, images[i].id);
        //     }
        // }
    }
}
export default watchStatsRequest;
