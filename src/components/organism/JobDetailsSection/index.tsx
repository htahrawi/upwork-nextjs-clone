import JobDetailsSidebar from "@/components/molecules/JobDetailsSidebar";
import JobDetailsContentSection from "@/components/pages/JobDetails/sections/JobDeatilsContentSection";
import { StyledFlex, StyledSection } from "@/style/common";
import { StyledJobDetailsSection } from "./style.js";

const JobDetailsSection = () => {
  return (
    <StyledJobDetailsSection>
      <StyledFlex>
        <JobDetailsContentSection />
        <JobDetailsSidebar />
      </StyledFlex>
    </StyledJobDetailsSection>
  );
};

export default JobDetailsSection;
