import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <div>
                <div id='navigation'>
                    <div className="menu">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Car</a></li>
                            <li><a href="">Travel</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;