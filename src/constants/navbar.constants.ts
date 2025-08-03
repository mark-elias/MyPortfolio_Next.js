import { FaDev } from "react-icons/fa";
import { GiGuitarBassHead } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

export const navbarLinks = [
  {
    id: "experience",
    name: "Experience",
    href: "/experience",
    icon: FaDev,
  },
  {
    id: "skills",
    name: "Skills",
    href: "/skills",
    icon: GiGuitarBassHead,
  },
  {
    id: "projects",
    name: "Projects",
    href: "/projects",
    icon: FaLaptopCode,
  },
  {
    id: "education",
    name: "Education",
    href: "/education",
    icon: FaGraduationCap,
  },
  {
    id: "certificates",
    name: "Certificates",
    href: "/certificates",
    icon: TbCertificate,
  },
] as const;

export const navbarBrand = {
  name: "marcos elias",
  href: "/",
} as const;
