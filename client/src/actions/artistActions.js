import axios from 'axios';
import history from '../history';
import {
  CREATE_ARTIST,
  FETCH_PENCIL_ARTISTS,
  FETCH_EDITION_ARTISTS,
  FETCH_ARTIST,
  EDIT_ARTIST,
  SUBMIT_REVIEW,
} from './types';

// ********* Artist Actions ********* //

// const fetchArtists = () => async (dispatch) => {
//     const response = await axios.get('/api/artists');
//     dispatch({
//       type: FETCH_ARTISTS,
//       payload: response.data,
//     });
// };

//   Fetch Artists by category

const fetchPencilArtists = () => async (dispatch) => {
  const response = await axios.get('/api/category/pencil');
  dispatch({
    type: FETCH_PENCIL_ARTISTS,
    payload: response.data,
  });
};

const fetchEditionArtists = () => async (dispatch) => {
  const response = await axios.get('/api/category/edition');
  dispatch({
    type: FETCH_EDITION_ARTISTS,
    payload: response.data,
  });
};

const fetchArtist = (id) => async (dispatch) => {
  const response = await axios.get(`/api/artists/${id}`);
  dispatch({
    type: FETCH_ARTIST,
    payload: response.data,
  });
};

const createArtist = (
  values,
  profilePhoto,
  productPhotos,
  portfolioPhotos,
  productInfo
) => async (dispatch) => {
  //For profile photo: Get presignedURL from S3
  const profileKeysAndUrls = await axios.get('/api/artist/profile/upload');
  //For profile photo: Upload photos to S3
  await axios.put(profileKeysAndUrls.data.url, profilePhoto, {
    headers: {
      'Content-Type': profilePhoto.type,
    },
  });

  //For portfolio photos: Get presignedURL from S3
  const portfolioKeysAndUrls = await axios.get(
    `/api/artist/portfolio/upload?numberOfFiles=${portfolioPhotos.length}`
  );
  //For portfolio photos: Upload photos to S3
  const portfolioNumberOfFiles = parseInt(portfolioPhotos.length);
  for (var i = 0; i < portfolioNumberOfFiles; i++) {
    await axios.put(portfolioKeysAndUrls.data[i].url, portfolioPhotos[i], {
      headers: {
        'Content-Type': portfolioPhotos[i].type,
      },
    });
  }

  //For product photos: Get presignedURL from S3
  const productKeysAndUrls = await axios.get(
    `/api/artist/products/upload?numberOfFiles=${productPhotos.length}`
  );

  //For product photos: Upload photos to S3
  const productNumberOfFiles = parseInt(productPhotos.length);
  for (i = 0; i < productNumberOfFiles; i++) {
    await axios.put(productKeysAndUrls.data[i].url, productPhotos[i], {
      headers: {
        'Content-Type': productPhotos[i].type,
      },
    });
  }

  //Save artist data to MongoDB
  const res = await axios.post('/api/artists', {
    ...values,
    profileImg: profileKeysAndUrls.data.key,
    productImgs: [...productKeysAndUrls.data],
    portfolioImgs: [...portfolioKeysAndUrls.data],
    products: [{ ...productInfo, ...productKeysAndUrls.data[0] }],
  });

  //Call Redux
  dispatch({
    type: CREATE_ARTIST,
    payload: res.data,
  });

  //Go back to homepage
  history.push('/');
};

const editArtist = (
  id,
  editedValues,
  profilePhoto,
  productPhotos,
  portfolioPhotos
) => async (dispatch) => {
  const res = await axios.put(`/api/artists/${id}`, editedValues);
  dispatch({
    type: EDIT_ARTIST,
    payload: res.data,
  });
};

// Delete Artist

// Submit a review
const submitReview = (id, reviewObject) => async (dispatch) => {
  const res = await axios.put(`/api/reviews/${id}`, reviewObject);
  dispatch({
    type: SUBMIT_REVIEW,
    payload: res.data,
  });
  //Go back to previous page.
  history.push(`/artists/show/${id}`);
};

export {
  createArtist,
  fetchArtist,
  editArtist,
  fetchPencilArtists,
  fetchEditionArtists,
  submitReview,
};
