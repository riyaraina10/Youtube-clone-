import React from "react";
import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import Videos from "./Videos";
import axios from "axios";

const Feed = () => {
    const [videos, setvideos] = useState([]);
    const { searchTerm } = useParams();
    const fetchdata = async () => {
        try {
            const res = await axios.get(
                `https://youtube-v31.p.rapidapi.com/search?part=snippet&q=${searchTerm}`,
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
            // console.log(res.data.items);

            setvideos(res.data.items);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchdata();
    }, [searchTerm]);
    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    ml={2}
                    mb={2}
                    sx={{ color: "white" }}
                >
                    All videos related to:
                    <span style={{ color: "#F31503" }}>{searchTerm}</span>
                </Typography>

                <Videos videos={videos} />
            </Box>
            <Box>
                <Typography>hi</Typography>
            </Box>
        </Stack>
    );
};

export default Feed;
