import { useContext } from "react";
import Link from "next/link";
import { Context as HeaderContext } from "../context/headerContext";
import { Context as CourseContext } from "../context/courseInfoContext";

export default function Header(props) {
  const [{ section, title, icon }] = useContext(HeaderContext);
  const { frontendMastersLink } = useContext(CourseContext);
  return <header className="navbar"></header>;
}
