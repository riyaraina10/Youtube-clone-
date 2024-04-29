import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = (props) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: "auto", md: "95%" },
                flexDirection: { md: "column" },
            }}
        >
            {categories.map((category) => (
                <button
                    className="category-btn"
                    style={{
                        background:
                            category.name === props.selected && "#FC1503",
                        color: "white",
                    }}
                    key={category.name}
                    onClick={() => props.setselected(category.name)}
                >
                    <span
                        style={{
                            color:
                                category.name === props.selected
                                    ? "white"
                                    : "red",
                            marginRight: "10px",
                        }}
                    >
                        {category.icon}
                    </span>
                    <span
                        style={{
                            opacity:
                                category.name === props.selected ? "1" : "0.5",
                        }}
                    >
                        {category.name}
                    </span>
                </button>
            ))}
        </Stack>
    );
};

export default Sidebar;
