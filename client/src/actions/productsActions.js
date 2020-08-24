import axios from 'axios';
// import history from '../history';
import {
  CREATE_PRODUCT,
  FETCH_PRODUCT,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  FETCH_ONE_ARTIST_PRODUCTS,
} from './types';

const createProduct = (id, productInfo) => async (dispatch) => {
  const productImgs = productInfo.productImgs;

  // Remove empty objects from productImgs
  const pureProductImgs = productImgs.filter(
    (value) => typeof value.name === 'string'
  );

  //For product photos: Get presignedURL from S3
  const productKeysAndUrls = await axios.get(
    `/api/artist/products/upload?numberOfFiles=${pureProductImgs.length}`
  );

  //For product photos: Upload photos to S3
  const productNumberOfFiles = parseInt(pureProductImgs.length);

  for (let i = 0; i < productNumberOfFiles; i++) {
    await axios.put(productKeysAndUrls.data[i].url, pureProductImgs[i], {
      headers: {
        'Content-Type': pureProductImgs[i].type,
      },
    });
  }

  const response = await axios.post(`/api/products/${id}`, {
    ...productInfo,
    productImgs: [...productKeysAndUrls.data],
  });
  dispatch({
    type: CREATE_PRODUCT,
    payload: response.data,
  });

  //Go Back to AddProduct Page
  alert('제품을 등록했습니다.');
};

const fetchProduct = (id) => async (dispatch) => {
  const response = await axios.get(`/api/products${id}`);
  dispatch({
    type: FETCH_PRODUCT,
    payload: response.data,
  });
};

const editProduct = (id, editedProduct) => async (dispatch) => {
  const response = await axios.put(`/api/edit-product/${id}`, {
    ...editedProduct,
  });
  dispatch({
    type: EDIT_PRODUCT,
    payload: response.data,
  });
};

const deleteProduct = (id) => async (dispatch) => {
  await axios.delete(`/api/delete-product/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
  });
};

const fetchOneArtistProducts = (id) => async (dispatch) => {
  const response = await axios.get('/');
  dispatch({
    type: FETCH_ONE_ARTIST_PRODUCTS,
    payload: response.data,
  });
};

export {
  createProduct,
  fetchProduct,
  editProduct,
  deleteProduct,
  fetchOneArtistProducts,
};
