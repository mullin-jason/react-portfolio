import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Jason Mullin</h2>
                        <img 
                            src={"/profile_pic.png"}
                            alt="avatar"
                            style={{height: '250px', padding: '1em', margin: 'auto'}}
                            />
                        <p style={{ width: '45%', lineHeight: '36px', margin: 'auto', paddingTop: '.5em', paddingBottom:'.5em'}}>
                        The best way to reach me is my cell.
                        Im also constantly checking my email so if you pefer to leave an electonic message 
                        that option is also available!
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (774) 413-0223
                                        </ListItemContent>
                                </ListItem>


                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                        <i className="fa fa-envelope" aria-hidden="true"/>
                                        jason_mullin@my.uri.edu
                                        </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;