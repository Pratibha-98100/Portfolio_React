import React from "react";
import styled from "styled-components";
import { experiences } from "../../Data/constants";
import ExperienceCard from "../Cards/ExperienceCard";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  &::after {
    content: "";
    display: block;
    width: 56px;
    height: 4px;
    margin: 12px auto 0;
    border-radius: 4px;
    background: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 17px;
  line-height: 1.6;
  text-align: center;
  font-weight: 400;
  max-width: 640px;
  padding: 0 16px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My professional journey — building secure, AI-powered SaaS products
          and the training that got me started.
        </Desc>

        <VerticalTimeline layout="1-column-left" lineColor="#E4DEFA">
          {experiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;