import React from "react";
import "./BottomNav.css";
import NavBar from "./Navbar/Navbar";
import Searchbar from "./Searchbar/Searchbar";
import { AnimateSharedLayout, motion } from "framer-motion";

export default function BottomNav() {
  const stateValue = false
  const [expanded, setExpanded] = React.useState(true);
  return (
    <>
      <AnimateSharedLayout>
        {expanded ? <NavBar setExpanded={() => setExpanded(false)} /> : <Searchbar setExpanded={() => setExpanded(true)}/>}
      </AnimateSharedLayout>
    </>
  );
}
