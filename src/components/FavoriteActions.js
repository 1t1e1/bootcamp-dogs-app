import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { toggleFavorite, toggleFavoriteAsync } from "../redux/actions";

const FavoriteActions = (props) => {
    const foundDog = props.favorites.find((favorite) => favorite === props.id);
    let color, buttonText;
    if (props.isToggling) {
        color = "secondary";
        buttonText = "islem yapiliyor";
    } else if (foundDog) {
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
                    props.toggleFavoriteAsync(props.id);
                }}
            >
                {buttonText}
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
    };
};

const mapDispatchToProps = {
    toggleFavorite,
    toggleFavoriteAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteActions);
