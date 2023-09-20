"use client";
/* eslint-disable @next/next/no-img-element */
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import Input from "@/components/atoms/Input";
import {
  StyledAlignFlex,
  StyledFlexCenter,
  StyledPage,
} from "@/style/common";
import { StyledLogIn } from "./style.js";
import { Button } from "@mui/material";
import Link from "next/link";
import HaveAccount from "@/components/atoms/HaveAccount";
import LogInFooter from "@/components/organism/LogInFooter";
import ReportIcon from "@mui/icons-material/Report";

interface LogInFormData {
  email: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const formSchema = Yup.object({
  email: Yup.string()
    .matches(emailRegex, "Enter Correct Email")
    .required("Email address is required"),
});

const LogInForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LogInFormData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = async (data: LogInFormData) => {
    // login(data);
    reset();
  };

  return (
    <StyledPage>
      <StyledFlexCenter>
        <StyledLogIn padding="40px 80px">
          <h1>Log in to Upwork</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="box">
              <Input
                type="email"
                placeholder="Username or Email"
                name="email"
                leftImage="/assets/user-icon.png"
                rightImage
                register={register}
              />
              {errors.email && (
                <StyledAlignFlex gap="5px" margin="5px 0 0 0">
                  <ReportIcon />
                  <p className="error">{errors.email.message}</p>
                </StyledAlignFlex>
              )}
            </div>
            <Button>Continue with Email</Button>
          </form>
          <div className="or"></div>
          <div className="links">
            <Link href="#">
              <StyledAlignFlex>
                <img
                  src="/assets/google-logo.svg"
                  alt="apple store"
                  className="google"
                />
                <span>Continue with Google</span>
              </StyledAlignFlex>
            </Link>
            <Link href="#">
              <StyledFlexCenter gap="5px">
                <img src="/assets/apple-logo.svg" alt="apple store" />
                <span>Continue with Apple</span>
              </StyledFlexCenter>
            </Link>
          </div>
          <div className="have-account">
            <HaveAccount
              question="Don't have an Upwork account?"
              showLink={false} path={''} linkText={''}/>
          </div>
          <Link href="/signup" className="signup">
            Sign Up
          </Link>
        </StyledLogIn>
      </StyledFlexCenter>
      <LogInFooter />
    </StyledPage>
  );
};

export default LogInForm;
