/**
 * @author [Alex Neo]
 * @email [alex.neo0115@gmail.com]
 * @create date 2022-01-12 18:08:03
 * @modify date 2022-01-12 18:08:03
 * @desc [create sider view]
*/

import React  from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Menu, Typography } from "antd";
import "../components/css/SliderMenu.css";
import {
    PlusOutlined
} from "@ant-design/icons";
import { addMenuItem, increaseCounter, decreaseCounter, renameCounter } from "redux/action";
import PropTypes from "prop-types";
import CounterView from "./CounterView";

const { Content, Sider } = Layout;
const { Title } = Typography;



const SliderView = ({pageTitle}) => {
    //get state from store by useSelector
    const todoMenu = useSelector(state => 
        state.todoMenu
    );
    const todoCounter = useSelector(state => 
        state.counterList
    );

    //useDispatch to generate dispatch func
    const dispatch = useDispatch();
    const addMenus = (payload) => {
        return () => {
            const actionAddMenuItem = addMenuItem(payload);
            dispatch(actionAddMenuItem);
        }
    }


    const clickIncrease = (index, value) => {
        const actionIncrease = increaseCounter(index, value);
        dispatch(actionIncrease);
    }

    const clickDecrease = (index, value) => {
        const actionDecrease = decreaseCounter(index, value);
        dispatch(actionDecrease);
    }

    const onRenameClick = (index, name) => {
        const actionRename = renameCounter(index, name);
        dispatch(actionRename);
    }

   return( 
    <Layout style={{ minHeight: "100vh", padding: 0  }}>
         <Sider>
            <Menu theme="dark" mode="inline" width='576px'>
                {todoMenu.map((todo, i) => 
                    <>
                        <Menu.Item key={i}>
                            <CounterView
                                title={todoCounter[i].name} 
                                value={todoCounter[i].data} 
                                onRenameClick={(val)=> onRenameClick(i ,val)}
                                onIncreaseClick={() => {
                                    clickIncrease(i,1);
                                }} 
                                onDecreaseClick={() => {
                                    clickDecrease(i, 1);
                                }}/>
                        </Menu.Item>
                        <Menu.Divider />
                    </>
                )}
                <Menu.Item icon={<PlusOutlined />} onClick={addMenus(1)}>
                    Add counter
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div>
              <Title level={1}>{pageTitle}</Title>
            </div>
          </Content>
        </Layout>

    </Layout>
   );

};

SliderView.propTypes = {
    pageTitle: PropTypes.string
};


export default SliderView;
