
import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';


export default class App extends Component { 

  state={currentCategory:""};

  changeCategory = (category)=>{
    this.setState({currentCategory:category.categoryName})
  }

  render() {
    let productInfo = { title: 'Product List' };
    let categoryInfo = { title: 'Category List' };
    let naviInfo = { title: 'Navi Component' };

    return (
      <div>
        <Container>
          <Row className='bg-secondary text-light d-flex justify-content-center'>
            <Navi info={naviInfo} />
          </Row>
          <Row>
            <Col xs='3' className='bg-info'>
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col s='9' className='bg-warning'>
              <ProductList currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>

      </div>
    )
  }

}
