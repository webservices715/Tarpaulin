import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import PhotoGallery from '../components/PhotoGallery'

function Gallery() {
  return (
    <div>
        <Breadcrumb title={"Gallery"}/>

        <PhotoGallery />
      
    </div>
  )
}

export default Gallery
