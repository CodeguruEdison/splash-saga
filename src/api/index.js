import Unsplash, { toJson } from 'unsplash-js';

const KEY = '?client_id=JfgLFVGamFqlr-NmR4B9Y3dCc3CA6Ds-iHm9igzdZrE';
const URL = `http://api/unsplash.com/photos/`;
const unsplash = new Unsplash({
    accessKey: 'JfgLFVGamFqlr-NmR4B9Y3dCc3CA6Ds-iHm9igzdZrE',
});
export const fetchImages = async page => {
    //const response = await fetch(`${URL}${KEY}&per_page=3&page=${page}`);
    // const url = `${URL}${KEY}&page=${page}`;
    // const response = await fetch(url);
    // const data = await response.json();
    // if (response.status > 400) {
    //     throw new Error(data.errors);
    // }
    // return data;

    const response = await unsplash.photos.listPhotos(page, 3);
    const data = response.json();
    if (response.status > 400) {
        throw new Error(data.errors);
    }
    return data;
};
