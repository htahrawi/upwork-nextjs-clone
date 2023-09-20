import styled from "styled-components";
import { StyledBetweenAlignFlex } from "@/style/common";

export const StyledHeader = styled(StyledBetweenAlignFlex)`
  width: 100%;
  height: 60px;
  padding: 10px 30px;

  .logo:first-of-type {
    max-width: 100%;
    width: 80px;
    margin-right: 10px;
  }

  select {
    font-size: 16px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  
  a {
    color: var(--dark-color);
  }

  select + a:hover {
    color: var(--primary-color);
  }

  img:last-of-type {
    max-width: 100%;
    width: 33px;
    border-radius: 50%;
  }

  @media (max-width: 992px) {
    select, a {
      display: none;
    }
  }
`;
