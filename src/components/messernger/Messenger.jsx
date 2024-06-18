import React from "react";
import { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import LoginDialogue from "../account/LoginDialogue";
import Chat from "../chat/Chat";

import { AccountContext } from "../../context/AccountPvd";

const Header = styled(AppBar)`
  height: 11rem;
  background-color: #00bfa5;
`;
const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;
const Messenger = () => {

  const {account} = useContext(AccountContext)

  return (
    <Component>
      {account ? <Chat />
       :
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <LoginDialogue />
        </>
      }
    </Component>
  );
};

export default Messenger;
