import React, {Component} from 'react';
import logo from 'assets/images/logo.svg';

class TopMenu extends Component {
    render() {
        return (
            <div className="landing-header">
                <img src={logo} alt=""/>
                <div className="top-left-menu">
                    <ul>
                        <li><a href="#">что такое мегавп?</a></li>
                        <li><a href="#">как это работает?</a></li>
                    </ul>
                </div>
                <div className="top-right-menu">
                    <ul>
                        <li><a href="#">регистрация</a></li>
                        <li><a href="#">логин</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default TopMenu;
