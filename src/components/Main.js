import React, { Component } from 'react';
import technicians from '../mock/technicians.json';
import './Main.css';
import Form from './Form';

class Main extends Component {

  state = {
    list: technicians,
    editItem: undefined
  }

  delete = (id) => {
    const deleteTechnician = this.state.list.filter((technician) => technician.id !== id )
    this.setState({
      list: deleteTechnician
    })
  }

  update = (item) => {
    this.setState({
      editItem: item
    })
  }

  addTechnician = (newTechnician) => {
    this.setState({
      list: [...this.state.list, newTechnician]
    })
  }

  saveTechnician = () => {
    const indexTechnician = this.state.list.findIndex((technician) => technician.id === this.state.editItem.id)
    const newList = this.state.list;
    newList[indexTechnician] = this.state.editItem
    this.setState({
      list: newList,
      editItem: undefined
    })
    }

  inputChange = (e) => {
    this.setState({
      editItem: {
        ...this.state.editItem,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Boiler Types</th>
              <th className="main">Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.state.list.map(itemTechnicians => {
              return this.state.editItem && this.state.editItem.id === itemTechnicians.id ?
              (<tr key={ itemTechnicians.id }>
                <td> { <input type="text" name="first_name" onChange={this.inputChange} value={this.state.editItem.first_name} /> } </td>
                <td> { <input type="text" name="last_name" onChange={this.inputChange} value={this.state.editItem.last_name} /> } </td>
                <td> { <input type="text" name="address" onChange={this.inputChange} value={this.state.editItem.address} /> } </td>
                <td> { <input type="text" name="phone" onChange={this.inputChange} value={this.state.editItem.phone} /> } </td>
                <td> { <input type="text" name="email" onChange={this.inputChange} value={this.state.editItem.email} /> } </td>
                <td> { <input type="text" name="boiler_types" onChange={this.inputChange} value={this.state.editItem.boiler_types} /> } </td>
                <td>
                  <button onClick = {this.saveTechnician}>
                    Save
                  </button>
                </td>
              </tr>)
              : (
                <tr key={ itemTechnicians.id } >
                  <td> { itemTechnicians.first_name } </td>
                  <td> { itemTechnicians.last_name } </td>
                  <td> { itemTechnicians.address } </td>
                  <td> { itemTechnicians.phone } </td>
                  <td> { itemTechnicians.email } </td>
                  <td> { itemTechnicians.boiler_types } </td>
                  <td>
                    <button onClick = {() => this.update(itemTechnicians)}>
                      Update
                    </button>
                    <button onClick = {() => this.delete(itemTechnicians.id)} >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            }) }
            <Form submit={this.addTechnician} />
          </tbody>
      </table>
      </div>
    );
  }
}

export default Main;