import alertify from 'alertifyjs';
import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Form2 extends Component {

  state = { email: '', password: '', address:'',address2:'', city: '',state:'',zip:'',check:'', description: '' }

  handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    alertify.success(this.state.email + ' added to db!');
    alertify.success(this.state.address + ' added to db!');
    alertify.success(this.state.address2 + ' added to db!');
    alertify.success(this.state.city + ' added to db!');
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input onChange={this.handleChange} type="email" name="email" id="email" placeholder="Enter Email" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input onChange={this.handleChange} type="password" name="password" id="password" placeholder="Enter password" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="address">Address</Label>
            <Input onChange={this.handleChange} type="text" name="address" id="address" placeholder="1234 Main St" />
          </FormGroup>
          <FormGroup>
            <Label for="address2">Address 2</Label>
            <Input onChange={this.handleChange} type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor" />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="city">City</Label>
                <Input onChange={this.handleChange} type="text" name="city" id="city" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state">State</Label>
                <Input onChange={this.handleChange} type="text" name="state" id="state" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="zip">Zip</Label>
                <Input onChange={this.handleChange} type="text" name="zip" id="zip" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup check>
            <Input type="checkbox" name="check" id="check" />
            <Label onChange={this.handleChange} for="check" check>Check me out</Label>
          </FormGroup><br></br>
          <Button type='submit'>Sign in</Button>
        </Form>
      </div>
    )
  }
}
