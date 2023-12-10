import React from "react";
import { Typography } from "@mui/material";
import Topbar from "../Topbar";
import Sidebarr from "../Sidebar";
import BarChart from "../components/charts/Chart1";
import DoughnutChart from "../components/charts/Chart2";
import AreaChart from "../components/charts/Chart3";
import "../index.css";
import Box from "@mui/material/Box";


export default function GraphPage() {
    return (
        <div className="content">
            <Sidebarr />
            <Box width="100%" justifyContent="space-between">
                <Topbar />
                <main className="mainSection">
                
                    <Typography textAlign='center' m={2}>Graph Page</Typography>

                    <Box
                        display="flex"
                        justifyContent=""
                        alignItems="center"
                        flexDirection="row"
                        marginTop="20px"
                        marginBottom="50px"
                    >

                        <Box width='25%'>
                            <DoughnutChart />
                        </Box>

                        {/* <Box width='40%'>
                            <BarChart />
                        </Box> */}

                        <Box width='40%'>
                            <AreaChart />
                        </Box>

                    </Box>
                
                </main>
            </Box>
        </div>
    );
}