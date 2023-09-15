import './App.css'
// import { useState } from 'react';

// React Component Test
// function TestButton() {
//   const [count, setCount] = useState(0);

//   function handleClick(){
//     setCount(count + 1);
//   }
//   return (
//     <>
//       <button onClick={handleClick}>Push This Button</button>
//       <p>You pushed me {count} times</p>
//     </>
//   ); 
// }

function PersonIntroCard(){
  return (
      <>
        <div className="image-cropper">
          <img src="/Josh_Lawrence_Headshot.JPG" alt="Picture" className="headshot"/>
        </div>
        <h1>Josh Lawrence</h1>
        <div className='icon-container'>
          <a className="social-media-icon" href="https://www.linkedin.com/in/josh-lawrence2020/" ><img src="/linkedin-svg.svg" alt="LinkedIn" className="social-media-icon" /></a>
          <a className="social-media-icon" href="https://github.com/josh-nj-lawrence"><img src="/github-mark.svg" alt="GitHub" className="social-media-icon" /></a>
        </div>
      </>
  );
}

function AboutMeCard(){
  return(
    <>
      <h3 className="heading">About Me</h3>
      <p>Hi, I'm Josh! Don't worry, I'm not a frontend dev. </p>
    </>
  );
}

// function HeaderSection(){
//   return(
//     <>
//       <h3 className="heading">heading</h3>
//       <p>content</p>
//     </>
//   );
// }

function App() {
  return (
    <>
      <PersonIntroCard/>
      <AboutMeCard/>

      <h3 className="heading">Education</h3>
      <ul>
        <li>Bachelor of Technology Automation Engineering McMaster University '22</li>
        <li>Presidents Award for Excellence in Student Leadership</li>
        <li>Attained Provost Award, the schools highest academic honors multiple times with a 3.94 cGPA</li>
      </ul>
      <h3 className="heading">Projects</h3>
      <ul>
        <li>This Website</li>
        <li>Other projects coming soon</li>
      </ul>
      <h3 className="heading">Skills</h3>
      <ul>
        <li>Python</li>
        <li>C/C++</li>
        <li>SQL</li>
        <li>HTML</li>
        <li>JSX</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git</li>
        <li>Linux</li>
        <li>Windows</li>
      </ul>
    </>
  )
}

export default App
