import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroByID} from "../helpers/hero.helpers";

export const HeroPage = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const heroe = getHeroByID(id!);
    if (!heroe) {
        return <Navigate to={'/'}/>
    }

    const imgPath = `../src/assets/heroes/${heroe.id}.jpg`

    const handleReturnToHome = () => {
        navigate(-1);
    }

    return (
        <div className={"row mt-5"}>
            <div className="col-4">
                <img className={"img-thumbnail"}
                     src={imgPath}
                     alt={heroe.superhero}/>
            </div>
            <div className="col-8">
                <h3>{heroe.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <b>Alter ego: </b>
                        {heroe.alter_ego}
                    </li>
                    <li className="list-group-item">
                        <b>Publisher: </b>
                        {heroe.publisher}
                    </li>
                    <li className="list-group-item">
                        <b>First Appearance: </b>
                        {heroe.first_appearance}
                    </li>
                </ul>
                <h5 className={"mt-3"}>Characters</h5>
                <p>{heroe.characters}</p>

                <button className={"btn btn-outline-info"}
                        onClick={handleReturnToHome}>
                    Regresar
                </button>
            </div>
        </div>
    );
};

