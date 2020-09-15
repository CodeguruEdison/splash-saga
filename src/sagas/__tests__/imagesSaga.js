import { getPage, handleImagesLoad } from '../imagesSaga';
import { runSaga } from 'redux-saga';
import { select } from 'redux-saga/effects';

test('selector gives back the page', () => {
    const nextPage = 1;
    const state = { nextPage };
    const res = getPage(state);
    expect(res).toBe(nextPage);
});

test('should load images and hanle them in case of success', async () => {
    // dispatch action;
    const dispatchedActions = [];
    const fakeStore = {
        getState: () => ({ nextPage: 1 }),
        dispatch: action => dispatchedActions.push(action),
    };
    // await runSaga(fakeStore, handleImagesLoad).done;
    //console.log(dispatchedActions);
    const gen = handleImagesLoad();
    expect(gen.next().value).toEqual(select(getPage));
});
