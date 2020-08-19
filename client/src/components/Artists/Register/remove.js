import React from 'react';

const state = {
  productImgs: {},
  productImgBlobs: '',
  productFiles: null,
  product: {
    name: '',
    medium: '',
    year: '',
    width: 0,
    height: 0,
    quantity: 0,
    price: 0,
  },
};

const showCategory = () => {
  if (input.name === 'productCategory') {
    return (
      <div className={`${size} ${styleName}`}>
        <label>{label}</label>
        <select
          {...input}
          className='form-control mb-3'
          placeholder={placeholder}
        >
          <option></option>
          <option value='pencil'>사진정밀묘사(연필, 색연필 등)</option>
          <option value='cartoon'>사진캐리커처(연필, 색연필 등)</option>
          <option value='illustration'>사진일러스트레이션(디지털)</option>
          <option value='photoart'>사진아트</option>
        </select>
      </div>
    );
  }
};

const onProductImgsChange = (event) => {
  this.setState({ productFiles: event.target.files });
  const files = [...this.state.productImgs, ...event.target.files];
  const fileBlobs = [];
  for (var i = 0; i < files.length; i++) {
    let fileBlob = URL.createObjectURL(files[i], { oneTimeOnly: true });
    fileBlobs.push({
      path: fileBlob,
      name: files[i].name,
    });
  }
  this.setState({ productImgs: files, productImgBlobs: fileBlobs });
};

const showProductImgs = () => {
  if (this.state.productImgBlobs) {
    return (
      <div className='col-lg-3 col-md-6'>
        <div className='collection-block'>
          <img
            src={this.state.productImgBlobs}
            className='img-fluid'
            alt='product-blob'
          />
        </div>
      </div>
    );
  }
  return null;
};
export const remove = () => {
  return (
    <div>
      <div className='form-row mb-3'>
        <div className='col-md-12'>
          <label>작품</label>
          <p style={{ lineHeight: '1.3' }}>
            본인의 작품중 판매를 원하는 작품 1개의 정보를 올려주세요(추후 더
            많은 제품을 올리실 수 있습니다).
            <br />
            제품이미지는 비율에 상관없이 자동 최적화되며 다만 가로 1,000px
            이상의 이미지를 업로드해주시기 바랍니다.{' '}
          </p>
          <div className='d-block'>
            <div
              className='btn btn-solid btn-file'
              style={{
                backgroundImage:
                  'linear-gradient(30deg, black 50%, transparent 50%)',
                color: 'white',
                border: 'none',
              }}
            >
              작품사진 업로드
              <input
                type='file'
                accept='image/*'
                onChange={this.onProductImgsChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='form-row'>
        <div className='form-group col-md-3'>
          <label>작품명</label>
          <input
            onChange={(e) => {
              let product = { ...this.state.product };
              product.name = e.target.value;
              this.setState({ product });
            }}
            className='form-control'
            placeholder='무제'
          />
        </div>
        <div className='form-group col-md-2'>
          <label>작품소재</label>
          <input
            onChange={(e) => {
              let product = { ...this.state.product };
              product.medium = e.target.value;
              this.setState({ product });
            }}
            className='form-control'
            placeholder='아크릴'
          />
        </div>
        <div className='form-group col-md-2'>
          <label>제작연도</label>
          <input
            onChange={(e) => {
              let product = { ...this.state.product };
              product.year = e.target.value;
              this.setState({ product });
            }}
            className='form-control'
            placeholder='2020'
          />
        </div>
        <div className='form-group col-md-1'>
          <label>가로(cm)</label>
          <input
            onChange={(e) => {
              let product = { ...this.state.product };
              let value = e.target.value;
              product.width = parseInt(value.replace(/\D/g, ''));
              this.setState({ product });
            }}
            className='form-control'
            placeholder='100'
          />
        </div>
        <div className='form-group col-md-1'>
          <label>세로(cm)</label>
          <input
            onChange={(e) => {
              let product = { ...this.state.product };
              let value = e.target.value;
              product.height = parseInt(value.replace(/\D/g, ''));
              this.setState({ product });
            }}
            className='form-control'
            placeholder='60'
          />
        </div>
        <div className='form-group col-md-2'>
          <label>에디션 총수량</label>
          <input
            onChange={(e) => {
              let product = { ...this.state.product };
              let value = e.target.value;
              product.quantity = parseInt(value.replace(/\D/g, ''));
              this.setState({ product });
            }}
            className='form-control'
            placeholder='30'
          />
        </div>
        <div className='form-group col-md-3'>
          <label>가격</label>
          <input
            onChange={(e) => {
              let product = { ...this.state.product };
              let value = e.target.value;
              product.price = parseInt(value.replace(/\D/g, ''));
              this.setState({ product });
            }}
            className='form-control'
            placeholder='255000'
          />
        </div>
      </div>
      <div className='collection section-b-space mb-5' style={{ padding: '0' }}>
        <div className='row partition-collection'>{this.showProductImgs()}</div>
      </div>
    </div>
  );
};
