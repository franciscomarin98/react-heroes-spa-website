import {getHeroByPublisher} from "../helpers/hero.helpers";
import {Publisher} from "../types/hero.types";
import {HeroCard} from "./HeroCard";

type HeroListProps = {
    publisher: Publisher
}

export const HeroList = ({publisher}: HeroListProps) => {

    const heroes = getHeroByPublisher(publisher);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3 animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard
                        key={hero.id}
                        hero={hero}
                    />
                ))
            }
        </div>
    )
        ;
};

