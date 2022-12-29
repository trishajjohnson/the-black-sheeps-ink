import React, { useState } from 'react';

import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function ProductFilter({handleChange, filter}) {

  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={filter}
          onChange={handleChange}
          label="filter"
        >
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="canvas">canvas</MenuItem>
          <MenuItem value="accessories">accessories</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default  ProductFilter;