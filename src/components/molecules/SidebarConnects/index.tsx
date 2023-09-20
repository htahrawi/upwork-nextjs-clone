/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import LinearProgressWithLabel from "@/components/atoms/Progress";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { IconButton } from "@mui/material";
import SidebarDetaileCard from "@/components/molecules/SidebarDetaileCard";
import { StyledSidebarConnects } from "./style.js"

const SidebarConnects = () => {
  return (
    <StyledSidebarConnects>
      <section className="title">
        <Link href="/profile">
          <img src="/assets/account-image.jpg" alt="account-image" />
        </Link>
        <Link href="/profile">Husam M.</Link>
        <p>Reactjs Developer</p>
      </section>
      <section className="completeness">
        <section className="prores">
          <h4>Profile Completeness:</h4>
          <LinearProgressWithLabel />
        </section>
        <section className="content">
          <p>Ways to stand out to clients right now...</p>
          <section className="box">
            <p>Add your past work so clients know you’re a pro (+%).</p>
            <Link href="#">Add work</Link>
            <IconButton sx={{ color: "white", backgroundColor: "green" }}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </section>
        </section>
      </section>
      <section className="connects">
        <Link href="#">78 Available Connects</Link>
      </section>
      <section className="available_section">
        <SidebarDetaileCard
          text="Availability Badge"
          detaile=""
          available
        />
        <SidebarDetaileCard
          text="Hours per week"
          detaile="More than 30 hrs/week"
        />
        <SidebarDetaileCard
          text="Profile Visibility"
          detaile="Public"
        />
        <SidebarDetaileCard
          text="Job Preference"
          detaile="Open to contract-to-hire roles"
        />
      </section>
      <section className="category">
        <SidebarDetaileCard text="My Categories" detaile="" />
        <div>
          <Link href="/search">Web Development</Link>
          <Link href="/search">Web & Mobile Design</Link>
        </div>
      </section>
    </StyledSidebarConnects>
  )
}

export default SidebarConnects