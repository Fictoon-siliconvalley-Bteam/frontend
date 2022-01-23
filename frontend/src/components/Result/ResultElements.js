import styled from 'styled-components'

export const ResultContainer = styled.div`
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')}; 

    @media screen and (max-width: 1800px){
        padding: 180px 0;
    }
`

export const Column2 =styled.div`
    padding: 0 15px;
    grid-area: col2;
`
export const ImgWrap = styled.div`
    max-width: 600px;
    display: block; margin: auto; 
    border-radius: 70%;
  }
  
`
export const Img = styled.img`
    width: 100%;
    height: 100%;
`

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`
export const Heading =styled.h1 `
    margin-bottom: 24px;
    font-size: 25px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText) ? '#010606' : '#fff'};
`