import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import axios from "axios";

const Feed = () => {
    const [selected, setselected] = useState("New");
    const [videos, setvideos] = useState([]);
    const fetchdata = async () => {
        try {
            const res = await axios.get(
                `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${selected}`,
                {
                    params: {
                        maxResults: "50",
                    },
                    headers: {
                        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
                        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
                    },
                }
            );
            // console.log(res?.data?.items);
            const newarr = res?.data?.items.filter(
                (item) => item.id.kind !== "youtube#playlist"
            );

            setvideos(newarr);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchdata();
    }, [selected]);
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box
                sx={{
                    height: { sx: "auto", md: "92vh" },
                    borderRight: "1px solid #3d3d3d",
                    px: { sx: 0, md: 2 },
                }}
            >
                <Sidebar
                    selected={selected}
                    setselected={setselected}
                ></Sidebar>

                <Typography
                    className="copyright"
                    variant="body2"
                    sx={{ mt: 1.5, color: "#fff" }}
                >
                    Copyright 2022 JSM Media
                </Typography>
            </Box>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    ml={2}
                    mb={2}
                    sx={{ color: "white" }}
                >
                    {selected}
                    <span style={{ color: "#F31503" }}>Videos</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack>
    );
};

export default Feed;
