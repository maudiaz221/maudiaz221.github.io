import React from "react";
import styled from "styled-components";
import { Title } from "./globalStyledComponents";
import { Element } from "react-scroll";


const StyledInterests = styled.section`
padding: 4rem 0;
  text-align: center;

  .section-subtitle {
    margin-bottom: 6px;
    font-weight: 400;
    opacity: 0.6;
  }

  .interest-card {
    margin-bottom: 2rem;
    border: 2px solid ${({ theme }) => theme.color};
    border-radius: 8px;

    .body {
      position: relative;
      padding: 100px 20px; /* Adjust the padding to make the square bigger in height */

      img {
        max-width: 100%;
        height: 200px;
        border-radius: 8px;
        border: 2px solid ${({ theme }) => theme.color};
        margin-bottom: 1rem;
      }

      h6 {
        margin-top: 0; /* Adjusted to stick to the upper edge */
        margin-bottom: 0;
      }

      .hidden-text {
        margin: 2px;
        opacity: 0;
        font-size: 14px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%) translateY(100%);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
      }

      &:hover .hidden-text {
        opacity: 0.9;
        transform: translateX(-50%) translateY(0);
      }
    }
  }
`;


const Interests = () => {
  return (
    <StyledInterests className="section" id="interests">
      <div className="container text-center">
      <Element name="Interests" id="interests">
      <Title>
            <h2>Interests</h2>
            <div className="underline"></div>
     </Title>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <div className="interest-card">
              <div className="body">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Interest 1"
                  className="icon"
                />
                <h6 className="title">Basketball</h6>
                <p className="hidden-text">
                  Me encanta jugar basketball, soy penesoso.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="interest-card">
              <div className="body">
                <img
                  src="https://i.pinimg.com/1200x/2b/09/8f/2b098f7243861b310178b9b08e643e0b.jpg"
                  alt="Interest 2"
                  className="icon"
                />
                <h6 className="title">Videojuegos</h6>
                <p className="hidden-text">
                  Me gustan los videojuegos, como league of legends y rocket league.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="interest-card">
              <div className="body">
                <img
                  src="https://render.fineartamerica.com/images/rendered/default/poster/6.5/8/break/images/artworkimages/medium/3/computer-programmer-showing-coding-word-drawing-frank-ramspott.jpg"
                  alt="Interest 3"
                  className="icon"
                />
                <h6 className="title">Programación</h6>
                <p className="hidden-text">
                  Me encanta programar y aprender cosas nuevas en el mundo de programación.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3">
            <div className="interest-card">
              <div className="body">
                <img
                  src="data:image/jpeg;base64,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"
                  alt="Interest 4"
                  className="icon"
                />
                <h6 className="title">Tejido</h6>
                <p className="hidden-text">
                  Me gustaa ir a clases de tejido, es una actividad que me relaja.
                </p>
              </div>
            </div>
          </div>
        </div>
       </Element>
      </div>
    </StyledInterests>
  );
};

export default Interests;
