import React from "react";
import {findAllTournaments, findTournamentsLeftForUser} from "../services/tournamentService";
import {Link} from "react-router-dom";

export class HomePageComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tournaments: []
        }
    }

    componentDidMount(): void {
        findAllTournaments()
            .then(tournaments => {
                this.setState({
                    tournaments: tournaments
                })
            })
    }
    render(){
        return(
            <div>
                    <div className={'jumbotron'}>
                        <h1 className={'text-center text-top'} style={{fontSize: "48px"}}>FIANCHETTO</h1>
                    </div>
                <br/>
            <div className={'container'}>
                <h2 style={{color: "#5D6D7E"}}>ACTIVE TOURNAMENTS</h2>
                <div className="border-top my-3"/>
                <div className={"row"}>
                    {
                        this.state.tournaments.map((tournament,index) =>
                            <div className={"col-3"} style={{border: "1px lightgrey solid", 'border-radius':"5px", margin: "10px"}}>
                                <img className="card-img-top" src="https://images.chesscomfiles.com/uploads/v1/article/25126.7ba343a5.1200x674o.34772f7f578c.jpeg"
                                     alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">{tournament.name}</h5>
                                    <p className="card-text">
                                        {tournament.description}
                                    </p>
                                    <div style={{}}>
                                        <br/>
                                        <Link to={'/login'}>
                                            <button className={"col btn btn-success"}>
                                                Participate Now
                                            </button>
                                        </Link>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            </div>
        )
    }
}
