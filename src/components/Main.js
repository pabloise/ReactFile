import React, { Component } from 'react';
import technicians from '../mock/technicians.json';
import './Main.css';
import Form from './Form';

class Main extends Component {

  state = {
    list: technicians
  }

  delete = (id) => {
    const deleteTechnician = this.state.list.filter((technician) => technician.id !== id )
    this.setState({
      list: deleteTechnician
    })
  }

  addTechnician = (newTechnician) => {
    this.setState({
      list: [...this.state.list, newTechnician]
    })
  }

  render() {
    console.log(technicians);
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
              return(
                <tr key={ itemTechnicians.id } >
                  <td> { itemTechnicians.first_name } </td>
                  <td> { itemTechnicians.last_name } </td>
                  <td> { itemTechnicians.address } </td>
                  <td> { itemTechnicians.phone } </td>
                  <td> { itemTechnicians.email } </td>
                  <td> { itemTechnicians.boiler_types } </td>
                  <td>
                    <button>
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