import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStayle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'League Spartan', sans-serif;
    text-decoration: none;
    list-style: none;
    outline: none;
  }
`;

export const Container = styled.div`
  width: 70%;
  min-height: 600px;
  background: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 20px auto 0 auto;
  padding: 20px;
  text-align: center;
  font-size: 3rem;
  font-weight: 500;
  @media (min-height: 600px) {
    min-height: 900px;
  }
`;

export const NewTask = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 80%;
  height: auto;
  margin: 30px auto 30px auto;
  input {
    padding: 8px 24px;
    width: 300px;
    height: 40px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    border: none;
    font-weight: 500;
    font-size: 16px;

    &::placeholder {
      font-weight: 700;
      font-size: 16px;
    }
  }
  button {
    width: 112px;
    height: 30px;
    background: #da2535;
    border-radius: 10px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    color: #fbfbfb;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
    &:active {
      opacity: 0.6;
    }
  }
`;

export const Task = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px 0;
  li {
    padding: 13px 10px 13px 24px;
    width: 460px;
    min-height: 50px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  p {
    font-weight: 500;
    font-size: 1.25rem;
  }
  div {
    display: flex;
    gap: 0 10px;
  }
  .btnCompleted {
    background: #3a6604;
  }
  button {
    width: 30px;
    height: 30px;
    background: #da2535;
    border-radius: 10px;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: #fbfbfb;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.6;
    }
  }
`;
