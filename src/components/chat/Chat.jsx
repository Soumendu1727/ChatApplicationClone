import React from 'react'
import { Dialog, Box, styled } from '@mui/material'
import Menu from './menu/Menu'
import EmptyChat from './emptyChat/EmptyChat'

const dialogStyle = {
    height: '95%',
    boxShadow: 'none',
    width: '100%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'none',
    margin: '1rem'
}

const Component = styled(Box)`
    display: flex;
`
const LeftComponent = styled(Box)`
    min-width: 25rem;
`
const RightComponent = styled(Box)`
    width: 73%;
    min-width: 17rem;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14)
`
const Chat = () => {
  return (
    <Dialog
    open = {true}
    PaperProps={{ sx: dialogStyle}}
    hideBackdrop={true}
    maxWidth={'md'}
    >
        <Component>
            <LeftComponent>
                <Menu />
            </LeftComponent>
            <RightComponent>
                <EmptyChat />
            </RightComponent>
        </Component>

    </Dialog>
  )
}

export default Chat