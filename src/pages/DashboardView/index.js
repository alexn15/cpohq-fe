import React from "react";
import { Layout, Typography, Tabs } from "antd";
import 'antd/dist/antd.css';
import { allEmployees } from "../../mockEmployees"
import EmployeeList from "components/EmployeeList";
import _ from 'lodash';

const { Content} = Layout;
const { Title } = Typography;
const { TabPane } = Tabs;

const DashboardView = () => { 

  const groupsRehireEligible = _.groupBy(allEmployees.rehireEligibleEmployees, 'terminated_date');
  var outputRehireEligible =  new Map(Object.entries(groupsRehireEligible));
  const createEligible = () =>{
    let arr = []
    outputRehireEligible.forEach((item)=>{
      arr.push(item)
    })
    return arr ; 
  }
  

  const groupsIllegible = _.groupBy(allEmployees.rehireInellgibleEmployees, 'terminated_date');
  const outputIllegible =  new Map(Object.entries(groupsIllegible));
  const createIllegible = () =>{
    let arr = []
    outputIllegible.forEach((item)=>{
      arr.push(item)
    })
    return arr ; 
  }

  
  const groupsUnknown = _.groupBy(allEmployees.rehireUnknownEmployees, 'terminated_date');
  var outputUnknown =  new Map(Object.entries(groupsUnknown));
  const createUnknown = () =>{
    let arr = []
    outputUnknown.forEach((item)=>{
      arr.push(item)
    })
    return arr ; 
  }


  return (
    <>
      <div>
        <Title level={1} style={{ margin: '0 16px' }}>DASHBOARD</Title>
      </div>
      <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Rehire Eligible" key="1"> 
              {
                  createEligible().map((value)=>
                    <> 
                      <div>
                        {
                          value.length > 0 && (
                            <div>{value[0].terminated_date}</div>
                          )
                        }

                      </div>
                      {   
                        value.map((v)=>
                        <EmployeeList
                            type={"eligible"}
                            name={v.name} 
                            designation={v.position}
                            voluntary={v.voluntary}
                            link={v.profile_link}
                            treason={v.termination_reason}
                        />
                        ) 

                      }
                  </>
                )
              }
            </TabPane>
            <TabPane tab="Rehire Ineligible" key="2">
            {
                  createIllegible().map((value)=>
                    <> 
                      <div>
                        {
                          value.length > 0 && (
                            <div>{value[0].terminated_date}</div>
                          )
                        }

                      </div>
                      {   
                        value.map((v)=>
                        <EmployeeList
                            type={"illegible"}
                            name={v.name} 
                            designation={v.position}
                            voluntary={v.voluntary}
                            link={v.profile_link}
                            treason={v.termination_reason}
                        />
                        ) 

                      }
                  </>
                )
              }
            </TabPane>
            <TabPane tab="Rehire unknown" key="3">
            {
                  createUnknown().map((value)=>
                    <> 
                      <div>
                        {
                          value.length > 0 && (
                            <div>{value[0].terminated_date}</div>
                          )
                        }

                      </div>
                      {   
                        value.map((v)=>
                        <EmployeeList
                            type={"unknown"}
                            name={v.name} 
                            designation={v.position}
                            voluntary={v.voluntary}
                            link={v.profile_link}
                            treason={v.termination_reason}
                        />
                        ) 

                      }
                  </>
                )
              }
            </TabPane>
          </Tabs>
          </Content>
        </Layout>
    </>
    
  );
};

export default DashboardView;
