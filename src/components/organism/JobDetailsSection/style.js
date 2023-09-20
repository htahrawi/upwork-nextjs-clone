import styled from "styled-components";
import { StyledSection } from "@/style/common";

export const StyledJobDetailsSection = styled(StyledSection)`
  overflow-y: auto;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
`;