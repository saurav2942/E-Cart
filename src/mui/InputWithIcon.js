import React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function InputWithIcon() {

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <FormControl variant="standard">
        <Input
          placeholder="Enter Delivery Pincode"
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <LocationOnIcon className="text-blue-600" />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}