import React from "react";
import styled from "styled-components";
import { skills } from "../../Data/constants";
import { Tilt } from "react-tilt";

const Container = styled.div`
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

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  margin-top: 20px;
  gap: 32px;
  padding: 0 16px;
  & > div {
    height: 100%;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
const Skill = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 20px;
  padding: 24px 32px;
  transition: box-shadow 0.3s ease-in-out;
  &:hover {
    box-shadow: ${({ theme }) => theme.shadow_hover};
  }

  @media (max-width: 500px) {
    padding: 18px 16px;
  }
`;

const SkillTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.primary};
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) => theme.bg};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 10px 14px;
  transition: all 0.2s ease-in-out;
  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) => theme.primary_soft};
  }
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          The tools and technologies I use to build secure, scalable products
          — sharpened over 2+ years of hands-on work.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt key={`skill-${index}`}>
              <Skill>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem key={`skill-x-${index_x}`}>
                      {item.image && (
                        <SkillImage
                          src={item.image}
                          alt=""
                          onError={(e) => (e.currentTarget.style.display = "none")}
                        />
                      )}
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;