import React from "react";
import styled from "styled-components";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  flex-wrap: wrap;
`;

const Role = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Company = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-top: 2px;
`;

const Meta = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.soft2};
  margin-top: 2px;
`;

const Badge = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 999px;
  white-space: nowrap;
  color: ${({ $training, theme }) => ($training ? "#B45309" : theme.primary)};
  background: ${({ $training, theme }) =>
    $training ? "#FEF3C7" : theme.primary_soft};
`;

const Project = styled.div`
  margin-top: 6px;
  padding-top: 14px;
  border-top: 1px solid ${({ theme }) => theme.border};
`;

const ProjectName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 4px;
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Points = styled.ul`
  margin: 8px 0 0 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  li {
    font-size: 14px;
    line-height: 1.6;
    color: ${({ theme }) => theme.text_secondary};
  }
  @media only screen and (max-width: 768px) {
    li {
      font-size: 13px;
    }
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 999px;
  color: ${({ theme }) => theme.primary};
  background: ${({ theme }) => theme.primary_soft};
`;

const Icon = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: white;
  background: ${({ theme }) => theme.primary};
`;

const TagList = ({ items }) => (
  <Tags>
    {items.map((t) => (
      <Tag key={t}>{t}</Tag>
    ))}
  </Tags>
);

const ExperienceCard = ({ experience }) => {
  const isTraining = experience.type === "Training";
  return (
    <VerticalTimelineElement
      icon={<Icon>{experience.company[0]}</Icon>}
      iconStyle={{ boxShadow: "0 0 0 4px #EDE9FE" }}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        background: "#FFFFFF",
        color: "#1E1B4B",
        boxShadow: "rgba(91, 43, 214, 0.12) 0px 4px 24px",
        border: "1px solid #E9E5FB",
        borderRadius: "16px",
      }}
      contentArrowStyle={{ borderRight: "7px solid #E9E5FB" }}
    >
      <Header>
        <div>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Meta>
            {experience.date} · {experience.location}
          </Meta>
        </div>
        <Badge $training={isTraining}>{experience.type}</Badge>
      </Header>

      {experience.projects?.map((project) => (
        <Project key={project.name}>
          <ProjectName>Project: {project.name}</ProjectName>
          {project.link && (
            <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link.replace(/^https?:\/\//, "")} ↗
            </ProjectLink>
          )}
          <Points>
            {project.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </Points>
          <TagList items={project.stack} />
        </Project>
      ))}

      {experience.points && (
        <div>
          <Points>
            {experience.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </Points>
          {experience.stack && <TagList items={experience.stack} />}
        </div>
      )}
    </VerticalTimelineElement>
  );
};

export default ExperienceCard;
