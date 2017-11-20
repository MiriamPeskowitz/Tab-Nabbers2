

<!-- From Navbar.js -->
import React from "react";

import "../public/css/header.scss";

import {Navbar, Icon, NavItem} from "react-materialize";

var Header = () => (

        <Navbar brand='Bootcruit' right>
            <NavItem href='get-started.html'><Icon>search</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
            <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
        </Navbar>
    );

export default Header;

  }
}
<!-- end -->


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search, updateSearchInput } from '../../actions';
import {Footer, Col, Row, Button} from "react-materialize";

<!-- is it  -->

class SearchBar extends Component {
  render() {
    return (
    	<Row className = "navbar">

<!-- add div here, to flex-box the whole thing?  -->

    <!-- 	Left side , logo -->
    		<Col l={2}>
    			<div className="Bootcruit-logo"
    				<img src= "#bootcruit-logo">
    			</div>
    		</Col>

    		<Col l={8}>
    			<div className="searchbar-and-submit-button">
    				<form onSubmit = { this.props.search } >
				        <input
				          placeholder = "Search Events"
				          onChange = { this.props.updateSearchInput }
				          value = { this.props.searchQuery }
				          class = "searchbar"
				        />
				        <button type = "submit" id="navbar-button" > Find events </button>
				     </form>
    			</div>

 		   	</Col>

 		   	<Col l={2}>
 		   		<div className="userimage">
 		   			<img src="" <!-- {user profile image dynamically placed here} -->  >
 		   			
 		   		</div>
 		   	</Col>






      
    );





<!-- example from footer.js -->
import React from "react";
import "../public/css/footer.scss";
import {Footer, Col, Row, Button} from "react-materialize";

const FooterPage = () => {
    return (
        <Row className="footer">

            <Col l={4}>
                <div className="" >
                    <h4 className="">About BootCruit</h4>
                    <p className="">BootCruit is a single-click staffing solution to connect recruiters and employers to current and recently graduated coding bootcamp students.</p>
                </div>
            </Col>

            <Col l={4}>
                <div className="">
                    <h2 className="">Single-Click Staffing Solutions</h2>
                    <Button>Sign up</Button>
                </div>
            </Col>


            <Col l={4}>
                <div className="">
                    <h4 className="">Useful Resources</h4>
                    <div className="">
                        <a href="/about" className="item">About</a>
                        <a href="https://github.com/accimeesterlin/Tab-Nabbers2" className="" target="_blank">BootCruit GitHub</a>
                        <a href="http://www.reactd3.org/" className="" target="_blank">React D3</a>
                        <a href="#" className="item">Contact</a>
                    </div>
                </div>
            </Col>

            <Col l={12}>
                <p className="">© 2017 Copyright: <a href="/"> BootCruit.com </a>
                </p>
            </Col>


        </Row>
    );
};
export default FooterPage;



    Need: 
 1.   on left, 1/6, bootcruit logo
 2. center 2/3, search events bar and submit button ("Find events")
 3.  on right, 1/6, user profile image? 

 What I don't know: 
 functionality, and how any of this connects to other modules, and how that would matter. 