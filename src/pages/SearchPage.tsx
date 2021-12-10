import {useForm} from "../hooks/useForm";
import {FormEvent, useMemo} from "react";
import queryString from 'query-string';
import {getHeroByName} from "../helpers/hero.helpers";
import {Alert, HeroCard} from "../components";
import {useLocation, useNavigate} from "react-router-dom";
import {Hero} from "../types/hero.types";

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const {q = ''} = queryString.parse(location.search);
    const {formState, handleInputChange} = useForm({
        search: q
    });

    // @ts-ignore
    const heroesFiltered = useMemo(() => getHeroByName(q), [q]);

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
                               placeholder="Write something here"
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
                        (q === '') ? <Alert className={'info'} msg={'Search a hero'}/>
                            : (heroesFiltered.length === 0) && <Alert className={'danger'} msg={'No results found'}/>
                    }

                    {
                        heroesFiltered.map((hero: Hero) => (
                            <HeroCard key={hero.id} hero={hero}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
