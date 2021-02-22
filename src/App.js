

import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';


class App extends Component {

  
  constructor(props){
    super(props);
    // this.input = React.createRef();
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(){
    console.log("Sửa lại");
    console.log(this.node.value);
  }

  render() {
    var products = [{
                        id  : 1,
                        name: "Iphone 12 Pro Max",
                        price: "30.000.000 vnđ",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZzpIHKAXvDF_DJLR4R35YvT3QZ6s5f2jVyrU0wVHheoG21XtokcSqYYr__h6Q2p1IAs9cAII&usqp=CAc",
                        status: true
                    },
                    {
                        id  : 2,
                        name: "Iphone 11 Pro Max",
                        price: "25.000.000 vnđ",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp00iRaWcuYQZVtGdhB1zBFDNBlzE0peGAH2igTHIVeocNZhTl-hnlvhe4mg&usqp=CAc",
                        status: true
                    },
                    {
                        id  : 3,
                        name: "Iphone 11",
                        price: "20.000.000 vnđ",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9W4BH_iWaMRchVcoknu55_DyaGFXG_cn1yBGm0ht1jpKQLmEHJTSl3E5AyfhihHfeOkceWcff&usqp=CAc",
                        status: true
                    },
                    {
                        id  : 4,
                        name: "Iphone XS MAX",
                        price: "15.000.000 vnđ",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNBpjB-PpRKgKVq2UagDQBmvM5H3uIquXFNUmID7ejxOMkKlESRsx-lOYSdP0IZkWVw9PPhWK&usqp=CAc",
                        status: true
                    },
                    {
                        id  : 5,
                        name: "Iphone XS",
                        price: "10.000.000 vnđ",
                        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyNBpjB-PpRKgKVq2UagDQBmvM5H3uIquXFNUmID7ejxOMkKlESRsx-lOYSdP0IZkWVw9PPhWK&usqp=CAc",
                        status: true
                    }];
    var elements = products.map((product, index) => {
        if(product.status){
          var res = <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4" key={product.id}>
                        <Product 
                            name={product.name}
                            price={product.price}
                            image={product.image}
                        ></Product>
                    </div>
        }
        return  res;
                
    })

    return (
      <div>
        <Header></Header>
        <div className="container">
            <div className="row mt-5 bg-light">
              <div>
                  <div className="form-group">
                      <label htmlFor="addId">Thêm Sản Phẩm:</label>
                      <input type="text" className="form-control" id="addId" aria-describedby="emailHelp" placeholder="Thêm Sản Phẩm ..." ref={(node) => { this.node= node; }} />
                  </div>
                  <button type="button" className="btn btn-primary" onClick={this.addToCart} >Lưu</button>
              </div>
                    
            </div>
            <div className="row mt-5">
                {elements}
            </div>
        </div>
        
      </div>
    );
  }
}


export default App;
