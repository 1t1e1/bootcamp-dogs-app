import React from "react";
import dogs from "../dogsdata";
import Dog from "../components/Dog";
import axios from "axios";
import { apiHost } from "../personalConfig";
import { connect } from "react-redux";

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            // favorites: [],
            loadingFavorites: false,
            waitApiProcess: "",
        };
    }
    // componentDidMount() {
    // this.setState(
    //     {
    //         loadingFavorites: true,
    //     },
    //     () => {
    //         axios
    //             .get(`${apiHost}/favorites`)
    //             .then((result) => {
    //                 this.setState({
    //                     favorites: result.data,
    //                     loadingFavorites: false,
    //                 });
    //             })
    //             .catch((err) => {
    //                 console.log("Axios err", err);
    //                 this.setState({
    //                     loadingFavorites: false,
    //                 });
    //             });
    //     },
    // );
    // }

    // toggle = (dogId) => {
    //     const foundDog = this.state.favorites.find(
    //         (favorite) => favorite.dogId === dogId,
    //     );
    //     if (foundDog) {
    //         this.setState(
    //             {
    //                 waitApiProcess: dogId,
    //             },
    //             () => {
    //                 axios
    //                     .delete(`${apiHost}/favorites/${foundDog.id}`)
    //                     .then((result) => {
    //                         this.setState({
    //                             favorites: this.state.favorites.filter(
    //                                 (dog) => dog.dogId !== dogId,
    //                             ),
    //                             waitApiProcess: false,
    //                         });
    //                     })
    //                     .catch((err) => {
    //                         console.log(err);
    //                     });
    //             },
    //         );
    //     } else {
    //         this.setState({ waitApiProcess: dogId }, () => {
    //             axios
    //                 .post(`${apiHost}/favorites`, {
    //                     dogId,
    //                 })
    //                 .then((result) => {
    //                     const eklenenFavori = result.data; // {id: 1, dogId: benim yolladigim dog id, createdat: date}
    //                     this.setState({
    //                         favorites: [...this.state.favorites, eklenenFavori],
    //                         waitApiProcess: false,
    //                     });
    //                 })
    //                 .catch((err) => {
    //                     this.setState({
    //                         waitApiProcess: false,
    //                     });
    //                     console.log(err);
    //                 });
    //         });
    //     }
    // };

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
                        return (
                            <Dog
                                key={dog.id}
                                isToggling={
                                    this.props.loading.buttonProcess === dog.id
                                    // this.state.waitApiProcess === dog.id
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

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
        loading: state.loading,
    };
};

export default connect(mapStateToProps, null)(Homepage);
