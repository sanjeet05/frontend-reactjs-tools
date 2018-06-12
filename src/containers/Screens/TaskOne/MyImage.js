import React, { Component, Fragment } from 'react';
import { Image } from 'react-bootstrap';

const MyImage = (props) => {
  const imgStyle = {
    height: 'auto',
    width: '100%',
    maxWidth: props.width+'px',
    maxHeight: props.height+'px',
  };
  return(
    <Fragment>
      <div>
         {/* <img src={props.url} alt="" style={imgStyle}/>  */}
         <Image src={props.url} alt="" style={imgStyle} thumbnail />
      </div> 
    </Fragment>
  );
};

export default MyImage;
