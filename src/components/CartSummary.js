import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge
} from 'reactstrap';

export default class CartSummary extends Component {
  render() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
          <i className="fas fa-shopping-cart ml-3 text-center"></i>
          <Badge color='info' className='mr-2'>{this.props.cart.length}</Badge>
          </DropdownToggle>
          <DropdownMenu right>
            {
              this.props.cart.map(cartItem => (                
                <DropdownItem key={cartItem.product.id}>
                  <Badge className='mr-2' onClick={()=>this.props.removeFromCart(cartItem.product)} color='danger'><i class="far fa-trash-alt"></i></Badge>
                  {cartItem.product.productName}
                <Badge color="success" className='ml-2'>{cartItem.quantity}</Badge>
                </DropdownItem>
              ))
            }
            <DropdownItem divider/>
            <DropdownItem>
              <Link to='cart'>Go to cart</Link>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
}
