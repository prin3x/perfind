import React, { Fragment } from 'react';
import {
    Row,
    Col,
    Tabs,
    Radio,
    Input,
} from 'antd';
import axios from '../../config/axios';
import { BASE_BACKEND_URL } from '../../config/constants';
import { withRouter } from 'react-router-dom';
import VenderAddProduct from '../../components/VenderAddProduct/VenderAddProduct';

const { TabPane } = Tabs;


const { Search } = Input;

function VenderPage(props) {


    return (
        // <Fragment>
        //     <Row>
        //         <Radio.Group >
        //             <Radio.Button value="1">1</Radio.Button>
        //             <Radio.Button value="2">2</Radio.Button>
        //             <Radio.Button value="3">3</Radio.Button>
        //         </Radio.Group>
        //     </Row>
        // </Fragment>

        <>
            <VenderAddProduct />
        </>





        // <Fragment>


        //     <Tabs defaultActiveKey="1" centered style={{ borderRadius: "1rem" }}>
        //         <TabPane tab={
        //             <span style={{ background: "linear-gradient(to right, #b8956c, #e3d5b0)", padding: "5rem" }}>Tab 1</span>} key="1">
        //             <Tabs defaultActiveKey="1" centered >
        //                 <TabPane tab={
        //                     <span style={{ background: "linear-gradient(to right, #b8956c, #e3d5b0)", padding: "5rem" }}>Tab 11</span>} key="11" style={{ background: "white" }}>
        //                     Content of Tab Pane 11
        //                                 <div>dfsdfsdfdsf</div>
        //                 </TabPane>
        //                 <TabPane tab={
        //                     <span style={{ background: "linear-gradient(to right, #b8956c, #e3d5b0)", padding: "5rem" }}>Tab 12</span>} key="12" style={{ background: "white" }}>
        //                     Content of Tab Pane 12
        //                             </TabPane>
        //                 <TabPane tab={
        //                     <span style={{ background: "linear-gradient(to right, #b8956c, #e3d5b0)", padding: "5rem" }}>Tab 13</span>} key="13" style={{ background: "white" }}>
        //                     Content of Tab Pane 13
        //                             </TabPane>
        //                 <TabPane tab={
        //                     <span style={{ background: "linear-gradient(to right, #b8956c, #e3d5b0)", padding: "5rem" }}>Tab 14</span>} key="14" style={{ background: "white" }}>
        //                     Content of Tab Pane 14
        //                             </TabPane>
        //             </Tabs>
        //         </TabPane>
        //         <TabPane tab={
        //             <span style={{ background: "linear-gradient(to right, #b8956c, #e3d5b0)", padding: "5rem"  }}>ALL PRODUCT</span>} key="2" style={{ background: "white" }}>
        //                         <Row style={{ marginLeft: "4rem" }}>
        //                 <Col>
        //                     <button>
        //                         ADD NEW
        //                     </button>
        //                 </Col>

        //                 <Col style={{ marginLeft: "25rem" }}>

        //                     <Search
        //                         placeholder="input search text"
        //                         size="medium"
        //                         style={{ borderRadius: "10px", width: "25rem" }}
        //                         allowClear
        //                     />
        //                 </Col>
        //             </Row>
        //             <br></br>
        //             <VenderAddProduct />

        //         </TabPane>
        //         <TabPane tab={
        //             <span style={{ background: "linear-gradient(to right, #b8956c, #e3d5b0)", padding: "5rem" }}>Tab 3</span>} key="3" style={{ background: "white" }}>
        //             Content of Tab Pane 3
        //                     </TabPane>
        //         <TabPane tab={
        //             <span style={{ background: "linear-gradient(to right, #b8956c, #e3d5b0)", padding: "5rem" }}>Tab 4</span>} key="4" style={{ background: "white" }}>
        //             Content of Tab Pane 3
        //                     </TabPane>
        //     </Tabs>


        // </Fragment>
    );
}

export default VenderPage;
