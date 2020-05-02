import React from "react";
import { Button } from "reactstrap";

const FavoriteActions = (props) => {
    let color = "secondary";
    let buttonText = "islem yapiliyor";
    if (props.getStatus(props.id)) {
        color = "danger";
        buttonText = "Favorilerden Cikar";
    } else {
        color = "primary";
        buttonText = "Favoriye Ekle";
    }

    return (
        <div>
            <Button
                color={props.color}
                onClick={() => {
                    props.toggle(props.id);
                }}
            >
                {" "}
                {buttonText}
            </Button>
            <Button
                color={color}
                onClick={() => {
                    props.toggle(props.id);
                }}
            >
                {" "}
                {buttonText}
            </Button>
        </div>
    );
};

export default FavoriteActions;
