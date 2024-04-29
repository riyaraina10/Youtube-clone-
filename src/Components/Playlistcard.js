import React from "react";

import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
    demoChannelTitle,
    demoChannelUrl,
    demoVideoTitle,
    demoVideoUrl,
    demoThumbnailUrl,
} from "../utils/constants";

const Playlistcard = (props) => {
    return (
        <>
            <Card
                sx={{
                    width: { xs: "100%", sm: "358px", md: "320px" },
                    boxShadow: "none",
                    borderRadius: "0",
                }}
            >
                <Link to={`/playlistItems/${props?.details?.id?.playlistId}`}>
                    <CardMedia
                        image={props?.details?.snippet?.thumbnails?.high?.url}
                        alt={props?.details?.snippet?.title}
                        sx={{
                            width: { xs: "100%", sm: "358px", md: "320px" },
                            height: 200,
                        }}
                    ></CardMedia>
                </Link>

                <CardContent
                    sx={{ backgroundColor: "#1e1e1e", height: "106px" }}
                >
                    <Link to={`/video/${props?.details?.id?.playlistId}`}>
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            color="red"
                        >
                            {props?.details?.snippet?.title.slice(0, 60)}
                        </Typography>
                    </Link>
                    <Link to={`/channel/${props?.details?.snippet?.channelId}`}>
                        <Typography
                            variant="subtitle2"
                            fontWeight="bold"
                            color="red"
                        >
                            {props?.details?.snippet?.channelTitle
                                ? props?.details?.snippet?.channelTitle
                                : demoChannelTitle}
                            <CheckCircle
                                sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                            />
                        </Typography>
                    </Link>
                </CardContent>
            </Card>
        </>
    );
};

export default Playlistcard;
