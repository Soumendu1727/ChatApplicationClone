import React, { useState } from 'react'

import{ MoreVert } from'@mui/icons-material'
import{ Menu, MenuItem } from '@mui/material'

const HeaderMenu = () => {
    const [open, SetOpen] = useState(null);
    const handleClose = () => {
        SetOpen(false);
    }
    const handleClick = (e) => {
        SetOpen(e.currentTarget);
    }
  return (
    <>
    <MoreVert onClick={handleClick}/>
    <Menu
        id="basic-menu"
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorE1={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
        

    
    </>
  )
}

export default HeaderMenu