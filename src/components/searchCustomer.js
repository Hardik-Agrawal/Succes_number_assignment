import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


export class SearchCustomer extends Component {
    state = {
        phone: '',
        firstName: '',
        lastName: '',
        city: '',
        state: '', 
        postal_code: '',
        loyality_num: '',
        customer_num: '',
    };

    submit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {

    
      let handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };
    
    // const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    return (
        
    
      <MuiThemeProvider>
        <>
          <div className = "container" style = {{marginLeft: 50, marginRight: 50}}>
            <AppBar title="Enter User Details" />
            <TextField
              placeholder="Enter Phone Number"
              label="Phone number"
              onChange={handleChange('phone')}
              defaultValue={values.phone}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Last Name"
              label="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter City"
              label="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Enter State"
              label="State"
              onChange={handleChange('state')}
              defaultValue={values.state}
              margin="normal"
              fullWidth
            />
            <br /><br /><br /><br />

            <TextField
              placeholder="Enter Postal Code"
              label="Postal Code"
              onChange={handleChange('postal_code')}
              defaultValue={values.postal_code}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Enter Loyality Number"
              label="Loyality Number"
              onChange={handleChange('loyality_num')}
              defaultValue={values.loyality_num}
              margin="normal"
              fullWidth
            />
            <br />

            <TextField
              placeholder="Enter Customer Number"
              label="Customer Number"
              onChange={handleChange('customer_num')}
              defaultValue={values.customer_num}
              margin="normal"
              fullWidth
            />
            <br />            
            
            <br />
            <Button
              color="primary"
              variant="contained"
              onClick={this.submit}
            >Submit</Button>
            </div>
          </>
      </MuiThemeProvider>

    );
  }
}

export default SearchCustomer;