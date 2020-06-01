import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Courses extends Component {
    render(){
        return (
            <Grid>
                <Cell col={4}>
                    <p style={{fontSize: '20px', margin: '10px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}> 
                    <h2 style={{fontSize: '20px', margin: '10px'}}>{this.props.jobName}</h2>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Courses;