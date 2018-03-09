import React, { Component } from 'react';
import animateScrollTo from 'animated-scroll-to';

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
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                document.querySelector('#scrollToTop').classList.add('active');
            }
            else {
                document.querySelector('#scrollToTop').classList.remove('active');

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
    handleClickHome() {
        animateScrollTo(document.querySelector('.home').scrollHeight - 50, { speed: 150 });
    }
    handleClickRentCar() {
        animateScrollTo(document.querySelector('.car').scrollHeight + 25, { speed: 150 });
    }

    handleClickContact() {
        animateScrollTo(document.querySelector('.contact'), { speed: 150 });
    }
    render() {
        return (
            <div>
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
                                <li onClick={this.handleClickHome}><a>Home</a></li>
                                <li onClick={this.handleClickRentCar}><a>Rent Car</a></li>
                                <li onClick={this.handleClickContact}><a>Contact</a></li>
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
                            <ul >
                                <li onClick={this.handleClickHome}><a>Home</a></li>
                                <li onClick={this.handleClickRentCar}><a>Rent Car</a></li>
                                <li onClick={this.handleClickContact}><a>Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}



export default Navigation;