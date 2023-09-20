"use client";
/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { StyledTabs } from "./style.js";
import JobCard from "../JobCard";
import { JOBS_DETAILS } from "@/mock/jobs";
import SearchControl from "../SearchControl";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
  ConvertTabs?: boolean;
  showSearchControl?: boolean;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({
  ConvertTabs = true,
  showSearchControl = true,
}) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledTabs>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderColor: "divider" }}>
          {ConvertTabs ? (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Best Matches" {...a11yProps(0)} />
              <Tab label="Most Recent" {...a11yProps(1)} />
              <Tab label="Saved Jobs" {...a11yProps(2)} />
            </Tabs>
          ) : (
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Search" {...a11yProps(0)} />
              <Tab label="Saved Jobs(8)" {...a11yProps(1)} />
            </Tabs>
          )}
        </Box>
        <CustomTabPanel value={value} index={0}>
          {ConvertTabs && (
            <p className="para">
              Browse jobs that match your experience to a clients hiring
              preferences. Ordered by most relevant.
            </p>
          )}
          {showSearchControl && <SearchControl />}
          {JOBS_DETAILS.map(
            ({
              id,
              title,
              fixedPrice,
              hourly,
              description,
              proposal,
              spent,
              location,
            }) => (
              <JobCard
                key={id}
                title={title}
                fixedPrice={fixedPrice}
                hourly={hourly}
                description={description}
                proposal={proposal}
                spent={spent}
                location={location}
                jobsId={id}
              />
            )
          )}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {ConvertTabs && (
            <p className="para">
              Browse the most recent jobs that match your skills and profile
              description to the skills clients are looking for.
            </p>
          )}
          {JOBS_DETAILS.map(
            ({
              id,
              title,
              fixedPrice,
              hourly,
              description,
              proposal,
              spent,
              location,
            }) => (
              <JobCard
                key={id}
                title={title}
                fixedPrice={fixedPrice}
                hourly={hourly}
                description={description}
                proposal={proposal}
                spent={spent}
                location={location}
                jobsId={id}
              />
            )
          )}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {JOBS_DETAILS.map(
            ({
              id,
              title,
              fixedPrice,
              hourly,
              description,
              proposal,
              spent,
              location,
            }) => (
              <JobCard
                key={id}
                title={title}
                fixedPrice={fixedPrice}
                hourly={hourly}
                description={description}
                proposal={proposal}
                spent={spent}
                location={location}
                jobsId={id}
              />
            )
          )}
        </CustomTabPanel>
      </Box>
    </StyledTabs>
  );
}
