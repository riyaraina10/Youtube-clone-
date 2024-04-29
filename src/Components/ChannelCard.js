import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = (props) => {
    // console.log(props.details);
    return (
        <>
            <Box
                sx={{
                    boxShadow: "none",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 300,
                    height: "326px",
                    margin: "auto",
                    marginTop: props.marginTop,
                }}
            >
                <Link to={`/channel/${props?.details?.id?.channelId}`}>
                    <CardContent
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                            color: "#fff",
                        }}
                    >
                        <CardMedia
                            image={
                                props?.details?.snippet?.thumbnails?.high?.url
                                    ? props?.details?.snippet?.thumbnails?.high
                                          ?.url
                                    : demoProfilePicture
                            }
                            alt={props?.details?.snippet?.thumbnails?.high?.url}
                            sx={{
                                borderRadius: "50%",
                                height: "180px",
                                width: "180px",
                                mb: 2,
                                border: "1px solid #e3e3e3",

                                margin: "auto",
                                display: "block",
                            }}
                        ></CardMedia>
                        <Typography variant="h6" sx={{ mt: 2 }}>
                            {props?.details?.snippet?.title}
                            <CheckCircle
                                sx={{ fontSize: 17, color: "gray", ml: "5px" }}
                            />
                        </Typography>
                        {props?.details?.statistics?.subscriberCount ? (
                            <Typography>
                                {parseInt(
                                    props?.details?.statistics?.subscriberCount
                                ).toLocaleString()}
                                Subscribers
                            </Typography>
                        ) : (
                            <p></p>
                        )}
                    </CardContent>
                </Link>
            </Box>
        </>
    );
};

export default ChannelCard;
