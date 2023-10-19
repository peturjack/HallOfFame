"use client"
import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 1.5rem;
  font-family: "Poppins";
  & > h4 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 25rem; /* Adjust this value to the width of your card or desired truncation width */
  }
`

export const Title = styled.h1`
  font-size: 1.8rem;
  font-family: "Poppins";
`;


export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const NextUpContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 2rem;
`
export const NextUpCard = styled.div`
  background-color: #ffffff;
  box-shadow: 2px 4px 3px rgba(139, 139, 139, 0.25);
  display:flex;
  flex-direction: column;
  padding:1.5rem;
  border-radius: 1.5rem;
`