import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import history from '../history';
import {
  CREATE_PRODUCT,
  FETCH_PRODUCT,
  FETCH_PENCIL_PRODUCTS,
  FETCH_ILLUSTRATION_PRODUCTS,
  FETCH_PHOTOSHOP_PRODUCTS,
  EDIT_PRODUCT,
  DELETE_PRODUCT,
  FETCH_ONE_ARTIST_PRODUCTS,
} from './types';

const editProduct = (productId, artistId, editedInfo) => async (dispatch) => {
  try {
    let productImgs = editedInfo.productImgs;
    //   Upload Product Imgs
    const uploadedProductImgs = await Promise.all(
      productImgs.map(async (img) => {
        if (typeof img.name === 'string') {
          let productKeyAndUrl = await axios.get(
            `/api/photos/add-product-photo/${productId}`
          );
          await axios.put(productKeyAndUrl.data.url, img, {
            headers: {
              'Content-Type': img.type,
            },
          });
          return productKeyAndUrl.data;
        }
        return img;
      })
    );
    // Remove empty objects
    const pureProductImgs = uploadedProductImgs.filter(
      (value) => typeof value.key === 'string'
    );

    const response = await axios.put(`/api/edit-product/${productId}`, {
      ...editedInfo,
      productImgs: [...pureProductImgs],
    });

    dispatch({
      type: EDIT_PRODUCT,
      payload: response.data,
    });

    alert('제품수정을 완료했습니다. 사진이 보이지 않는다면 새로고침해주세요!');
    history.push(`/products/product-list/${artistId}`);
  } catch (err) {
    console.log(err);
  }
};

const createProduct = (id, productInfo) => async (dispatch) => {
  const productImgs = productInfo.productImgs;

  // Remove empty objects(none-files) from productImgs
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
  const response = await axios.get(`/api/products/${id}`);
  dispatch({
    type: FETCH_PRODUCT,
    payload: response.data,
  });
};

const fetchCategoryProducts = (category) => async (dispatch) => {
  const response = await axios.get(`/api/category/${category}`);
  switch (category) {
    case 'pencil':
      dispatch({
        type: FETCH_PENCIL_PRODUCTS,
        payload: response.data,
      });
      break;
    case 'illustration':
      dispatch({
        type: FETCH_ILLUSTRATION_PRODUCTS,
        payload: response.data,
      });
      break;
    case 'photoshop':
      dispatch({
        type: FETCH_PHOTOSHOP_PRODUCTS,
        payload: response.data,
      });
      break;
    default:
      dispatch({
        type: FETCH_PENCIL_PRODUCTS,
        payload: response.data,
      });
  }
};

const deleteProduct = (id) => async (dispatch) => {
  await axios.delete(`/api/delete-product/${id}`);
  dispatch({
    type: DELETE_PRODUCT,
  });
};

const fetchOneArtistProducts = (id) => async (dispatch) => {
  const response = await axios.get(`/api/artist-products/${id}`);
  dispatch({
    type: FETCH_ONE_ARTIST_PRODUCTS,
    payload: response.data,
  });
};

export {
  createProduct,
  fetchProduct,
  fetchCategoryProducts,
  editProduct,
  deleteProduct,
  fetchOneArtistProducts,
};
