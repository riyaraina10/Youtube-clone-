import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {
    ChannelDetail,
    Feed,
    Navbar,
    SearchFeed,
    VideoDetail,
    PlaylistDetails,
} from "./Components";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Box sx={{ background: "#000" }}>
                    <Navbar></Navbar>
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route
                            path="/video/:id"
                            exact
                            element={<VideoDetail />}
                        />
                        <Route
                            path="/channel/:id"
                            exact
                            element={<ChannelDetail />}
                        />
                        <Route
                            path="/search/:searchTerm"
                            exact
                            element={<SearchFeed />}
                        />
                        <Route
                            path="/playlistItems/:id"
                            exact
                            element={<PlaylistDetails />}
                        />
                    </Routes>
                </Box>
            </BrowserRouter>
        </>
    );
};

export default App;
