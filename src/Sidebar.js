// Sidebar.js
import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = ({ isLoggedIn }) => {
  return (
    <Nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link href="/sidebar-item1">Sidebar Item 1</Nav.Link>
          </Nav.Item>
        )}
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link href="/sidebar-item2">Sidebar Item 2</Nav.Link>
          </Nav.Item>
        )}
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link href="/sidebar-item3">Sidebar Item 3</Nav.Link>
          </Nav.Item>
        )}
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link href="/sidebar-item4">Sidebar Item 4</Nav.Link>
          </Nav.Item>
        )}
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link href="/sidebar-item5">Sidebar Item 5</Nav.Link>
          </Nav.Item>
        )}
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link href="/sidebar-item6">Sidebar Item 6</Nav.Link>
          </Nav.Item>
        )}
        {isLoggedIn && (
          <Nav.Item>
            <Nav.Link href="/sidebar-item7">Sidebar Item 7</Nav.Link>
          </Nav.Item>
        )}
      </div>
    </Nav>
  );
};

export default Sidebar;
