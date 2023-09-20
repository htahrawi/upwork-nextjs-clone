import SidebarControlProfile from "@/components/atoms/SidebarControlProfile";
import HoursPerWeekDialog from "@/components/molecules/HoursPerWeekDialog";
import { StyledFlex } from "@/style/common";
import styled from "styled-components";

const StyledAsideProfile = styled.aside`
  width: 47%;
  border-right: 1px solid var(--gray-300-color);
  padding: 0 30px;

  p {
    color: var(--third-color);
    font-size: 16px;
  }

  span {
    color: var(--third-color);
    font-size: 14px;
  }

  .lang {
    padding: 5px 0;
  }

  .lang > strong {
    font-weight: 500;
  }

  .major {
    width: 20ch;
    overflow-wrap: break-word;
    font-size: 14px;
  }

  .major span {
    color: var(--gray-500-color);
  }
`;

const SideSection = () => {
  return (
    <StyledAsideProfile>
      <SidebarControlProfile text="Video introduction" addIcon />
      {/* <SidebarControlProfile 
        text="Hours per week" 
        editIcon 
        onEditClicked={()=>console.log("Edit Clicked")}>
        <p>More than 30 hrs/week</p>
        <span>Open to contract to hire</span>
      </SidebarControlProfile> */}
      <HoursPerWeekDialog />
      <SidebarControlProfile text="Languages" editIcon addIcon>
        <StyledFlex className="lang">
          <p>English:&nbsp;</p>
          <span>Conversational</span>
        </StyledFlex>
        <StyledFlex className="lang">
          <p>Arabic: &nbsp;</p>
          <span>Native or Bilingual</span>
        </StyledFlex>
      </SidebarControlProfile>
      <p>Verifications</p>
      <SidebarControlProfile text="Military Veteran" addIcon />
      <SidebarControlProfile text="Education" addIcon>
        <SidebarControlProfile
          text="Islamic University"
          editIcon
          deleteIcon
        >
          <p className="major">
            Bachelor of Computer Science (BCompSc), Software Development
            <br />
            <span>2019-2024 (expected)</span>
          </p>
        </SidebarControlProfile>
      </SidebarControlProfile>
    </StyledAsideProfile>
  );
};

export default SideSection;
