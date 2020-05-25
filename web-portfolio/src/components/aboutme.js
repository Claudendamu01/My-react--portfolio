import React, { Component } from 'react';
import  { Grid , Cell } from 'react-mdl';

class Aboutme extends Component {
    render() {
        return(
            <div className='about-grid' style={{width: "100", margin: "auto"}}>
            <Grid >
                <Cell col={12}></Cell>
            </Grid>
            <img
            src="assets/image/picture01.jpg"
            alt="Claude Ndamushimye"
            className="div-img"
            />
            <div className="div-text">
               <h3>Full Stack Web Developer</h3>

               <hr/>
               <p>HTML/CSS | Bootstrap | Javascript | NodeJS | Express | React | MySQL | MongoDB</p>
            </div>

               <div className="social-links">
                    <a href="https://twitter.com/Claudendamu01" rel="noopener" target="blnak">
                       <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                
                    <a href="http://linkedin.com/in/claude-ndamushimye-978381104" rel="noopener" target="blnak">
                       <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>

                    <a href="https://github.com/Claudendamu01" rel="noopener" target="blnak">
                       <i className="fa fa-github" aria-hidden="true"></i>
                    </a>         
               </div>
           
        </div>
        )
    }
}
export default Aboutme;