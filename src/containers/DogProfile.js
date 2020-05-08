import React from "react";
import dogs from "../dogsdata";

const DogProfile = (props) => {
    const secilenId = props.match.params.dogId;
    const selectedDog = dogs.find((dog) => dog.id === secilenId);
    if (!selectedDog) {
        return <h1>idsi {secilenId} olan bir kopek bulunamadi.</h1>;
    }
    const {
        name,
        description,
        image,
        age,
        published_at,
        breed,
        breedSlug,
        id,
    } = selectedDog;
    return (
        <div>
            <h1>Secilen Id: {secilenId}</h1>
            <p> {id}</p>
            <p> {name} </p>
            <p> {description} </p>
            <p> {age} </p>
            <p> {published_at} </p>
            <p> {breed} </p>
            <p>{breedSlug}</p>
            <img src={image} />
        </div>
    );
};

export default DogProfile;
