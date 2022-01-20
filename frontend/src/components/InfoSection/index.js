import React from 'react'
import { Link } from 'react-router-dom'
import { InfoContainer,InfoWrapper,InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,ImgWrap,Img,IntroBlock,buttonlink} from './InfoElements'
import Axios from 'axios'


const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,alt}) => {

    let formData = new FormData();
    const onFileChange = (e) => {
        console.log(e.target.files[0]);
        if(e.target && e.target.files[0]){
            formData.append('file',e.target.files[0]);
        }
    }

    const SubmitFileData = () => {
        Axios.post(
            'api',
            {formData}
        )
        .then(url => {
            console.log(url);
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    return (
        <>
          <InfoContainer lightBg={lightBg} id={id}>
          <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                    <IntroBlock>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            
                            <label className="input-file-button" for="input-file">
                                배경 사진 업로드
                            </label>
                            <input type="file" id="input-file" style={{display:"none"}}  
                            accept='image/jpg,impge/png,image/jpeg,image/gif' 
                            name='files' 
                            onChange={onFileChange}
                        /> <nbsp/>
                               
                            <label className="input-file-button" for="input-file">
                                얼굴 사진 업로드
                            </label>
                           <input type="file" id="input-file" style={{display:"none"}}  
                            accept='image/jpg,impge/png,image/jpeg,image/gif' 
                            name='files2' 
                            onChange={onFileChange}
                           />
                            <br/><br/> <br/>
                            
                            <Link to='/result' onClick={SubmitFileData}>Start</Link>
                           
                         </IntroBlock>
                    </TextWrapper>
                    
                </Column1> 
                <Column2>
                    <ImgWrap>
                    <Img src={require('../../images/svg-3.svg').default} alt={alt} />
                    </ImgWrap>
                </Column2>
            </InfoRow>   
          </InfoWrapper>    
          </InfoContainer> 
        
        </>
    )
}

export default InfoSection
