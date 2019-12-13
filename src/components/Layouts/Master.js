import React from 'react';
import Header from './Partials/Header';
import Product from './../page/product/Product';

class Master extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            products : [
                {
                    id : 1,
                  name: 'iphone 3',
                  price: 150000,
                  status: true
                  },
                  {
                    id : 2,
                  name: 'iphone 4',
                  price: 150000,
                  status: true
                  },
               
            ]
        }
    }

    onClick()
    {
        console.log("OK");
    }
  render() {
      var a = 5;
      var pro = {
          id : 1,
          name: 'iphone 7',
          price: 150000,
          status: true
      }

    //   var products = [
          
    //   ];

      let elementsProduct = this.state.products.map((product, index)=>{
        let result = '';
        if (product.status)
        {
            result = <Product 
                key = { product.id}
                name = {product.name}
                price = {pro.price}
            />
        }
        return result;
      });

      var users = [
          {
              id: 1,
              name: 'linh',
              age: 24
          },
          {
              id: 2,
              name: 'lam',
              age: 24
          },
          {
              id: 3,
              name: 'long',
              age: 24
          }
      ];

      var elements = users.map((users, index)=>{
            return <div key={users.id}>
                <h2>Tên: { users.name}</h2>
                <p>Tuổi: {users.age}</p>
            </div>
      });
    return (
        <div className="wapper">
            <Header></Header>

            <div className="">
                Id : { pro.id} <br/>
                Name: { pro.name} <br/>
                Price : { pro.price}
            </div>

            <hr/>
            {elements}


            <div className="">
                <Product
                    name = {pro.name}
                    price = {pro.price}
                />
            </div>


            {/* get product */}
            {elementsProduct}

            <br />
            <button type="button" name="" id="" className="btn btn-primary" onClick= { this.onClick} > 
                Click me !
            </button>


            <button type="button" name="" id="" className="btn btn-primary" onClick= { this.onClick2} > 
                Click me 2!
            </button>
        </div>
    );
  }
}

export default Master;
