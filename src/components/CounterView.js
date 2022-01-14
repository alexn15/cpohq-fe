/**
 * @author [Alex Neo]
 * @email [alex.neo0115@gmail.com]
 * @create date 2022-01-12 19:33:03
 * @modify date 2022-01-12 19:33:03
 * @desc [create counter view]
*/

import React from "react";
import PropTypes from "prop-types";
import { Input, Button, Form } from "antd";
import {
    UpCircleFilled,
    DownCircleFilled,
    EditOutlined
} from "@ant-design/icons";


const CounterView = ({ title, value, onRenameClick, onIncreaseClick, onDecreaseClick }) => {

    const handleFormSubmit = (values) => {
        let content = values.content;
        console.log(content);
        if (content === "" || content === undefined){
            content= "Counter";
        }
        onRenameClick(content);
    }

    return( 
        <div style={{width:'250px', height:'100px'}}>
            <span style={{color:'#fff'}}>{title}: {value}</span>
            <br/>
            <Form layout="inline" onFinish={(values) => handleFormSubmit(values)}>
                <Form.Item  name="content" >
                    <Input placeholder="Rename" prefix={<EditOutlined style={{ fontSize: '14px', color: '#08c' }} />} />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Send
                    </Button>
                </Form.Item>
            </Form>
            <Button onClick={onIncreaseClick} style={{background:'transparent'}} icon={<UpCircleFilled style={{ fontSize: '16px', color: '#08c'}} />}></Button>
            <Button onClick={onDecreaseClick} style={{background:'transparent'}} icon={<DownCircleFilled style={{ fontSize: '16px', color: '#08c' }} />}></Button>
        </div>
    );
};


CounterView.propTypes = {
	value: PropTypes.number.isRequired,
    onRenameClick: PropTypes.func.isRequired,
	onIncreaseClick: PropTypes.func.isRequired,
	onDecreaseClick: PropTypes.func.isRequired
};

export default CounterView;
