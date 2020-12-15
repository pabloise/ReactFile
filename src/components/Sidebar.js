import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="Sidebar">
          <ul>
            <li>Buildings</li>
            <li>Companies</li>
            <li>Boilers</li>
            <li>Boiler Types</li>
            <li>Technicians</li>
            <li>Appointments </li>
            <li>Settings</li>
          </ul>
      </div>
    );
  }
}

export default Sidebar;