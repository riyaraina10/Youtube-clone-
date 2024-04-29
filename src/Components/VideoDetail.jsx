import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";
import axios from "axios";
import { Link } from "react-router-dom";

const VideoDetail = () => {
    const { id } = useParams();
    const [videoDetails, setvideoDetails] = useState(null);
    const [videos, setvideos] = useState([]);
    const fetchFromApi = async () => {
        try {
            const res = await axios.get(
                `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails,snippet,statistics&id=${id}`,
                {
                    headers: {
                        "X-RapidAPI-Key":
                            "aff958f18fmshab4c096450d1e96p10fb51jsne253422650e2",
                        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
                    },
                }
            );
            //console.log(res?.data?.items[0]);
            setvideoDetails(res?.data?.items[0]);
        } catch (error) {
            console.log("error");
        }
    };

    const fetchVideos = async () => {
        const response = await axios.get(
            `https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=${id}&part=id,snippet&type=video`,
            {
                headers: {
                    "X-RapidAPI-Key":
                        "aff958f18fmshab4c096450d1e96p10fb51jsne253422650e2",
                    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
                },
            }
        );
        // console.log(response.data.items);
        setvideos(response.data.items);
    };
    useEffect(() => {
        fetchFromApi();
        fetchVideos();
    }, [id]);

    if (!videoDetails?.snippet) {
        return "loading";
    }

    const { channelId, channelTitle, title } = videoDetails?.snippet;
    const { viewCount, likeCount } = videoDetails?.statistics;

    return (
        <>
            <Box minHeight="95vh">
                <Stack direction={{ xs: "column", md: "row" }}>
                    <Box flex={1}>
                        <Box
                            sx={{
                                width: "100%",
                                position: "sticky",
                                top: "86px",
                            }}
                        >
                            <ReactPlayer
                                url={`https://www.youtube.com/watch?v=${id}`}
                                className="react-player"
                                controls
                            />
                            <Typography
                                color="#fff"
                                variant="h5"
                                fontWeight="bold"
                                p={2}
                            >
                                {title}
                            </Typography>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                sx={{ color: "#fff" }}
                                py={1}
                                px={2}
                            >
                                <Link to={`/channel/${channelId}`}>
                                    <Typography
                                        variant={{ sm: "subtitle", md: "h6" }}
                                        color="#fff"
                                    >
                                        {channelTitle}
                                        <CheckCircle
                                            sx={{
                                                fontSize: "12px",
                                                color: "grey",
                                                ml: "5px",
                                            }}
                                        />
                                    </Typography>
                                </Link>
                                <Stack
                                    direction="row"
                                    gap="20px"
                                    alignItems="center"
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{ opacity: 0.7 }}
                                    >
                                        {parseInt(viewCount).toLocaleString()}
                                        &nbsp; views
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{ opacity: 0.7 }}
                                    >
                                        {parseInt(likeCount).toLocaleString()}
                                        &nbsp; likes
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                    <Box
                        px={2}
                        py={{ md: 1, xs: 5 }}
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Videos videos={videos} direction="column"></Videos>
                    </Box>
                </Stack>
            </Box>
        </>
    );
};

export default VideoDetail;
