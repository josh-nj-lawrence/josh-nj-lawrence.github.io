import './App.css'

// React Component Test
function TestButton() {
  return (
    <button onClick={() => alert('This is a button!')}>Push Me</button>
  ); 
}

function App() {
  return (
    <>
      <div className="image-cropper">
        <img src="/Josh_Lawrence_Headshot.JPG" alt="Picture" className="headshot"/>
        </div>
      <h1>Welcome to My Website</h1>
      <h3>About Me</h3>
      <p>Hi, I'm Josh! Don't worry, I'm not a frontend dev. </p>
      <h3>Accomplishments</h3>
      <ul>
        <li>Presidents Award</li>
        <li>Provost Award and cGPA</li>
      </ul>
      <h3>Projects</h3>
      <ul>
        <li>This Website</li>
        <li>Other projects coming soon</li>
      </ul>
      <div className="card">
        <p>
          Come back soon to learn more about me, Josh Lawrence
        </p>
      </div>
      <p className="read-the-docs">
        Soon I will share a bit about me and what it is I do!
      </p>
      <TestButton />
    </>
  )
}

export default App
