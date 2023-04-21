import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';

function App() {
  const[word,setWord]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(word);
  }
  
  return (
    <div className="App">
      <Header />
      <Search word1={word} word2={setWord} handle={handleSubmit}/>
    </div>
  );
}

export default App;

