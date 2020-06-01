import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText} from 'react-mdl';




class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 0};
    }
    
    toggleCategories() {
        if(this.state.activeTab === 0)
        {
            return (
                <Grid className="pGrid">
                <div className="projects-grid">
        
                <Card shadow={5} style={{height: '400px', width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '94%' , height: '230px', background: 
                    'url(https://i.ibb.co/SxbQLJp/Map-Icon.jpg) center / cover'}}> 
                    </CardTitle>
                    <CardTitle> Old Harbor 2018 3D Model</CardTitle>
                    <CardText style={{color: '#000', marginTop: '-1em',lineHeight: '20px', fontSize:'15px'}}>
                        The images in this project were taken via drone in 2018 then loaded into pix4d in order to render the 3d model.
                        With over 300 pictures we are able to create a detailed visual aid of the coast to help combat beach erosion.
                    </CardText>
                    <CardActions border>
                        <a href="https://mullin-jason.github.io/old_harbor_3D_Model/"  style={{color:'blue', padding: '1em'}} rel="noopener noreferrer" target="_blank">
                                GitHub 
                        </a>
                        <a href="https://mullin-jason.github.io/old_harbor_3D_Model/"  style={{color:'blue'}} rel="noopener noreferrer" target="_blank">
                                Live demo
                        </a>
                    </CardActions>
                </Card>


              
                <Card shadow={5} style={{height: '400px', width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '94%' , height: '260px', background: 
                    'url(https://i.ibb.co/CPspx0V/weather-app.jpg) center / cover'}}>
                   </CardTitle>
                   <CardTitle>OpenWeather API Forcast App</CardTitle>
                    <CardText style={{color: '#000', lineHeight: '20px', marginTop: '-1em' , fontSize:'15px'}}>
                    
                        The background image changes based on the current locations conditions. For example if its snowing in Alaska, the user will be prompted with a snowy background. 
                    </CardText>
                    <CardActions border>
                    <a href="https://github.com/mullin-jason"  style={{color:'blue', padding: '1em'}} rel="noopener noreferrer" target="_blank">
                                GitHub 
                        </a>
                
                    </CardActions>
                </Card>



                <Card shadow={5} style={{height: '400px', width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '376px', background: 
                    'url(https://i.ibb.co/FbMcvM2/Screen-Shot-2020-05-26-at-1-40-54-PM.jpg) center / cover'}}>
                    </CardTitle>
                    <CardTitle>Music Website (Still In Development)</CardTitle>
                    <CardText style={{color: '#000', lineHeight: '20px', marginTop: '-1em',paddingBottom:'3em', fontSize:'15px'}}>
                    Personal project that is dedicated towards the appreciation of music. Using THREE.js and the Web Audio API to create 
                    a unique vizulaization of music the user selects.
                    </CardText>
                    <CardActions border>

                    </CardActions>
                </Card>
                </div>
                </Grid>
            )
        }
        else 
        {
            return (
                <div className="projects-grid">
                <Card shadow={5} style={{height: '400px', width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '220px', background: 
                    'url(https://i.ibb.co/4VDdcdD/life.png) center / cover'}}>
                    </CardTitle>
                    <CardTitle>Conways Game Of Life</CardTitle>
                    <CardText style={{color: '#000', lineHeight: '20px', marginTop:'-1em', fontSize:'15px'}}>
                     Pygame implementation of John Horton Conway's cellular automaton game of life.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/mullin-jason"  style={{color:'blue', padding: '1em'}} rel="noopener noreferrer" target="_blank">
                                GitHub 
                        </a>
                    </CardActions>
                </Card>



                <Card shadow={5} style={{height: '400px', width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '220px', background: 
                    'url(https://i.ibb.co/2gFk4MZ/departure.jpg) center / cover'}}>
                    </CardTitle>
                    <CardTitle>Airline Flight Scheduler</CardTitle>
                    <CardText style={{color: '#000', lineHeight: '20px', marginTop:'-1em', fontSize:'15px'}}>
                    Users load in a text file and will be presented with a command line GUI listing options on how to find certian flights. If I was to code this project today I would use and API instead of a text file and create an actual UI.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/mullin-jason"  style={{color:'blue', padding: '1em'}} rel="noopener noreferrer" target="_blank">
                                GitHub 
                        </a>
                    </CardActions>
                    </Card>




                <Card shadow={5} style={{height: '400px', width: '400px', margin: 'auto'}}>
                    <CardTitle style={{color: '#000', height: '376px', background: 
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDLd-bAsWW7LGHU1l4-fqZ1cViglglzR6dmEwlWTaE6BCPfG1f&usqp=CAU) center / cover'}}>
                    </CardTitle>
                    <CardTitle>Python Data Analysis</CardTitle>
                    <CardText style={{color: '#000', lineHeight: '20px',paddingBottom:'3em', fontSize:'15px'}}>
                        A collection of jupyter notebook's that show off common data analysis techniques.
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/mullin-jason"  style={{color:'blue', padding: '1em'}} rel="noopener noreferrer" target="_blank">
                                GitHub 
                        </a>

                    </CardActions>
                </Card>
                </div>
            )
        }
    }

   

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab style={{fontSize: '15px'}}>Web Apps</Tab>
                    <Tab style={{fontSize: '15px'}}>Python</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;