import './App.css';
import { useState } from 'react';

function App() {

  const [images, setImages] = useState([
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1569369906008-addfbef96993?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRlcnJvcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Imagen de muestra",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1639340644603-65db2318c598?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRlcnJvcnxlbnwwfDB8MHx8fDI%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Imagen de muestra",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1604005938644-af0e58cc81e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXRlcnJhZG9yfGVufDB8MXwwfHx8Mg%3D%3D&auto=format&fit=crop&w=900&q=60",
      alt: "Imagen de muestra",
    }
  ])

  const deleteImage = (id) => {
    setImages(images.filter(img => img.id !== id))
  }

  return (
    <div className="App">

    <h1>Image Gallery</h1>

      <div id="gallery">
        
        {images.map(img => (
          <div className="image">
            <img src={img.src} alt={img.alt} />
            <button onClick={() => deleteImage(img.id)} className="delete">Delete</button>
          </div>
        ))}

      </div>


    </div>
  );
}

export default App;
