import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';

 

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col ={12}>
                        <img 
                            className="avatar-img"
                            src={"/profile_pic.png"}
                            alt="avatar"
                        />
                        <div className="banner-text">
                            <h1>Software Developer</h1>
                        <hr/>
                        <p>
                            C/C++ | Python | Java | HTML/CSS | JavaScript | NodeJS | React  | Express | SQL 
                        </p>
                        <div className="social-links">
                           
                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/jason-mullin-8a5460182/"  rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"/>
                            </a>

                             {/* GitHub */}
                             <a href="https://github.com/mullin-jason"  rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"/>
                            </a>

                        </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;