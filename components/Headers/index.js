import React,{useState} from "react";
import {Icon, Layout, Menu} from "antd";
import Router from "next/router";
const { Sider,Header} = Layout;

export default function Headers(props) {
    const [collapsed,setCollapsed] = useState(false)
    const toggle = ()=>{
        return setCollapsed(!collapsed)
    }
    const routeMenu = (event)=>{
        console.log("checkonclick",event)
        Router.push("/"+event.key)
    }
    return(
        <Layout style={{height:"100%"}} >
        <Sider trigger={null} collapsible collapsed={collapsed} >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                <Menu.Item key=" " onClick={value=>routeMenu(value)}>

                    <Icon type="home" />
                    <span>Wellcome</span>



                </Menu.Item>


                <Menu.Item key="form" onClick={value=>routeMenu(value)}>

                    <Icon type="setting" theme="filled" />
                    <span>Form</span>

                </Menu.Item>
                <Menu.Item key="about" onClick={value=>routeMenu(value)}>

                    <Icon type="sync" />
                    <span>Abouts</span>

                </Menu.Item>
            </Menu>

        </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className="trigger"
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={toggle}
                    />
                </Header>
                {props.children}
            </Layout>
        </Layout>
    )
}