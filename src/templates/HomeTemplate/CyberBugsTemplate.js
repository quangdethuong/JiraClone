import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Home/Header/Header';
import SideBar from '../../components/CyberBugs/SideBar';
import Menu from '../../components/CyberBugs/Menu';
import InforModal from '../../components/CyberBugs/Modal/InforModal';





export const CyberBugsTemplate = (props) => {

    const { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className="jira">
                <SideBar />
                <Menu />
                <Component {...propsRoute} />
                <InforModal />
            </div>
        </>
    }} />

}