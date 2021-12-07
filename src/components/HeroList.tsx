import {getHeroByPublisher} from "../helpers/hero.helpers";
import {Publisher} from "../types/hero.types";

type HeroListProps = {
    publisher: Publisher
}

export const HeroList = ({publisher}: HeroListProps) => {

    const heroes = getHeroByPublisher(publisher);

    return (
        <div>
            <h1>Hero List - {publisher}</h1>
            <ul>
                {
                    heroes.map(hero => (
                        <li key={hero.id}>
                            {hero.superhero}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

