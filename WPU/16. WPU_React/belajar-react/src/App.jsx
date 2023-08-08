import { useState } from 'react'
import Header from './components/Header';

function App() {
  const students = ['adhim', 'shani', 'ashel'];
  const [likes, setLikes] = useState(0);

  function handleClick() {
      setLikes(likes + 1);
  }

  return(
      <>
          <Header />
          <Header name="Ngab" />

          <ul>
              {
                  students.map((student) => (
                      <li key={student}>{student}</li>
                  ))
              }
          </ul>

          <button onClick={handleClick}> Likes ({likes}) </button>

      </>
  )
}

export default App
