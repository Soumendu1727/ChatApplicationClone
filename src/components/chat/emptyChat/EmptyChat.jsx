import { Box, styled } from '@mui/material'
import React from 'react'
import { emptyChatImage } from '../../../constants/Data'

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100%;
`
const Container = styled(Box)`
    padding: 0 200px;
`
const Image = styled('img')({
    height: '20rem',
    width: '20rem',
    textAlign: 'center',
    padding: '8.1rem'

})

const EmptyChat = () => {
  return (
    <Component>
        <Container>
            <Image src={emptyChatImage} alt='EmptyImage' />
        </Container>
    </Component>

  )
}

export default EmptyChat