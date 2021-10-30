import React, { Component } from 'react';
import {AppBar, Grid, TextField, Checkbox} from '@material-ui/core';
import Image from 'material-ui-image';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

export class CustomerInfo extends Component  {
    
render(){

  let handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  return (
      
  
    <MuiThemeProvider>
      <div style = {{marginLeft: 50, marginRight:50, marginTop: 20}} className = "container" >
        <Grid container spacing = {5}>
          <Grid item xs = {4} md = {3} style = {{ gridRow: 1/3, }}> 
            <Image src = '../images/logo512.png'/>
          </Grid>

          <Grid item md = {9}>
            <Grid container spacing = {5,4}>
              <Grid item xs = {7} md = {4}> 
                <TextField                  
                  placeholder="Enter Your First Name"
                  label="First Name"
                  margin="normal"
                  fullWidth
                />
              </Grid>

              <Grid item xs = {7} md = {4}> 
                <TextField                  
                  placeholder="Enter Your Middle Name"
                  label="Middle Name"
                  margin="normal"
                  fullWidth
                />
              </Grid>

              <Grid item xs = {7} md = {4}> 
                <TextField                  
                  placeholder="Enter Your Last Name"
                  label="Last Name"
                  margin="normal"
                  fullWidth
                />
              </Grid>
          

          
              <Grid item xs = {7} md = {4}> 
                <TextField                  
                  placeholder="Enter City"
                  label="City"
                  margin="normal"
                  fullWidth
                />
              </Grid>

              <Grid item xs = {7} md = {4}> 
                <TextField                  
                  placeholder="Enter State"
                  label="State"
                  margin="normal"
                  fullWidth
                />
              </Grid>

              <Grid item xs = {7} md = {4}> 
                <TextField                  
                  placeholder="Enter Postal Address"
                  label="Postal Address"
                  margin="normal"
                  fullWidth
                />
              </Grid>


              <Grid item xs = {7} md = {4}> 
                <TextField                  
                  placeholder="Enter Company"
                  label="Company"
                  margin="normal"
                  fullWidth
                />
              </Grid>

              <Grid item xs = {7} md = {4}> 
                <TextField                  
                  placeholder="Enter Type"
                  label="Type"
                  margin="normal"
                  fullWidth
                />
              </Grid>

              <Grid item xs = {11} md = {4}> 
                <TextField                  
                  placeholder="Enter Address"
                  label="Address"
                  margin="normal"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div style = {{marginLeft:100, marginRight: 50, marginTop: 20 }}>
        <Grid container spacing = {5,4} direction = "row" justifyContent="centre" alignItems="centre">
          
          <Grid item xs = {8} md = {6}>
            <TextField
              placeholder="Enter Name"
              label="Name"
              margin="normal"
              fullWidth
            />
          </Grid>

          <Grid item xs = {2}>
            <Checkbox {..."Name"} style = {{marginTop: 20}}/>
          </Grid>

          <Grid item xs = {8} md = {4}>
            <TextField
              placeholder="Enter Date (DD/MM/YYYY)"
              label="Anniversary Date"
              margin="normal"
              fullWidth
            />
          </Grid>

          <Grid item xs = {8} md = {6}>
            <TextField
              placeholder="Enter Work"
              label="Work"
              margin="normal"
              fullWidth
            />
          </Grid>

          <Grid item xs = {2}>
            <Checkbox {..."Work"} style = {{marginTop: 20}}/>
          </Grid>

          <Grid item xs = {8} md = {4}>
            <TextField
              placeholder="Enter Date (DD/MM/YYYY)"
              label="Birth Date"
              margin="normal"
              fullWidth
            />
          </Grid>

          <Grid item xs = {8} md = {6}>
            <TextField
              placeholder="Enter Mobile"
              label="Mobile"
              margin="normal"
              fullWidth
            />
          </Grid>

          <Grid item xs = {2}>
            <Checkbox {..."Mobile"} style = {{marginTop: 20}}/>
          </Grid>

          <Grid item xs = {8} md = {4}>
            <TextField
              placeholder="Enter Gender"
              label="Gender"
              margin="normal"
              fullWidth
            />
          </Grid>

          <Grid item xs = {8} md = {6}>
            <TextField
              placeholder="Enter Email"
              label="Email"
              margin="normal"
              fullWidth
            />
          </Grid>

          <Grid item xs = {2}>
            <Checkbox {..."Email"} style = {{marginTop: 20}}/>
          </Grid>

          <Grid item xs = {8} md = {4}>
            <TextField
              placeholder="Enter Languages"
              label="Languages"
              margin="normal"
              fullWidth
            />
          </Grid>
        </Grid>

      </div>
      
    </MuiThemeProvider>
  );
  }
}

export default CustomerInfo;