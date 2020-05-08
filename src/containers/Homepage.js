import React from "react";
import dogs from "../dogsdata";
import Dog from "../components/Dog";
import axios from "axios";
import { apiHost } from "../personalConfig";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from "../redux/actions";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            favorites: [],
            loadingFavorites: false,
            waitApiProcess: "",
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
            this.setState(
                {
                    waitApiProcess: dogId,
                },
                () => {
                    axios
                        .delete(`${apiHost}/favorites/${foundDog.id}`)
                        .then((result) => {
                            this.setState({
                                favorites: this.state.favorites.filter(
                                    (dog) => dog.dogId !== dogId,
                                ),
                                waitApiProcess: false,
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                },
            );
        } else {
            // window.localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
            this.setState({ waitApiProcess: dogId }, () => {
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
                        this.setState({
                            waitApiProcess: false,
                        });
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
        console.log(this.props.favorites);
        return (
            <div>
                <ul>
                    {dogs.map((dog) => {
                        return (
                            <Dog
                                key={dog.id}
                                toggle={this.toggle}
                                getStatus={this.getStatus}
                                isToggling={
                                    this.state.waitApiProcess === dog.id
                                }
                                {...dog}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        favorites: state.favorites,
    };
};

const mapDispatchToProps = { addFavorite, removeFavorite };

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
