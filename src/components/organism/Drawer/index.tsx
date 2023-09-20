import * as React from "react";
import Button from "@mui/material/Button";
import JobDetailsSection from "../JobDetailsSection";
import { StyledDrawer } from "./style.js";
import { StyledBetweenAlignFlex } from "@/style/common";
import Link from "next/link";
import IconButton from "@mui/material/IconButton";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import JobCard from "@/components/molecules/JobCard";

type Anchor = "right";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <StyledDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <StyledBetweenAlignFlex gap="15px" className="drawer_header">
              <IconButton onClick={toggleDrawer(anchor, false)}>
                <ChevronLeftIcon
                  sx={{ color: "var(--dark-color)", fontSize: 40 }}
                />
              </IconButton>
              <Link href="#">
                <OpenInNewIcon
                  sx={{ color: "var(--primary-color)", fontSize: 20 }}
                />{" "}
                <p>Open job in a new window</p>
              </Link>
            </StyledBetweenAlignFlex>
            <JobDetailsSection />
          </StyledDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
