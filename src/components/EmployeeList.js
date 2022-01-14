/**
 * @author [Alex Neo]
 * @email [alex.neo0115@gmail.com]
 * @create date 2022-01-12 18:08:03
 * @modify date 2022-01-12 18:08:03
 * @desc [create reducer]
*/

import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal, Form, Input, Button } from "antd";
import {
    MailOutlined
} from "@ant-design/icons";

const EmployeeList = ({type, voluntary, name, designation, link, treason}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const mailText = "Contact to "+ name;
    
    return(
        <>
            <div style={{margin: '5px'}} onClick={showModal}>
                <Form layout="inline">
                    <Form.Item name="content" >
                        <div style={{color:'#000', background: type === 'eligible'? (voluntary ? 'green': 'red')
                            : 'grey', width: '60px', height: '60px'}}></div>
                    </Form.Item>
                    <Form.Item>
                        <span style={{color:'#000'}}>{name}</span>
                    </Form.Item>
                    <Form.Item>
                        <span style={{color:'#000'}}>{designation}</span>
                    </Form.Item>
                </Form>
            </div>

            <Modal visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <Form layout="inline">
                        <Form.Item name="content" >
                            <div style={{color:'#000', background: type === 'eligible'? (voluntary ? 'green': 'red')
                                : 'grey', width: '60px', height: '60px'}}></div>
                        </Form.Item>
                        <Form.Item>
                            <span style={{color:'#000'}}>{name}</span>
                        </Form.Item>
                        <Form.Item>
                            <span style={{color:'#000'}}>{designation}</span>
                        </Form.Item>
                </Form>
                <br />
                <span>Goto <a href={link} target="_blank">{name}'s profile</a></span>
                <br /><br />
                <span>{treason === null ? <i>No recorded termination reason</i> : treason}</span>
                <br />
                { type === 'eligible' && voluntary ?
                    <> 
                        <br />
                        <Form.Item  name="content" >
                            <Input placeholder={mailText} prefix={<MailOutlined style={{ fontSize: '14px', color: '#08c' }} />} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Send
                            </Button>
                        </Form.Item>
                    </> 
                    :
                    <></>
                }
            </Modal>

        </>
    );
};

EmployeeList.propTypes = {
	name: PropTypes.string,
    voluntary: PropTypes.bool,
    designation: PropTypes.string,
    type: PropTypes.string,
    link: PropTypes.string,
    treason: PropTypes.string
};

export default EmployeeList;