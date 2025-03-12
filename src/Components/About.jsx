import React from 'react'
import { Outlet } from 'react-router-dom'
import Profile from './ProfileClass'

// const About = () => {
//   return (
//     <>
//     <div style={{marginTop: '200px'}}>About</div>
//     {/* <Outlet name={'Test'} /> */}
//     <Profile name="test" />
    
//     </>
//   )
// }

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <>
      <div style={{marginTop: '200px'}}>About</div>
      {/* <Outlet name={'Test'} /> */}
      <Profile name="test" />
      
      </>
    )
  }
}

export default About