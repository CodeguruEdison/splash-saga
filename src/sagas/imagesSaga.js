import {
    take,
    takeLatest,
    call,
    put,
    takeEvery,
    select,
} from 'redux-saga/effects';
import { setError, setImages } from '../actions';
import { fetchImages } from '../api';
import { IMAGES } from '../constants';

//watcher saga
function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
const getPage = state => state.nextPage;
//workerSaga
function* handleImagesLoad() {
    // yield takeEvery(IMAGES.LOAD, handleImagesLoad);
    try {
        const page = yield select(getPage);
        console.log(page);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        //dispatch error
        yield put(setError(error.toString()));
    }
}
export default watchImagesLoad;
