import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArtist } from '../../../../actions';
import SidebarWrapper from '../sidebar/SidebarWrapper';
import AddProductForm from './AddProductForm';

const dummyImgUrl =
  'https://artbanana.s3.ap-northeast-2.amazonaws.com/website/user.png';

export class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ artistId: this.props.match.params.id });
    this.props.fetchArtist(this.props.match.params.id);
  }

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

  render() {
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
                            {this.state.dummyimgs.map((res, i) => {
                              return (
                                <li key={i}>
                                  <div className='box-input-file'>
                                    <input
                                      className='upload'
                                      type='file'
                                      onChange={(e) =>
                                        this.handleImgChange(e, i)
                                      }
                                    />
                                    <img
                                      src={res.img}
                                      style={{ width: 50, height: 50 }}
                                      onClick={(e) => {
                                        this.handleImgClick(e);
                                      }}
                                      alt='products'
                                    />
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
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
      </SidebarWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist };
};

export default connect(mapStateToProps, { fetchArtist })(AddProduct);
