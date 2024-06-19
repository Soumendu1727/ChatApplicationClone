import React from "react";
import { Box, styled } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountPvd";
import { Chat as MessageIcon } from '@mui/icons-material'
import HeaderMenu from "./HeaderMenu";

const Component = styled(Box)`
    background: #ededed;
    height: 2rem;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    
`

const Image = styled('img')({
    height: 30,
    width: 30,
    borderRadius: '50%'

})

const Wrapper = styled(Box)`
    margin-left: auto;
    & > * {
        margin-left: 2px;
        padding: 8px;
        color: #000;
    }
    & :first-child{
        margin-top: 10px;
        font-size: 21px;
    }
`

    
const Header = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Component>
        <Image src={account.picture} alt="DP" />
        <Wrapper>
            <MessageIcon />
            <HeaderMenu />
        </Wrapper>
      </Component>
    </>
  );
};

export default Header;
