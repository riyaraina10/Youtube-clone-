import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";
import Playlistcard from "./Playlistcard";

const Videos = (props) => {
    // console.log("#", props.videos);

    return (
        <>
            <Stack
                direction={props.direction || "row"}
                flexWrap="wrap"
                justifyContent="center"
                gap={2}
            >
                {props?.videos?.map((item, idx) => (
                    <Box key={idx}>
                        {item?.id?.videoId ? (
                            <VideoCard details={item} />
                        ) : item?.id?.channelId ? (
                            <ChannelCard details={item} />
                        ) : (
                            <Playlistcard details={item}></Playlistcard>
                        )}
                    </Box>
                ))}
            </Stack>
        </>
    );
};

export default Videos;
