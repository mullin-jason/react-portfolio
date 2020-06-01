import React , { useLayoutEffect, useState } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';



function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  
function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return <span>Window size: {width} x {height}</span>;
  }


function App() {
  return (

    <div className="demo-big-content">
    <Layout>
    <Header className="header-color"  title={<Link style={{fontSize: '25px',textDecoration: 'none', color: 'white'}} to="/">Jason Mullin</Link>}scroll>
            <Navigation> 
                <Link to="/projects" style={{fontSize: '25px'}}>Projects</Link>
                <Link to="/resume"   style={{fontSize: '25px'}}>Resume</Link>
                <Link to="/contact"  style={{fontSize: '25px'}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Jason Mullin">
            <Navigation>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
  </div>
  );
}

export default App;
