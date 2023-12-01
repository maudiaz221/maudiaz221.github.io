// Article.jsx

import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { Container, Row, Col } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledArticle = styled.section`
  /* Add your styles for the Article section */
  /* Example styles: */
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  text-align: center; /* Center the text */

  .block {
    /* Add styles for the blocks with images and links */
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      /* Style for the images */
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      /* Outline the image block in the shape of a square */
      border: 2px solid ${({ theme }) => theme.color};
      margin-bottom: 1rem;
    }

    a {
      /* Style for the article links */
      color: var(--primary);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Article = () => {
  return (
    <Element name="Article" id="article">
      <StyledArticle className="section">
        <Container>
          <Title>
            <h2>Blog</h2>
            <div className="underline"></div>
          </Title>
          {/* Add your content here */}
          <Row>
            <Col>
              <h3>Deep Learning</h3>
              <p>Opiniones sobre modelos en deep learning y su impacto</p>
              <div className="block">
                <img src="https://www.iberdrola.com/documents/20125/40126/Deep_Learning_746x419.jpg/6f72011f-444c-bbfc-9d43-659d463a22c3?t=1626932434616" alt="Article Image 1" />
                <a href="https://www.linkedin.com/posts/mauricio-diaz-433699263_activity-7136428710349434880-HFHN?utm_source=share&utm_medium=member_desktop">Read Article</a>
              </div>
            </Col>
          </Row>
        </Container>
      </StyledArticle>
    </Element>
  );
};

export default Article;
