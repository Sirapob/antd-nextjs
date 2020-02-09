import React,{useState} from 'react';
import { Layout,Menu, Breadcrumb, Carousel, Card, Row, Col, Icon} from "antd";
import {Rate} from 'antd'
import '../assets/index.less'
import Headers from "../components/Headers";
import Contents from "../components/Contents"

const {Header, Sider, Content} = Layout;


export default (props)=> {

    const [collapsed,setCollapsed] = useState(false)
    const ChooseRate = ()=> (
         <Rate />
    )

    const toggle=()=>{
        setCollapsed(!collapsed)
    }


    return (



                <Headers>


                    <Contents />
                </Headers>





    )
}
