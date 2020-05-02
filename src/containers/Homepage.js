import React from "react";
import dogs from "../dogsdata";
import Dog from "../components/Dog";
import axios from "axios";
import { apiHost } from "../personalConfig";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: [],
            loadingFavorites: false,
            waitApiProcess: false,
        };
    }
    componentDidMount() {
        // localstoragedan getirme
        /*        this.setState({
            favorites: window.localStorage.getItem("favorites") ? JSON.parse(window.localStorage.getItem("favorites")): []
        })*/

        this.setState(
            {
                loadingFavorites: true,
            },
            () => {
                axios
                    .get(`${apiHost}/favorites`)
                    .then((result) => {
                        this.setState({
                            favorites: result.data,
                            loadingFavorites: false,
                        });
                    })
                    .catch((err) => {
                        console.log("Axios err", err);
                        this.setState({
                            loadingFavorites: false,
                        });
                    });
            },
        );
    }

    toggle = (dogId) => {
        const foundDog = this.state.favorites.find(
            (favorite) => favorite.dogId === dogId,
        );
        if (foundDog) {
            axios
                .delete(`${apiHost}/favorites/${foundDog.id}`)
                .then((result) => {
                    this.setState({
                        favorites: this.state.favorites.filter(
                            (dog) => dog.dogId !== dogId,
                        ),
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
            this.setState({ waitApiProcess: true }, () => {
                axios
                    .post(`${apiHost}/favorites`, {
                        dogId,
                    })
                    .then((result) => {
                        const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
                        this.setState({
                            favorites: [...this.state.favorites, eklenenFavori],
                            waitApiProcess: false,
                        });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        }
    };

    getStatus = (dogId) => {
        const foundDog = this.state.favorites.find(
            (favorite) => favorite.dogId === dogId,
        );
        return foundDog;
    };

    render() {
        if (this.state.loadingFavorites) {
            return (
                <div>
                    <h1>Sayfa Yukleniyor.....</h1>
                </div>
            );
        }
        return (
            <div>
                <ul>
                    {dogs.map((dog) => {
                        let color = "info";
                        let buttonText = "islem yapiliyor";
                        if (this.getStatus(dog.id)) {
                            color = "danger";
                            buttonText = "Favorilerden Cikar";
                        } else {
                            color = "primary";
                            buttonText = "Favoriye Ekle";
                        }
                        if (this.state.waitApiProcess) {
                            return (
                                <Dog
                                    toggle={this.toggle}
                                    id={dog.id}
                                    getStatus={this.getStatus}
                                    {...dog}
                                    buttonText={buttonText}
                                />
                            );
                        } else {
                            return (
                                <Dog
                                    toggle={this.toggle}
                                    id={dog.id}
                                    getStatus={this.getStatus}
                                    {...dog}
                                    buttonText={buttonText}
                                />
                            );
                        }
                    })}
                </ul>
            </div>
        );
    }
}

export default Homepage;
