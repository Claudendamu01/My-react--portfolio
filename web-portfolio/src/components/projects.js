import React, { Component } from 'react';
import  { Tabs, Tab  } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
  toggleCategories() {

    if(this.state.activeTab === 0) {
        return(
            <div><h1>Restaurant project</h1></div>   
         )
     }else if(this.state.activeTab === 1) {
        return(
            <div><h1>BookMart project</h1></div>   
         )
     }else if(this.state.activeTab === 2) {
        return(
            <div><h1> Project coming soon ...</h1></div>   
         )
     }
  }
    render() {
        return(
            <div className="category-tabs">
              <Tabs activeTab={this.state.activeTab} onChange={(TabId) => this.setState({activeTab: TabId })} ripple> 
               <Tab>project 01</Tab>
               <Tab>project 02</Tab>
               <Tab>project 03</Tab>
              </Tabs>

              <section className="project-grid">

              </section>
            </div>
        )
    }
}
export default Projects;

    
 