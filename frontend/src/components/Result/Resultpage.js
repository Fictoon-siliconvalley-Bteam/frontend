import axios from 'axios';
import React, {useState, useEffect} from 'react'
import {Img,Column2,ImgWrap,ResultContainer} from '../Result/ResultElements'
import Spinner from '../Spinner/Spinnerindex'

export default function Result(){
    const [image,setImage] = useState([]);
    const [loading,setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false);
    },3000);
   
    return (
        <ResultContainer>
         <Column2>
                <ImgWrap>
                {loading ? <Spinner /> :
                     <img src="https://fictoonimage.s3.ap-northeast-2.amazonaws.com/out.png.jpg"/>}
                </ImgWrap>
         </Column2>
         </ResultContainer>
    )
}

