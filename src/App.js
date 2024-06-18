// import logo from './logo.svg';
// import './App.css';

import { GoogleOAuthProvider } from "@react-oauth/google";
import Messenger from "./components/messernger/Messenger";
import AccountPvd from "./context/AccountPvd";

function App() {
  const clientId = '211741511092-gg9oi3j8esehf829nl50q2rulbde8rkh.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountPvd>
        <Messenger/>
      </AccountPvd>
    </GoogleOAuthProvider>
  )
}

export default App;
