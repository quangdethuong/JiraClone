import React from 'react'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min'
import {
    SolutionOutlined
} from '@ant-design/icons';
export default function Menu() {
    return (
        <div className="menu">
            <div className="account">
                <div className="avatar">
                    <img src={require("../../assets/img/download.jfif")} alt='' />
                </div>
                <div className="account-info">
                    <p>CyberLearn.vn</p>
                    <p>Report bugs</p>
                </div>
            </div>
            <div className="control">
                <div>
                    <i className="fa fa-credit-card mr-1" />
                    <NavLink className="text-dark" activeStyle={{ color: 'blue' }} to="/cyberbugs" activeClassName="active font-weight-bold text-primary" >Cyber Board</NavLink>
                </div>
                <div>
                    <i className="fa fa-cog mr-1" />
                    <NavLink className="text-dark" activeStyle={{ color: 'blue' }} to='/createproject' activeClassName="active font-weight-bold  text-primary" >Create project</NavLink>
                </div>
                <div>
                    <SolutionOutlined />
                    <NavLink className="text-dark" activeStyle={{ color: 'blue' }} to='/project' activeClassName="active font-weight-bold  text-primary" >Project Management</NavLink>
                </div>
            </div>
            <div className="feature">
                <div>
                    <i className="fa fa-truck" />
                    <span>Releases</span>
                </div>
                <div>
                    <i className="fa fa-equals" />
                    <span>Issues and filters</span>
                </div>
                <div>
                    <i className="fa fa-paste" />
                    <span>Pages</span>
                </div>
                <div>
                    <i className="fa fa-location-arrow" />
                    <span>Reports</span>
                </div>
                <div>
                    <i className="fa fa-box" />
                    <span>Components</span>
                </div>
            </div>
        </div>

    )
}
