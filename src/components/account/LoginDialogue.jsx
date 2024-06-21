import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
import  { jwtDecode } from 'jwt-decode'
import { Dialog, Box, styled,  } from '@mui/material'
import { useContext } from 'react'
import { AccountContext } from '../../context/AccountPvd'
import { addUser } from '../../service/Api';


const dialogStyle = {
    height: '60%',
    boxShadow: 'none',
    width: '50%',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'none',
    
}

const Component = styled(Box)`
   line-height: 200px;
   height: 200px;
   text-align: center;
   font-size: 1.2rem;
`
const StyledBox = styled(Box)`
    display: flex;
    justify-content: center;

`

const LoginDialogue = () => {
    
    const { setAccount } = useContext(AccountContext)

    const onLoginSuccess = async (res) => {
        const decode = jwtDecode(res.credential);
        setAccount(decode);
        console.log(decode);
        await addUser(decode)
        // console.log(res.credential);
    }

    const onLoginError = (res) =>  {
        console.log('Error', res);
    }

  return (
    <Dialog
    open = {true}
    PaperProps={{ sx: dialogStyle}}
    hideBackdrop={true}
    >
     <Component>
        Chat Application
     </Component>
     <StyledBox>
        <GoogleLogin
            onSuccess={onLoginSuccess}
            onError={onLoginError}
        />
     </StyledBox>
    
    </Dialog>
  )
}

export default LoginDialogue