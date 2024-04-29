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

const VideoCard = (props) => {
    //console.log(props.details);
    return (
        <>
            <Card
                sx={{
                    width: 300,
                    boxShadow: "none",
                    borderRadius: "0",
                }}
            >
                <Link
                    to={
                        props?.details?.id?.videoId
                            ? `/video/${props?.details?.id?.videoId}`
                            : demoVideoUrl
                    }
                >
                    <CardMedia
                        image={props?.details?.snippet?.thumbnails?.high?.url}
                        alt={props?.details?.snippet?.title}
                        sx={{
                            width: 300,
                            height: 200,
                            objectFit: "cover",
                        }}
                    ></CardMedia>
                </Link>

                <CardContent
                    sx={{ backgroundColor: "#1e1e1e", height: "106px" }}
                >
                    <Link
                        to={
                            props?.details?.id?.videoId
                                ? `/video/${props?.details?.id?.videoId}`
                                : demoVideoUrl
                        }
                    >
                        <Typography
                            variant="subtitle1"
                            fontWeight="bold"
                            color="#FFF"
                        >
                            {props?.details?.snippet?.title
                                ? props?.details?.snippet?.title.slice(0, 60)
                                : demoVideoTitle}
                        </Typography>
                    </Link>
                    <Link
                        to={
                            props?.details?.snippet?.channelId
                                ? `/channel/${props?.details?.snippet?.channelId}`
                                : demoChannelUrl
                        }
                    >
                        <Typography
                            variant="subtitle2"
                            fontWeight="bold"
                            color="grey"
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

export default VideoCard;
