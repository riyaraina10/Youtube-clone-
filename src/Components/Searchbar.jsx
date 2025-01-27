import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searchbar = () => {
    const [searchTerm, setTerm] = useState("");
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`search/${searchTerm}`);
            setTerm("");
        }
    };

    return (
        <Paper
            component="form"
            onSubmit={handlesubmit}
            sx={{
                borderRadius: 20,
                border: "1px solid #e3e3e3",
                pl: 2,
                boxShadow: "none",
                mr: { sm: 5 },
            }}
        >
            <input
                className="search-bar"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => {
                    setTerm(e.target.value);
                }}
            />
            <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
                <Search></Search>
            </IconButton>
        </Paper>
    );
};

export default Searchbar;
