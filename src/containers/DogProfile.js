import React from "react";
import dogs from "../dogsdata";

const DogProfile = (props) => {
    const secilenId = props.match.params.dogId;
    const selectedDog = dogs.find((dog) => dog.id === secilenId);
    return (
        <div>
            <h1>Secilen Tur: {secilenId}</h1>

            {/* <h2> selectedDog id : {selectedDog}</h2> */}
            {/* <h2> selectedDog name : {selectedDog}</h2> */}
        </div>
    );
};

export default DogProfile;
