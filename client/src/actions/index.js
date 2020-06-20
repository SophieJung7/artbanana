import axios from 'axios';
import history from '../history';
import {
  FETCH_USER,
  SIGN_OUT,
  CHANGE_PASSWORD,
  AUTH_ERROR_CODE,
  CREATE_ARTIST,
  FETCH_ARTISTS,
  FETCH_ARTIST,
} from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/current_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

// Code for catching error message.
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error.response;
  }
);

export const signInWithUs = (values) => async (dispatch) => {
  const res = await axios.post('/auth/signin', values);
  if (res.status !== 200) {
    dispatch({
      type: AUTH_ERROR_CODE,
      payload: res.status,
    });
    history.push('/signin');
  } else {
    dispatch({
      type: FETCH_USER,
      payload: res.data,
    });
    history.push('/');
  }
};

// To destroy authErrorCode
export const removeAuthError = () => {
  return {
    type: AUTH_ERROR_CODE,
    payload: null,
  };
};

/// SIGN UP ///
export const signUp = (values) => async (dispatch) => {
  const res = await axios.post('/auth/signup', values);
  if (res.status === 401 || res.status === 409) {
    dispatch({
      type: AUTH_ERROR_CODE,
      payload: res.status,
    });
    history.push('/signup');
  } else {
    dispatch({
      type: FETCH_USER,
      payload: res.data,
    });
    history.push('/');
  }
};

export const signOut = () => async (dispatch) => {
  const res = await axios.get('/api/signout');
  dispatch({
    type: SIGN_OUT,
    payload: res.data,
  });
};

export const changePW = (newPassword) => async (dispatch) => {
  const res = await axios.post('/api/change-password', {
    newPassword: newPassword,
  });
  dispatch({
    type: CHANGE_PASSWORD,
    payload: res.data,
  });
  if (res) {
    history.push('/change-password/success');
  } else {
    history.push('/error');
  }
};

// ********* Artist Actions ********* //

export const createArtist = (
  values,
  profilePhoto,
  productPhotos,
  portfolioPhotos
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
  for (var i = 0; i < productNumberOfFiles; i++) {
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
  });

  //Call Redux
  dispatch({
    type: CREATE_ARTIST,
    // payload: res.data,
  });

  //Go back to homepage
  history.push('/');
};

export const fetchArtists = () => async (dispatch) => {
  const response = await axios.get('/api/artists');
  dispatch({
    type: FETCH_ARTISTS,
    payload: response.data,
  });
};

export const fetchArtist = (id) => async (dispatch) => {
  const response = await axios.get(`/api/artists/${id}`);
  dispatch({
    type: FETCH_ARTIST,
    payload: response.data,
  });
};

// export const fetchPhotographers = () => async (dispatch) => {
//   const response = await axios.get('/api/photographers');
//   dispatch({
//     type: FETCH_PHOTOGRAPHERS,
//     payload: response.data,
//   });
// };

// export const fetchPhotographer = (id) => async (dispatch) => {
//   const response = await axios.get(`/api/photographers/${id}`);
//   dispatch({
//     type: FETCH_PHOTOGRAPHER,
//     payload: response.data,
//   });
// };
