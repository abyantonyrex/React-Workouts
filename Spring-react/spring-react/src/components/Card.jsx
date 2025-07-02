import React from 'react';
import styled from 'styled-components';

const Card = ({username,userUserName,userpassword,userlocation,nav}) => {
  return (
    <StyledWrapper>
      <div className="container">
        <div className="card" >
      <p className='fs-3 fw-bold p-4  '>The Name is {username}</p>
        <p className='fs-3 fw-bold p-4  '>The UserName is {userUserName}</p>
        <p className='fs-3 fw-bold p-4  '>The User password is {userpassword}</p>
        <p className='fs-3 fw-bold p-4  '>The User location is {userlocation}</p>
      <button type="button" className="btn btn-danger " width ="25px" onClick={() => {nav('/'); }}>Back to Home</button>
      </div> 
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
.container{
  display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

  .card {
  display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: auto;
   height: auto;
   border-radius: 30px;
   color: white;
   background: #212121;
   box-shadow: 15px 15px 30px rgb(25, 25, 25),
               -15px -15px 30px rgb(60, 60, 60);
               margin-top: 50px;
               padding: 30px;
  }`;

export default Card;
