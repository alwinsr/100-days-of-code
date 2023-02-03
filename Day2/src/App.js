import React, { useEffect, useState } from 'react';
import './App.css';
import { Heading } from './components/Heading';
import { Loader } from './components/Loader';
import { UnsplashImage } from './components/UnsplashImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';


function App() {

  const [images, setImages] = useState([]);

  useEffect(() => {
     getImages();
  }, [])

    const getImages = () =>{
      const apiRoot = "http://api.unsplash.com";
      // const accessKey = process.env.ACCESSKEY;

      axios
        .get(`${apiRoot}/photos/random?client_id=0LnshcTxWWh5ecwd3Nl6_8RsBT4ukdWsym8CzvFTQyk&count=10`)
        .then(res => setImages([...images, ...res.data]) )
        .catch(error => console.error(error));
      }

  return (
    <div className="App">
      <Heading/>
      <InfiniteScroll
      dataLength={images.length} 
      next={getImages}
      hasMore={true}
      loader={<Loader/>}
      >
      <div className='img-gallery'>
        {images.map(image =>(
          <UnsplashImage url={image.urls.thumb} key={image.id}/>
        ))}
      </div>
      </InfiniteScroll>
    </div>
  );

}

export default App;
