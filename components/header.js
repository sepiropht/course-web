import { useContext } from "react";
import Link from "next/link";
import { Context as HeaderContext } from "../context/headerContext";
import { Context as CourseContext } from "../context/courseInfoContext";

export default function Header(props) {
  const [{ section, title, icon }] = useContext(HeaderContext);
  const { frontendMastersLink } = useContext(CourseContext);
  return (
    <header className="navbar">
      <script
        async
        src="https://analytics.sepir.cloud/script.js"
        data-website-id="89cab4bb-221b-47bb-991d-296ac995f56c"
      ></script>
    </header>
  );
}
