import React,{useState} from 'react'
import video from '../../videos/video.mp4'
import {Button} from '../ButtonElement'
import { Link } from 'react-router-dom'
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover,setHover]= useState(false)
    const onHover = ()=> {
        setHover(!hover)
    }
    
    return (
        
        <HeroContainer>
            <HeroBg></HeroBg>
                <VideoBg autoPlay loop muted src={video} type='video/mp4'>
                <source src="\videos\video.mp4" />
                </VideoBg>
            <HeroContent>
                <HeroH1>Upload your photos</HeroH1>
                <HeroP>
                   배경사진과 얼굴사진을 업로드 해보세요!
                </HeroP>
                <HeroBtnWrapper>
                    
                   <Button type="button" onClick='www.google.com' onMouseEnter={onHover} onMouseLeav={onHover} primary="true" dark="true" >
                        START {hover ? <ArrowForward/> : <ArrowRight /> }
                    </Button>

                </HeroBtnWrapper>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
