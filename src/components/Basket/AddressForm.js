import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useStateValue } from '../../StateProvider';
import { Button } from 'bootstrap';
import Review from './Review';



export default function AddressForm() {
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[address1,setAddress1]=useState('')
    const[address2,setAddress2]=useState('')
    const[city,setCity]=useState('')
    const[province,setProvince]=useState('')
    const[zip,setZip]=useState('')
    const[country,setCountry]=useState('')

   
    const addShipping=({fname,lname})=><Review fname={fname} lname={lname}/>


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            value={fname}
            onChange={e=>setFname(e.target.value)}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            value={lname}
            onChange={e=>setLname(e.target.value)}
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            value={address1}
            onChange={e=>setAddress1(e.target.value)}
            fullWidth
            autoComplete="shipping address-line1"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            value={address2}
            onChange={e=>setAddress2(e.target.value)}
            fullWidth
            autoComplete="shipping address-line2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            value={city}
            onChange={e=>setCity(e.target.value)}
            fullWidth
            autoComplete="shipping address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="state"
           name="state" 
           label="State/Province/Region" 
           value={province}
           onChange={e=>setProvince(e.target.value)}
           fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            value={zip}
            onChange={e=>setZip(e.target.value)}
            fullWidth
            autoComplete="shipping postal-code"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            value={country}
            onChange={e=>setCountry(e.target.value)}
            autoComplete="shipping country"
          />
        </Grid>
        <Grid item xs={12}>
                <Grid item xs={6} >
                <FormControlLabel
                    control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
                    label="Use this address for payment details"
                />
                </Grid>
                <Grid item xs={6} >
                    <button onClick={()=>addShipping(fname,lname)}>Add Address</button>
                </Grid>    
            
        </Grid>
      </Grid>
    </React.Fragment>
  );
}