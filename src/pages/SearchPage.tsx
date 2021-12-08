import {useForm} from "../hooks/useForm";
import {FormEvent} from "react";
import queryString from 'query-string';
import {getHeroByName} from "../helpers/hero.helpers";
import {HeroCard} from "../components";
import {useLocation, useNavigate} from "react-router-dom";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    const {formState, handleInputChange} = useForm({
        search: q
    });

    const heroesFiltered = getHeroByName(q);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`?q=${formState.search}`);
    }

    // @ts-ignore
    return (
        <div>
            <div className="row mt-5">
                <div className="col-5">
                    <h4>Search</h4>
                    <hr/>

                    <form onSubmit={handleSubmit}>
                        <input type="text"
                               placeholder="Search hero"
                               className="form-control"
                               name="search"
                               autoComplete="off"
                               value={formState.search!}
                               onChange={handleInputChange}
                        />

                        <button type={"submit"}
                                className="btn btn-primary mt-1">
                            Search
                        </button>

                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>
                    {
                        heroesFiltered.map(hero => (
                            <HeroCard key={hero.id} hero={hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
