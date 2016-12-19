// FrontPageNavbar.jsx

var React = require('react');

// Bootstrap Elements
import { Nav, NavItem, Collapse } from 'react-bootstrap';

import { LinkContainer } from 'react-router-bootstrap';

// styling
require('./FrontPageNavbar.scss');

/**
Navigation bar for the stream frontpage, which has collapsing rows and selectable tabs
*/
var FrontPageNavbar = React.createClass({
  getInitialState: function() {
    return {open: false};
  },
  handleClick: function(selectedKey) {
    switch(selectedKey) {
      case 1:
        window.open("http://uclaradio.tumblr.com", "_blank");
        break;
      case 2:
        window.open("/managers", "_blank");
        break;
      case 3:
        window.open("http://apply.dailybruin.com/applications/ucla-radio/", "_blank");
        break;
      case 4:
        window.open("http://last.fm/user/uclaradio", "_blank");
        break;
      case 5:
        window.open("/panel", "_blank");
        break;
      case 10:
        this.setState({open: !this.state.open});
        break;
      default:
        break;
    }
  },
  render: function() {
    return (
      <div className="frontPageNavbar">
        { /** Large devices, hidden on xs **/ }
        <Nav justified bsStyle="pills" className="hidden-xs" onSelect={this.handleClick}>
          <LinkContainer to="/beta/djs">
            <NavItem className="frontPageNavbarItem leftMost">DJs</NavItem>
          </LinkContainer>
          <LinkContainer to="/beta/events">
            <NavItem className="frontPageNavbarItem">Events</NavItem>
          </LinkContainer>
          <LinkContainer to="/beta/shows">
            <NavItem className="frontPageNavbarItem">Shows</NavItem>
          </LinkContainer>
          <NavItem eventKey={10} className="frontPageNavbarItem rightMost"><span className="expandToggle">{this.state.open ? "Less" : "More"}</span></NavItem>
        </Nav>
        <Collapse in={this.state.open} className="hidden-xs">
          <Nav justified bsStyle="pills" onSelect={this.handleClick}>
            <NavItem eventKey={1} className="frontPageNavbarItem leftMost collapsed">Blog</NavItem>
            <NavItem eventKey={2} className="frontPageNavbarItem collapsed">Managers</NavItem>
            <NavItem eventKey={3} className="frontPageNavbarItem collapsed">Apply</NavItem>
            <NavItem eventKey={4} className="frontPageNavbarItem collapsed">Air Plays</NavItem>
            <NavItem eventKey={5} className="frontPageNavbarItem rightMost collapsed">Staff Panel</NavItem>
          </Nav>
        </Collapse>

        { /** Extra Small devices, hidden on sm, md, lg **/ }
        <Nav justified bsStyle="pills" className="hidden-sm hidden-md hidden-lg" onSelect={this.handleClick}>
          <LinkContainer to="/beta/djs">
            <NavItem className="frontPageNavbarItem fullWidth topMost">DJs</NavItem>
          </LinkContainer>
          <LinkContainer to="/beta/events">
            <NavItem className="frontPageNavbarItem fullWidth">Events</NavItem>
          </LinkContainer>
          <LinkContainer to="/beta/shows">
            <NavItem className="frontPageNavbarItem fullWidth">Shows</NavItem>
          </LinkContainer>
          <NavItem eventKey={10} className="frontPageNavbarItem fullWidth bottomMost"><div className="expandToggle">{this.state.open ? "Less" : "More"}</div></NavItem>
        </Nav>
        <Collapse in={this.state.open} className="hidden-sm hidden-md hidden-lg">
          <Nav justified bsStyle="pills" onSelect={this.handleClick}>
            <NavItem eventKey={1} className="frontPageNavbarItem fullWidth">Blog</NavItem>
            <NavItem eventKey={2} className="frontPageNavbarItem fullWidth">Managers</NavItem>
            <NavItem eventKey={3} className="frontPageNavbarItem fullWidth">Apply</NavItem>
            <NavItem eventKey={4} className="frontPageNavbarItem fullWidth">Air Plays</NavItem>
            <NavItem eventKey={5} className="frontPageNavbarItem fullWidth bottomMost">Staff Panel</NavItem>
          </Nav>
        </Collapse>
      </div>
    );
  }
});

module.exports = FrontPageNavbar;
