import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material'
import LoginDialogue from '../account/LoginDialogue'


const Header = styled(AppBar)`
  height: 11rem;
  background-color: #00bfa5;
`
const Messenger = () => {
  return (
    <>
      <Header>
        <Toolbar>

        </Toolbar>
      </Header>
      <LoginDialogue/>
    </>
  )
}

export default Messenger