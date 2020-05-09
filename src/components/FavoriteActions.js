import React from "react";
import { Button } from "reactstrap";

const FavoriteActions = (props) => {
    let color, buttonText;
    if (props.isToggling) {
        color = "secondary";
        buttonText = "islem yapiliyor";
    } else if (props.getStatus(props.id)) {
        color = "danger";
        buttonText = "Favorilerden Cikar";
    } else {
        color = "primary";
        buttonText = "Favoriye Ekle";
    }

    return (
        <div>
            {/* <Button
??? 
color, buttonText i props olarak alinca
yani yukaridaki if leri dog veya homepage componentinde yapinca 
 problem oluyor?
Neden? Lifecycleri iyici arastir.
            
                color={props.color}
                onClick={() => {
                    props.toggle(props.id);
                }}
            >
                {" "}
                {props.buttonText}
            </Button>
            <br></br>
             */}
            <Button
                disabled={props.isToggling}
                color={color}
                onClick={() => {
                    props.toggle(props.id);
                }}
            >
                {buttonText}
            </Button>
        </div>
    );
};

export default FavoriteActions;
