import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/fetchProducts';

class ProductInfo extends Component {
  constructor() {
    super();

    const request = fetchProducts();
    console.log('request', request);

    this.state = {
      transaction: request
    }
  }
  renderTransaction() {
    console.log('state', this.state);
    console.log(this.state.transaction.data);

    const data = this.state.transaction.data[0]
      ? this.state.transaction.data[0]
      : null

    const dataHeader = data
      ? <div className="form-group col-md-6">
            <h2>{`${data.device.type}, ${data.device.os}, ${data.device.model}`}</h2>
            <h2>{`${data.location.latitude}, ${data.location.longitude}`}</h2>
            <h2>{`${data.transaction.type}, ${data.transaction.time}`}</h2>
        </div>
      : null

    return (
      <div>
        <form>
            <div className="row">
                { dataHeader}
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

export default connect(null, { fetchProducts })(ProductInfo);
