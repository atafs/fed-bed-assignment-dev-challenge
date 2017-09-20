import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/fetchProducts';

class ProductInfo extends Component {
  renderTransaction() {
    return (
      <div>
        <form>
            <div className="row">
                <div className="form-group col-md-6">
                    <label>Supplier</label>

                </div>
            </div>
        </form>
      </div>
    )
  }

  render() {
    console.log(this.props)

    return (
      <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 main">
                    <br/><br/>
                    <h1 className="page-header">Transation:</h1>
                    {this.renderTransaction()}
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps() {
  const request = fetchProducts();
  return {
    products: request.data
  };
}

export default connect(mapStateToProps, { fetchProducts })(ProductInfo);
