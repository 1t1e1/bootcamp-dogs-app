import React from "react";
import FavoriteActions from "./FavoriteActions";
import { Link } from "react-router-dom";

const Dog = ({ id, name, toggle, getStatus, isToggling }) => {
    const path = "/detail/";
    return (
        <li
            key={id}
            style={{
                margin: "15px",
            }}
        >
            <Link to={path + id}>
                <span
                    style={{
                        display: "inline-block",
                        marginRight: "15px",
                    }}
                >
                    {name}
                </span>
            </Link>
            <FavoriteActions
                toggle={toggle}
                id={id}
                getStatus={getStatus}
                // color={color}
                // buttonText={buttonText}
                isToggling={isToggling}
            />
        </li>
    );
};

export default Dog;
