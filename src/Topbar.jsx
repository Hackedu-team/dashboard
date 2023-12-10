import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { InputBase } from "@mui/material";
// import { useProSidebar } from "react-pro-sidebar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import colors from "../src/utils/color";
const Topbar = () => {
  // const { collapseSidebar } = useProSidebar();
  // const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
  //   useProSidebar();

  return (
    <Box
      display="flex"
      // width="95%"
      // height="60px"
      justifyContent="space-between"
      p={2}
      // backgroundColor="lime"
      boxShadow="0px 0px 5px rgba(0,0,0,0.1)"
    >
      <Box></Box>

      {/* ICON  */}
      <Box display="flex">
        <IconButton>
          <EmailOutlinedIcon
            sx={{ cursor: "pointer", color: colors.app.greyIcon }}
          />
        </IconButton>
        <IconButton>
          <NotificationsNoneOutlinedIcon
            sx={{ cursor: "pointer", color: colors.app.greyIcon }}
          />
        </IconButton>

        <IconButton>
          <PowerSettingsNewOutlinedIcon
            sx={{ cursor: "pointer", color: colors.app.greyIcon }}
          />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon
            sx={{ cursor: "pointer", color: colors.app.greyIcon }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
