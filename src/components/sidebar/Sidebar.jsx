import React from 'react';

import overview from '../../assets/overview.png';
import g1 from '../../assets/g1.png';
import g2 from '../../assets/g2.png';
import g3 from '../../assets/g3.png';
import g4 from '../../assets/g4.png';
import g5 from '../../assets/g5.png';
import g6 from '../../assets/g6.png';
import g7 from '../../assets/g7.png';
import person from '../../assets/person.png';

import './sidebar.styles.scss';

const Sidebar = () => {

    return(
        <div className='sidebar'>
            <button className='gen-invoice'>Generate Invoice</button>
            <div className='main'>
                <span className="main-title pl">Main</span>
                <ul className='main-content'>
                    <li className='main-link'>
                        <img className="link-icon" src={overview} alt="overview-icon"/>
                        <a href="#!">Overview</a>
                    </li>
                </ul>
            </div>
            <div className='links'>
                <span className='links-title pl'>Payments</span>
                <ul className="links-content">
                    <li className="link">
                        <img src={g5} alt="all" className="link-icon"/>
                        <a href="#!">All Payments</a>
                    </li>
                    <li className="link">
                        <img src={g1} alt="reconciled" className="link-icon"/>
                        <a href="#!">Reconciled Payments</a>
                    </li>
                    <li className="link">
                        <img src={g6} alt="un-reconciled" className="link-icon"/>
                        <a href="#!">Un-Reconciled Payments</a>
                    </li>
                    <li className="link">
                        <img src={g7} alt="manual" className="link-icon"/>
                        <a href="#!">Manual Settlements</a>
                    </li>
                </ul>
            </div>
            <div className='links'>
                <span className='links-title pl'>Orders</span>
                <ul className="links-content">
                    <li className="link">
                        <img src={g3} alt="all" className="link-icon"/>
                        <a href="#!">All Orders</a>
                    </li>
                    <li className="link">
                        <img src={g2} alt="reconciled" className="link-icon"/>
                        <a href="#!">Pending Orders</a>
                    </li>
                    <li className="link">
                        <img src={g4} alt="un-reconciled" className="link-icon"/>
                        <a href="#!">Reconciled Orders</a>
                    </li>
                </ul>
            </div>
            <ul className='merchant'>
                <li className='link-m'>
                    <img className="link-m-icon" src={person} alt="link-icon"/>
                    <a href="#!">Merchant Profile</a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;