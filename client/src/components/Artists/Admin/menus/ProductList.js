import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchOneArtistProducts } from '../../../../actions';
import SidebarWrapper from '../sidebar/SidebarWrapper';

export class ProductList extends Component {
  state = {};

  componentDidMount() {
    const artistId = this.props.match.params.id;
    fetchOneArtistProducts(artistId);
  }

  render() {
    console.log(this.props.products);
    return (
      <SidebarWrapper
        artistId={this.props.match.params.id}
        breadTitle='제품리스트'
        breadParent='아티스트페이지'
      >
        <div className='container-fluid'>제품리스트</div>
      </SidebarWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return { artist: state.artist, products: state.products };
};

export default connect(mapStateToProps, { fetchOneArtistProducts })(
  ProductList
);
