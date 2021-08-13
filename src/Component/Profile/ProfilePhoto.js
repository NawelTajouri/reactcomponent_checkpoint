import React from "react";
import MyImage from './im_cv.jpg';
import './style.css';
const ImageProfile = () => {
 return (
   <>
     <img src= { MyImage } alt="profile" style={{maxWidth:'250px'}} />
   </>
 );
};
export default ImageProfile;