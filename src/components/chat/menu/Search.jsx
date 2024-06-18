import React from 'react'
import { InputBase, Box, styled } from '@mui/material'
import { Search as SearchIcon } from '@mui/icons-material'

const Component = styled(Box)`
    background: #fff;
    height: 2rem;
    border-bottom: 1px solid #F2F2F2;
    padding: 0.5rem 0;
    display: flex;
    aligh-items: center;
`

const Wrapper = styled(Box)`
    background-color: #f0f2f5;
    position: relative;
    margin: 0 13px;
    width: 100%;
    border-radius: 0.5rem;

`

const Icon = styled(Box)`
    position: absolute;
    height: 100%;
    padding: 6px 10px;
    color: #919191;
`
const InputField = styled(InputBase)`
    width: 100%;
    padding: 16px;
    padding-left: 65px;
    height: 15px;
    font-size: 14px;

`
const Search = () => {
  return (
    <Component>
        <Wrapper>
            <Icon>
                <SearchIcon 
                    fontSize='small'
                />
            </Icon>
            <InputField
                placeholder='Search or Start new chat'
            />
        </Wrapper>
    </Component>
    
  )
}

export default Search