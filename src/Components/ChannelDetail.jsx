import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import axios from "axios";

const ChannelDetail = () => {
    const { id } = useParams();
    const [channelDetail, setchannelDetail] = useState(null);
    const [videos, setvideos] = useState([]);

    // console.log(channelDetail);
    const fetchFromApi = async () => {
        try {
            const res = await axios.get(
                `https://youtube-v31.p.rapidapi.com/channels?part=snippet&id=${id}`,
                {
                    headers: {
                        "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
                        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
                    },
                }
            );

            setchannelDetail(res.data.items[0]);
        } catch (error) {
            console.log("error", error);
        }
    };
    const fetchFromApi2 = async () => {
        const res = await axios.get(
            `https://youtube-v31.p.rapidapi.com/search?channelId=${id}&part=snippet&order=date`,
            {
                headers: {
                    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
                    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
                },
            }
        );
        // console.log(res.data.items);

        setvideos(res.data.items);
    };

    useEffect(() => {
        fetchFromApi();
        fetchFromApi2();
        console.log(id);
    }, [id]);

    return (
        <>
            <Box minHeight="95vh">
                <Box>
                    <div
                        style={{
                            background:
                                "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(73,202,209,1) 35%, rgba(0,212,255,1) 100%)",
                            zIndex: 10,
                            height: "300px",
                        }}
                    ></div>
                    <ChannelCard details={channelDetail} marginTop="-93px" />
                </Box>
                <Box display="flex" p="2">
                    <Box sx={{ mr: { sm: "160px" } }} />
                    <Videos videos={videos} />
                </Box>
            </Box>
        </>
    );
};

export default ChannelDetail;
