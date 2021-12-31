import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";

export const sidebarData = [
  {
    icon: <HomeOutlinedIcon />,
    name: "Home",
    link: "/dashboard"
  },
  {
    icon: <AutoFixHighIcon />,
    name: "Harry Potter",
    link: "/dashboard/harryPotter"
  },
  {
    icon: <ScienceOutlinedIcon />,
    name: "Breaking Bad",
    link: "/dashboard/breakingBad"
  }
];
