import React, { Component, useRef } from 'react';
import { connect } from 'react-redux';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import update from 'immutability-helper';
import { fetchArtist } from '../../../../actions';
import SidebarWrapper from '../sidebar/SidebarWrapper';
import AddProductForm from './AddProductForm';
import ProductImgList from './ProductImgList';

// Find out if the browser is touchable(iPad, phones will be touchable)
// If you don't care about this, just use HTML5Backend

const isTouchDevice = () => {
  if ('ontouchstart' in window) {
    return true;
  }
  return false;
};
const backendForDND = isTouchDevice() ? TouchBackend : HTML5Backend;

export class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistId: '',
      bigProductImg:
        'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/photo_icon.jpg',
      productImgFiles: [{}, {}, {}, {}, {}, {}],
      // dummyImgs: For Image File Blobs
      dummyImgs: [
        {
          img:
            'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/user.png',
        },
        {
          img:
            'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/user.png',
        },
        {
          img:
            'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/user.png',
        },
        {
          img:
            'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/user.png',
        },
        {
          img:
            'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/user.png',
        },
        {
          img:
            'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/user.png',
        },
      ],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ artistId: this.props.match.params.id });
    this.props.fetchArtist(this.props.match.params.id);
  }

  // image upload
  // handleImgClick(e) {
  //   e.preventDefault();
  // }

  handleImgChange = (e, i) => {
    // If user didn't upload any image files,
    if (e.target.value.length == 0) {
      return null;
    }
    try {
      //   State Update For Uploaded Files
      const productImgFiles = [...this.state.productImgFiles];
      productImgFiles[i] = e.target.files[0];
      // Make File Blob for showing the Img on the screen and change the dummyImg
      const file = e.target.files[0];
      const fileBlob = URL.createObjectURL(file, { oneTimeOnly: true });
      const { dummyImgs } = this.state;
      dummyImgs[i].img = fileBlob;
      this.setState({ productImgFiles, dummyImgs, bigProductImg: fileBlob });
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  render() {
    // dragIndex는 시작점. hoverIndex는 끝점이라고 생각하면 쉬움.
    const moveImage = (dragIndex, hoverIndex) => {
      // Change File Blob location
      const draggedImage = this.state.dummyImgs[dragIndex];
      const changedImgs = update(this.state.dummyImgs, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImage],
        ],
      });
      // Change File location
      const draggedImgFile = this.state.productImgFiles[dragIndex];
      const changedProductImgFiles = update(this.state.productImgFiles, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, draggedImgFile],
        ],
      });
      this.setState({
        dummyImgs: changedImgs,
        productImgFiles: changedProductImgFiles,
      });
    };

    return (
      <SidebarWrapper
        artistId={this.props.match.params.id}
        breadTitle='제품추가하기'
        breadParent='아티스트페이지'
      >
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className='card'>
                <div className='card-header'>
                  <h5>제품추가하기</h5>
                </div>
                <div className='card-body'>
                  <div className='row product-adding'>
                    <div className='add-product'>
                      <div className='row'>
                        <div className='col-9'>
                          <img
                            src={this.state.bigProductImg}
                            alt='UploadImage'
                            className='img-fluid image_zoom_1 blur-up lazyloaded'
                          />
                        </div>
                        <div className='col-3'>
                          <ul className='file-upload-product'>
                            <DndProvider backend={backendForDND}>
                              <ProductImgList
                                images={this.state.dummyImgs}
                                moveImage={moveImage}
                                handleImgChange={this.handleImgChange}
                              />
                            </DndProvider>
                          </ul>
                        </div>
                      </div>
                      <AddProductForm
                        productImgFiles={this.state.productImgFiles}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist };
};

export default connect(mapStateToProps, { fetchArtist })(AddProduct);
