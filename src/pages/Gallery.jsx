import React, { useEffect } from "react";

import Breadcrumb from '../components/Breadcrumb'
import PhotoGallery from '../components/PhotoGallery'

function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 
  return (
    <div>
        <Breadcrumb title={"Gallery"}/>

        <PhotoGallery />
      
    </div>
  )
}

export default Gallery
