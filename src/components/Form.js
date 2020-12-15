import React, { Component } from 'react'

const initalState = {
  first_name: '',
  last_name: '',
  address: '',
  phone: '',
  email: '',
  boiler_types: ''
}

export class Form extends Component {

  state = initalState

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submit = () => {
    this.props.submit(this.state)
    this.setState(initalState)
  }

  render() {
    console.log(this.props)
    return (
      <tr>
        <td> { <input type="text" name="first_name" onChange={this.inputChange} value={this.state.first_name} /> } </td>
        <td> { <input type="text" name="last_name" onChange={this.inputChange} value={this.state.last_name} /> } </td>
        <td> { <input type="text" name="address" onChange={this.inputChange} value={this.state.address} /> } </td>
        <td> { <input type="text" name="phone" onChange={this.inputChange} value={this.state.phone} /> } </td>
        <td> { <input type="text" name="email" onChange={this.inputChange} value={this.state.email} /> } </td>
        <td> { <input type="text" name="boiler_types" onChange={this.inputChange} value={this.state.boiler_types} /> } </td>
        <td>
          <button onClick={this.submit}>
            Add
          </button>
        </td>
      </tr>
    )
  }
}

export default Form
