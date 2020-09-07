import React, { Component } from 'react';
import { connect } from 'react-redux';
import PacmanLoader from 'react-spinners/PacmanLoader';
import { fetchProduct, editProduct } from '../../../../actions';
import SidebarWrapper from '../sidebar/SidebarWrapper';
import EditProductForm from './EditProductForm';

const dummyImgUrl =
  'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/user.png';

export class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      productId: '',
      artistId: '',
      bigProductImg:
        'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/photo_icon.jpg',
      productImgs: [],
      productImgFiles: [{}, {}, {}, {}, {}, {}],
      dummyimgs: [
        {
          img: dummyImgUrl,
        },
        {
          img: dummyImgUrl,
        },
        {
          img: dummyImgUrl,
        },
        {
          img: dummyImgUrl,
        },
        {
          img: dummyImgUrl,
        },
        {
          img: dummyImgUrl,
        },
      ],
    };
  }

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    this.setState({ productId: this.props.match.params.id });
    await this.props.fetchProduct(this.props.match.params.id);
    if (this.props.product) {
      // Set big Product Img
      const productImgs = this.props.product.productImgs;
      const bigProductImg = `https://artbanana.s3.ap-northeast-2.amazonaws.com/${productImgs[0].key}`;
      this.setState({ bigProductImg });
      //   Set product Imgs
      let productImgFiles = [{}, {}, {}, {}, {}, {}];
      //  Set dummy Imgs for thumbnail imgs
      let dummyimgs = this.state.dummyimgs;
      for (var i = 0; i < productImgs.length; i++) {
        productImgFiles.splice(i, 1, productImgs[i]);
        dummyimgs.splice(i, 1, {
          img: `https://artbanana.s3.ap-northeast-2.amazonaws.com/${productImgs[i].key}`,
        });
      }
      this.setState({ productImgFiles });
    }
  };

  onSubmit = async (formValues) => {
    try {
      // Show PacmanLoader
      this.setState({ loading: true });
      const productId = this.props.match.params.id;
      const productImgs = this.state.productImgFiles;
      const artistId = this.props.product.artistId;
      const allValues = { ...formValues, productImgs: productImgs };
      await this.props.editProduct(productId, artistId, allValues);
      window.location.reload(false);
    } catch (err) {
      this.setState({ loading: false });
      console.log(err);
    }
  };

  //image upload
  handleImgClick(e) {
    e.preventDefault();
  }

  handleImgChange(e, i) {
    try {
      //   State Update For Uploaded Files
      const productImgFiles = [...this.state.productImgFiles];
      productImgFiles[i] = e.target.files[0];
      // Make File Blob for showing the Img on the screen and change the dummyImg
      const file = e.target.files[0];
      const fileBlob = URL.createObjectURL(file, { oneTimeOnly: true });
      const { dummyimgs } = this.state;
      dummyimgs[i].img = fileBlob;
      this.setState({ productImgFiles, dummyimgs, bigProductImg: fileBlob });
    } catch (error) {
      return null;
    }
  }

  renderThumbnails() {
    //   To Show Dummy Imgs for product Imgs
    return this.state.dummyimgs.map((image, i) => {
      return (
        <li key={i}>
          <div className='box-input-file'>
            <input
              className='upload'
              type='file'
              onChange={(e) => this.handleImgChange(e, i)}
            />
            <img
              src={image.img}
              style={{ width: 50, height: 50 }}
              onClick={(e) => {
                this.handleImgClick(e);
              }}
              alt='products'
            />
          </div>
        </li>
      );
    });
  }

  render() {
    if (this.props.product.artistId) {
      return (
        <SidebarWrapper
          artistId={this.props.product.artistId}
          breadTitle='제품수정하기'
          breadParent='아티스트페이지'
        >
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='card'>
                  <div className='card-header'>
                    <h5>제품수정하기</h5>
                  </div>
                  <div className='card-body'>
                    <div className='row product-adding'>
                      <div className='add-product'>
                        <div className='row'>
                          <div className='col-9'>
                            <img
                              src={`${this.state.bigProductImg}`}
                              alt='UploadImage'
                              className='img-fluid image_zoom_1 blur-up lazyloaded'
                            />
                          </div>
                          <div className='col-3'>
                            <ul className='file-upload-product'>
                              {this.renderThumbnails()}
                            </ul>
                          </div>
                        </div>
                      </div>
                      <EditProductForm
                        onSubmit={this.onSubmit}
                        initialValues={this.props.product}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-center'>
              <div
                className='sweet-loading'
                style={{
                  display: 'block',
                  position: 'absolute',
                  margin: '0 auto',
                  top: '70%',
                  left: '25%',
                }}
              >
                {this.state.loading ? (
                  <h5 className='mb-5' style={{ color: 'red' }}>
                    업로드중입니다. 페이지 새로고침을 하지말고 잠깐만
                    기다려주세요^^! <br /> 이미지 사이즈가 크다면 오래 걸릴 수
                    있습니다. <br /> 10MB당 10초정도 소요됩니다.
                  </h5>
                ) : null}

                <PacmanLoader
                  size={100}
                  color={'#8aad3a'}
                  loading={this.state.loading}
                />
              </div>
            </div>
          </div>
        </SidebarWrapper>
      );
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return { product: state.product };
};

export default connect(mapStateToProps, { fetchProduct, editProduct })(
  EditProduct
);
