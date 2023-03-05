import React from 'react'
import styled from "styled-components";
import { Send } from "@material-ui/icons";
import NB from './Style.css';

const Container = styled.div`
  height: 60vh;
  background-color: #BFFF29;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Newslatter=() =>{
  return (
    <Container>
    <div className='Tt'>Newslatter</div>
    <h3 className="Desc">Iscrivi alla nostra Newslatter per gli aggiornamenti!</h3>
   
    <div className='inpcnt'>
    <input className='inp' placeholder="Your email" />
    <button className='button'>
    <Send />
    </button>
    
    </div>

    </Container>
  )
}

export default Newslatter