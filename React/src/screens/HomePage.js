import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import logoo from './images/logoo.png';

class HomePage extends Component {
    render() {
        return (
            <div className="wrapper">
                <header>
                    <nav>
                        <div className="menu-icon">
                            <i className="fa fa-bars fa-2x"></i>
                        </div>
                        <div className="logo">
                            <img className="logoo" src={logoo} />
                        </div>
                        <div className="menu">
                            <ul>
                                <li><a href="/Register">Register</a></li>
                                <li><a href="/LoginPage">Login</a></li>
                                <li><a href="/Dashboard">Dashboard</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="header">
                        <h2>Coder Dudes Are Awesome</h2>
                        <h5>Life is so Great!</h5>
                        <p>Walae, Tyler, Nacho</p>
                    </div>
                </header>
                <main className="text-center py-5">
                    <div className="content">
                        <div className="row">
                            <div className="col-md-30">
                                <p align="justify">Hello, If you want to understand how to program in Java properly, Guess what? you need to have a basic understanding of object orinted programing concepts and how they relate to Java programing.</p>
                                <p>So trust us you will get the best and help full resource in Coder Dudes Favorite Page, then let's get in!</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul").toggleClass("showing");
    });
}
);
$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('nav').addClass('black');
    }
    else {
        $('nav').removeClass('black');
    }
}
);



export default HomePage;
