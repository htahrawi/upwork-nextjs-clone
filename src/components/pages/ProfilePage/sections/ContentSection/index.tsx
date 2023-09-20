import SidebarControlProfile from "@/components/atoms/SidebarControlProfile";
import {
  StyledAlignFlex,
  StyledBetweenAlignFlex,
  StyledBetweenFlexStart,
  StyledGrid150,
} from "@/style/common";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Link from "next/link";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import LinkIcon from "@mui/icons-material/Link";
import { Button } from "@mui/material";
import { SKILLS } from "@/mock/skills";
import ToolButton from "@/components/atoms/ToolButton";
import { StyledContentProfile } from "./style.js";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import ProfileProjectCard from "@/components/molecules/ProfileProjectCard";
import { PROFILE_PROJECTS } from "@/mock/profileProjects";
import Pagination from "@mui/material/Pagination";

const ContentSection = () => {
  return (
    <StyledContentProfile>
      <article className="info">
        <StyledBetweenAlignFlex>
          <SidebarControlProfile text="Front-End Developer" editIcon />
          <StyledAlignFlex gap="10px">
            <h3>$ 25.00/hr</h3>
            <ToolButton>
              <EditIcon fontSize="small" />
            </ToolButton>
            <ToolButton>
              <LinkIcon />
            </ToolButton>
          </StyledAlignFlex>
        </StyledBetweenAlignFlex>
        <StyledBetweenFlexStart gap="10px">
          <p>
            I&apos;m a Software engineer and MERN Stack Developer.
            <br />
            I&apos;m a React developer skilled in building responsive web
            applications using React.js, Next.js, TypeScript, Material-UI (MUI),
            and styled-components. I provide full project management and
            prioritize regular communication for successful outcomes. Let&apos;s
            work together to bring your web projects to life.
          </p>
          <ToolButton>
            <AddIcon />
          </ToolButton>
        </StyledBetweenFlexStart>
      </article>

      <article>
        <StyledAlignFlex gap="10px">
          <h3>Work History</h3>
          <ToolButton>
            <MoreHorizIcon />
          </ToolButton>
        </StyledAlignFlex>
        <p>
          No work yet. Once you start getting hired on Upwork, your work with
          clients will show up here.
          <Link href="/search">Start your search</Link>
        </p>
      </article>

      <article>
        <StyledAlignFlex gap="10px">
          <h3>Portfolio (7)</h3>
          <ToolButton>
            <EditIcon fontSize="small" />
          </ToolButton>
          <ToolButton>
            <SwapVertIcon />
          </ToolButton>
        </StyledAlignFlex>
        <StyledGrid150 gap="15px" margin="20px 0">
          {PROFILE_PROJECTS.map(({ id, title, src }) => (
            <ProfileProjectCard key={id} imageSrc={src} titleProject={title} />
          ))}
        </StyledGrid150>
        <Pagination count={10} color="primary" />
      </article>

      <article>
        <StyledAlignFlex gap="20px">
          <h3>Skills</h3>
          <ToolButton>
            <EditIcon fontSize="small" />
          </ToolButton>
        </StyledAlignFlex>
        <div className="skills">
          {SKILLS.map((skill, index) => {
            return (
              <Button key={index} className="skill-btn">
                {skill}
              </Button>
            );
          })}
        </div>
      </article>

      <article>
        <StyledBetweenAlignFlex gap="10px">
          <h3>Your Project Catalog</h3>
          <Button>Manage Projects</Button>
        </StyledBetweenAlignFlex>
        <p>
          Projects are a new way to earn on Upwork that helps you do more of the
          work you love to do. Create project offerings that highlight your
          strengths and attract more clients.
        </p>
      </article>
    </StyledContentProfile>
  );
};

export default ContentSection;
