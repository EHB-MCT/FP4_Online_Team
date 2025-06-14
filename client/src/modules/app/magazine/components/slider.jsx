import React from 'react';
import styled from 'styled-components';

const Input = () => {
  return (
    <StyledWrapper>
      <div className="PB-range-slider-div">
        <input type="range" min={0} max={100} defaultValue={50} className="PB-range-slider" id="myRange" />
        <p className="PB-range-slidervalue">50px</p>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .PB-range-slider {
    -webkit-appearance: none;
    width: 100%;
    height: 4px;
    border-radius: 5px;
    background: #D5DBE1;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
  }

  .PB-range-slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #000000;
    cursor: pointer;
    transition: 0.3s ease-in-out;
  }

  .PB-range-slider::-webkit-slider-thumb:hover {
    box-shadow: 0px 0px 0px 8px rgba(0, 0, 0, 0.16);
    transition: 0.3s ease-in-out;
  }

  .PB-range-slider::-moz-range-thumb {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #000000;
    cursor: pointer;
  }

  .PB-range-slider-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid #C6CACE;
    box-shadow: 0px 1px 2px 0px #1F1E241F;
  }

  .PB-range-slidervalue {
    font-weight: 600;
  }`;

export default Input;
