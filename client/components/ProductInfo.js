import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/fetchProducts';

class ProductInfo extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 col-md-12 main">
                    <br/><br/>
                    <h1 className="page-header">Product pricing</h1>

                    <form>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label htmlFor="selSupplier">Supplier</label>
                                <select className="form-control" id="selSupplier">
                                    <option>xxxx</option>
                                </select>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="selProduct">Product</label>
                                <select className="form-control" id="selProduct">
                                    <option>xxxx</option>
                                </select>
                            </div>
                        </div>
                    </form>

                    <h2 className="sub-header">Product details</h2>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Supplier</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>x</td>
                                    <td>xxxx</td>
                                    <td>xxxx</td>
                                    <td>xxxx</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps, { fetchProducts })(ProductInfo);
