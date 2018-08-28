import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField'

import IconSearch from '@material-ui/icons/Search';
import IconFingerprint from '@material-ui/icons/Fingerprint';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import {SignUpModal}  from '../../authentication';


import {withStyles} from '@material-ui/core/styles';
import styles from './nav-bar.scss';

import {Link} from 'react-router-dom';

const style = {
		root: {
				backgroundColor: '#fff',
				boxShadow: 'none'
		}
};

class NavBar extends React.Component {
		state = {
				checked: false,
				isSignUpOpen: false
		};

		openSignUpModal = () => {
				this.setState({isSignUpOpen: true});
		}

		closeSignUpModal = () => {
				this.setState({isSignUpOpen: false})
		}

		// toggleSearch = () => {
		// 		this.state.checked = !this.state.checked;
		// 		this.setState(this.state);
		// }

		render () {
				return (
						<AppBar classes={{root: this.props.classes.root}} position="sticky">
								<Toolbar className="navBar">
                    <Hidden xsDown>
												<div className="navBar_item navBar_item--centered">
														About Membership
												</div>
                    </Hidden>
										<h1 className="navBar_item navBar_title navBar_item--centered">
												Medium
										</h1>
										<div className="navBar_item navBar_item--centered">
												{/*<IconButton onClick={this.toggleSearch}>*/}
												{/*<IconSearch/>*/}
												{/*</IconButton>*/}
												{/*<Slide direction={'right'} in={this.state.checked}>*/}
												{/*<form>*/}
												{/*<TextField placeholder={'Search...'}/>*/}
												{/*</form>*/}
												{/*</Slide>*/}
												<Hidden xsDown>
														<Button variant="outlined" color="primary" onClick={this.openSignUpModal}>
																<Typography>
																		Sign Up
																</Typography>
														</Button>
														<SignUpModal isOpen={this.state.isSignUpOpen} onClose={this.closeSignUpModal}/>
												</Hidden>
												<Hidden smUp>
														<Button component={Link} to="/login" variant="outlined" color="primary">
																<Typography>
																		Sign Up
																</Typography>
														</Button>
												</Hidden>
										</div>
								</Toolbar>
						</AppBar>
				);
		}
}

export default withStyles(style)(NavBar);
