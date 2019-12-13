import React from 'react';

class Product extends React.Component {
  constructor(props)
  {
    super(props);
    this.onAddToCart = this.onAddToCart.bind(this);
  }

  onAddToCart()
  {
    alert(this.props.name);
  }

  onAddToCart2 = () => {
    alert(this.props.name);
  }

  // render
  render() {
    return (
        <div className="card text-left">
            <img className="card-img-top" />
            <div className="card-body">
                <h4 className="card-title">{ this.props.name }</h4>
                <p className="card-text">{this.props.price}</p>
                <button href="" className="btn btn-button" onClick={ this.onAddToCart }>
                  Add to cart
                </button>

                <button href="" className="btn btn-button" onClick={ this.onAddToCart2 }>
                  Add to cart 2
                </button>
            </div>
        </div>
        
    );
  }
}

export default Product;

