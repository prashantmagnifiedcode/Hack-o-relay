import {React,useState} from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';
// import Event from "./components/Event";
import Team from './components/Team';
import Aboutus from './components/Aboutus';
import REvent from './components/REvent';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import  {useDarkMode} from "./components/useDarkMode"
import Toggle from "./components/Toggler"
import Hack_o_relay from './components/Hack_o_relay';
const App = () => {
 
  const [theme, themeToggler, mountedComponent,tsrc,team,handshake] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

if(!mountedComponent) return <div/>
  return (
    <ThemeProvider theme={themeMode}>
    <>
    <GlobalStyles/>
    <div style={{width:"100%"}}>
   
      {/* <h1>Hello aliens this is DSC-DCE</h1> */}
      <Navbar/>
      <Toggle theme={theme} toggleTheme={themeToggler} tsrc={tsrc}/>
      <Route exact path="/">
        <Aboutus  theme={theme} handshake={handshake} team={team}/>
      </Route>
      

      <Route path="/events">
        {/* <Event /> */}
        <REvent  theme={theme}/>
      </Route>
      <Route path="/Hack_o_relay">
        {/* <Event /> */}
        <Hack_o_relay />
      </Route>

      <Route path="/team">
        <Team  theme={theme}/>
      </Route>

      <Footer/>
    </div>
    </>
    </ThemeProvider>
  )
}

export default App
