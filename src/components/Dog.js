import React from "react";
import FavoriteActions from "./FavoriteActions";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Dog = ({ id, name, isToggling }) => {
    const path = "/detail/";
    // console.log("id", id);
    // ??? her fav eklendiginde tum app render oluyor.
    // ama aslinda sadece o buttonun render olmasi gerekmiyor mu?
    // bunu nasil yapabilirim.

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
                id={id}
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
    isToggling: PropTypes.bool.isRequired,
};

// Dog.defaultProps = {
// id: "11111"
// name: "name of dog",
// isToggling:
// };

export default Dog;
