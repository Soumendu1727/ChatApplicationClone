
import { useContext } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { AccountContext } from '../../context/AccountPvd'

const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
`
const Image = styled('img')({
    width: 160,
    height: 160,
    borderRadius: '50%',
    padding: '2rem 0',
})

const BoxWrapper = styled(Box)`
    background: #FFFFFF;
    padding: 12px 30px 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    & :first-child{
        font-size: 13px;
        color: #009688;
        font-weight: 200;
    }
    & :last-child {
        margin: 14px 0;
        color: #4A4A4A;
    }
`

const Description = styled(Box)`
    padding: 15px 20px 28px 30px;

`
const Profile = () => {

    const { account } = useContext(AccountContext);
  return (
    <>
    <ImageContainer>
        <Image src={account.picture} alt='DP' />
    </ImageContainer>
    <BoxWrapper>
        <Typography>Your Name</Typography>
        <Typography>{account.name}</Typography>
    </BoxWrapper>
    <Description>
        <Typography>This is not your username or pin. This name will be visibla to you WhatsApp contacts.</Typography>
    </Description>
    <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Hey I am {account.name}</Typography>
    </BoxWrapper>
    </>
  )
}

export default Profile