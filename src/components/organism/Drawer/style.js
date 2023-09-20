import styled from "styled-components";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

export const StyledDrawer = styled(SwipeableDrawer)`
  .css-1160xiw-MuiPaper-root-MuiDrawer-paper {
    background-color: var(--white-color);
    border-radius: 10px 0 0 10px;
    width: 75%;
    padding: 20px;
  }

  .drawer_header {
    margin-bottom: 30px;
  }

  .drawer_header button:hover {
    background: transparent;
  }

  .drawer_header a {
    color: var(--primary-color);
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
  }

  .drawer_header a:hover p {
    text-decoration: underline;
  }

  .drawer_header a:hover {
    color: var(--green-color);
  }
`;
