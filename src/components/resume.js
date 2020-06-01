import React, { useLayoutEffect, useState , Component } from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
import Education from './education';
import Courses from './courses';
import Skills from './skills';


function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  
function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return <span>Window size: {width} x {height}</span>;
  }


class Resume extends Component {
    render() {
        return(
            <div >
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img 
                            src={"/resume_3.png"}
                            alt="avatar"
                            style={{height: '300px'}}
                            />
                        </div>

                        <h1 style={{margin: '10px', paddingTop:'.5em'}}>Jason Mullin</h1>
                        <h2 style={{margin: '15px', color: 'grey',}}>Programmer</h2>
                        <hr style={{borderTop: '3px solid #833fb2', width:'70%'}}/>
                        <p style={{fontSize:'15px', lineHeight: '36px' , width: '65%', margin: 'auto', paddingTop: '.5em', paddingBottom:'.5em', paddingRight: '15em'}}>
                            Having just completed my undegraduate degree in Computer Science I look foward
                            to applying the fundementals Ive learned in the classroom and apply them to real world situations.
                            My hope is writing effiecient code that will be used to make the 
                            world a better place.
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'70%'}}/>
                        <h4>Phone</h4>
                        <p style={{fontSize: '20px'}}>(774) 413-0223</p>
                        <h4>Email</h4>
                        <p style={{fontSize: '20px'}}>jason_mullin@my.uri.edu</p>
                        <hr style={{borderTop: '3px solid #833fb2', width:'70%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 style={{fontSize:'35px'}}>Education</h2>
                        <Education 
                            startYear={2016}
                            endYear={2020}
                            schoolName={'University of Rhode Island'}
                            degree={'Bachelors in Computer Science'}
                        >
                        </Education>
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2 style={{fontSize: '35px'}}>Courses Taken</h2>
                        <Courses
                            startYear={2016}
                            endYear={2020}
                        >
                        </Courses>
                        <div className="course-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', color: 'white'}}>
                                    <i class="fa fa-terminal"></i>
                                            Operating Systems
                                        </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', color: 'white'}}>
                                    <i class="fa fa-sitemap"></i>
                                        Data Structures
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', color: 'white'}}>
                                    <i class="fa fa-laptop"></i>
                                        Software Engineering
                                        </ListItemContent>
                                </ListItem>



                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', color: 'white'}}>
                                    <i class="fa fa-object-group"></i>
                                        Dynamic Web Devoplment
                                        </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', color: 'white'}}>
                                    <i class="fa fa-database"></i>
                                          Data Science
                                        </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', color: 'white'}}>
                                    <i class="fa fa-quote-left"></i>
                                        Programming Languages
                                        </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', color: 'white'}}>
                                    <i class="fa fa-tablet"></i>
                                        Programming Abstractions
                                        </ListItemContent>
                                </ListItem>

                            </List>
                        </div>
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        
                    
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;