import _ from 'lodash';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../actions/fetchProducts';

class ProductInfo extends Component {
  handleSupplier(event) {
    console.log(event.target.value)
    alert('Select element: ' + event.target.value)
  }

  handleProducts(event) {
    console.log(event.target.value)
    alert('Select element: ' + event.target.value)
  }

  renderProducts() {
    if (this.props.products[0]) {
      return this.props.products[0].map( (product, i) => {
         return <option key={i}>{product.Product}</option>
      });
    }
  }

  renderSuppliers() {
    if (this.props.products[0]) {
      return this.props.products[0].map( (product, i) => {
         return <option key={i}>{product.Supplier}</option>
      });
    }
  }

  renderTable() {
    if (this.props.products[0]) {
        return (
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
                  {this.props.products[0].map((product, i) =>
                      <tr key={i}>
                          <td>x</td>
                          <td>{product.Supplier}</td>
                          <td>{product.Product}</td>
                          <td>{product.Price}</td>
                      </tr>
                    )}
                  </tbody>
              </table>
          </div>
        )
    }
  }

  renderForm() {
    return (
      <div>
        <form>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="selSupplier">Supplier</label>
                    <select className="form-control" id="selSupplier" onChange={this.handleSupplier}>
                        {this.renderSuppliers()}
                    </select>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="selProduct">Product</label>
                    <select className="form-control" id="selProduct" onChange={this.handleProducts}>
                        {this.renderProducts()}
                    </select>
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
                    <h1 className="page-header">Product pricing</h1>
                    {this.renderForm()}

                    <h2 className="sub-header">Product details</h2>
                    {this.renderTable()}
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
