import React, { Component } from 'react';

class Navigation extends Component {


    componentDidMount() {
        window.addEventListener('resize', () => {
            document.getElementById('bg-sidebar').style.display = '';
            document.getElementById('sidebar').classList.remove('active');
        })
        document.addEventListener('click', (event) => {
            if (event.target.id === 'bg-sidebar' || event.target.id === 'sidebar') {
                document.getElementById('bg-sidebar').style.display = '';
                document.getElementById('sidebar').classList.remove('active');
            }
        })
    }
    toggleSidebar() {
        document.querySelector('#sidebar').classList.toggle('active')
        if (document.getElementById('bg-sidebar').style.display == '')
            document.getElementById('bg-sidebar').style.display = 'block';
        else if (document.getElementById('bg-sidebar').style.display == 'block')
            document.getElementById('bg-sidebar').style.display = '';
    }
    render() {
        return (
            <div style={{ paddingBottom: 80 }}>
                <div id="left-menu">
                    <div id="bg-sidebar">
                    </div>
                    <div id="sidebar">
                        <div className="toggle-btn" onClick={this.toggleSidebar}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Rent Car</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div id='navigation'>
                    <div className="toggle-btn" onClick={this.toggleSidebar}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="logo">
                        <h1><font color='#FFF300'>captain</font> car rental</h1>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Rent Car</a></li>
                            <li><a href="">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation;