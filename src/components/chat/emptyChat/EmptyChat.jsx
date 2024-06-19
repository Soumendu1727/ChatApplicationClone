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
    width: 400,
    marginTop: 100,
    padding: '8rem'
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