import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class Education extends Component {
    render(){
        return (
            <Grid>
                <Cell col={4}>
                    <p style={{fontSize: '20px', margin: '30px'}}>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}> 
                    <h2 style={{fontSize: '30px', margin: '25px'}}>{this.props.schoolName}</h2>
                    <h3 style={{fontSize: '20px', margin: '45px'}}>{this.props.degree}</h3>
                    <p>{this.props.schoolDescription}</p>

                </Cell>
            </Grid>
        )
    }
}

export default Education;