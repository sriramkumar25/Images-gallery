import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { Container,Row,Col } from 'react-bootstrap';
import ImageCard from './components/ImageCard';

const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

function App() {
  const [word, setWord] = useState('');
  const [images, setImages] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(word);
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{...data,title:word}, ...images]);
      })
      .catch((err) => {
        console.log(err);
      })
      setWord('')
  }
  const handleDeleteImage = (id)=>{
    setImages(images.filter((image)=>image.id!==id))
  }

  return (
    <div className="App">
      <Header />
      <Search word={word} setWord={setWord} handle={handleSubmit} />
      <Container className='mt-4'>
        <Row xs={1} md={2} lg={3}>
      {images.map((img,i)=>(
          <Col key={i} className='pb-4'>
        <ImageCard  image={img} deleteImage={handleDeleteImage}/>
        </Col>
      )
      )}
        </Row>
      </Container>
    </div>
  );
}

export default App;

