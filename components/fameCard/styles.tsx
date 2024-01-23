import styled from "styled-components";
import starimg from "@/public/star.svg";


type TitleProps = {
    isShown: boolean;
  }

export const GuideCardContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  
`


export const CardInfo = styled.div`
  box-shadow: 2px 3px 3px 2px rgba(196, 186, 186, 0.25);
  width: 24rem;
  height: 20rem;
  border-radius: 2rem ;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-position: center;
  background-color: #a5a6f6;
  background-image: url('star.svg'); 
  background-repeat: no-repeat;
  
   `

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: "Poppins";
  font-weight: 500;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TitleWrapper = styled.div`
  position: relative;
  text-align: center;
  padding: 2rem;
`

export const Description = styled.h2<TitleProps>`
  font-size: 1.5rem;
  font-family: "Poppins";
  transition: opacity 0.3s; // Add the transition effect
  position: absolute;
  text-align: center;
  padding: 1rem;
`

export const DefaultDescription = styled(Description)`
  opacity: ${({ isShown }) => (isShown ? "1" : "0")};
`
export const HoveredDescription = styled(Description)`
  opacity: ${({ isShown }) => (isShown ? "1" : "0")};
`