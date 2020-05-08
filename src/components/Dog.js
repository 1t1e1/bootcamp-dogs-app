import React from "react";
import FavoriteActions from "./FavoriteActions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

Dog.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    toggle: PropTypes.func.isRequired,
    getStatus: PropTypes.func.isRequired,
    isToggling: PropTypes.bool.isRequired,
};

// Dog.defaultProps = {
// id: "11111"
// name: "name of dog",
// toggle:
// getStatus:
// isToggling:
// };

export default Dog;
