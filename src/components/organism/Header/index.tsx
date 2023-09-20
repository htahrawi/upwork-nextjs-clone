"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { StyledHeader } from "./style.js";
import Link from "next/link.js";
import CustomizedInputBase from "@/components/atoms/HeaderInput";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import AccessibleBadges from "@/components/atoms/Badge";
import SendIcon from "@mui/icons-material/Send";
import AccountMenu from "@/components/atoms/Avatar";
import { StyledAlignFlex } from "@/style/common";
import CustomizedMenus from "@/components/atoms/Menu";
import { HEADER_OPTIONS } from "@/mock/headerOptions";
import Logo from "@/components/atoms/Logo";

const Header = () => {
  return (
    <StyledHeader>
      <StyledAlignFlex gap='15px'>
        <Logo />
        <CustomizedMenus
          defaultValue="Find Work"
          options={HEADER_OPTIONS.findWork}
        />
        <CustomizedMenus
          defaultValue="My Jobs"
          options={HEADER_OPTIONS.myJobs}
        />
        <CustomizedMenus
          defaultValue="Overview"
          options={HEADER_OPTIONS.overview}
        />
        <Link href="#">Messages</Link>
      </StyledAlignFlex>
      <StyledAlignFlex gap='15px'>
        <CustomizedInputBase />
        <Link href="#">
          <QuestionMarkIcon />
        </Link>
        <Link href="#">
          <SendIcon />
        </Link>
        <Link href="#">
          <AccessibleBadges />
        </Link>
        <Link href="#">
          <AccountMenu />
        </Link>
      </StyledAlignFlex>
    </StyledHeader>
  );
};

export default Header;
