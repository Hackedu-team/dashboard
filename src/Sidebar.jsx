import React, { useState } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { InputBase, Typography, menuClasses, useTheme } from "@mui/material";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import BarChartIcon from '@mui/icons-material/BarChart';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import logo from "../src/logo.svg"
import "../src/index.css";
import colors from "./utils/color.js";

const Sidebarr = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [activeMenuItem, setActiveMenuItem] = useState("/");
  // const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
  //   useProSidebar();

  const currentUrl = window.location.pathname;

  return (
    <Box>
      <Sidebar>
        
        <Box mb="25px" height='100vh'>
          {/* {!collapsed && ( */}
            <Box
              display="flex"
              justifyContent=""
              alignItems="center"
              flexDirection="row"
              marginTop="20px"
              marginBottom="50px"
            >
              <Box>
                <img
                  alt="profile-user"
                  width="50px"
                  height="50px"
                  src={logo}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    backgroundSize: "cover",
                  }}
                />
              </Box>

              <Box
                textAlign="start"
                display="flex"
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                marginLeft="5px"
              >
                <Typography variant="h10" fontWeight="bold" color="#3E4B5B">
                  DASHBOARD
                </Typography>
                <Typography variant="h9" color="#d8d8d8" fontSize="12px">
                  Admin
                </Typography>
              </Box>
            </Box>
          {/* )} */}
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                // only apply styles on first level elements of the tree
                if (level === 0)
                  return {
                    color: active ? "#fff" : "",
                    backgroundColor: active ? colors.app.primary : undefined,
                    "&:hover": {
                      background: active ? colors.app.primary : "",
                    },
                  };
              },
            }}
          >
            <NavLink to="/">
              <MenuItem
                active={currentUrl === "/" ? true : false}
                icon={
                  <GridViewOutlinedIcon
                    style={{ color: currentUrl === "/" ? "#fff" : colors.app.secondary }}
                  />
                }
              >
                <Typography color={currentUrl === "/" ? "#fff" : "#3E4B5B"}>Dashboard</Typography>
              </MenuItem>
            </NavLink>

            <NavLink to="/search">
              <MenuItem
                icon={
                  <TravelExploreIcon style={{ color: currentUrl === "/search" ? "#fff" : colors.app.secondary }} />
                }
                active={currentUrl === "/search" ? true : false}
              >
                <Typography color={currentUrl === "/search" ? "#fff" : "#3E4B5B"}>Search Engine</Typography>
              </MenuItem>
            </NavLink>

            <NavLink to="/graph">
              <MenuItem
                icon={
                  <BarChartIcon
                    style={{ color: currentUrl === "/graph" ? "#fff" : colors.app.secondary }}
                  />
                }
                active={currentUrl === "/graph" ? true : false}
              >
                <Typography color={currentUrl === "/graph" ? "#fff" : "#3E4B5B"}>Graph Section</Typography>
              </MenuItem>
            </NavLink>
          </Menu>
        </Box>
      </Sidebar>
    </Box>
  );
};

export default Sidebarr;
