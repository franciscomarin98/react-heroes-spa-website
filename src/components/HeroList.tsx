import {getHeroByPublisher} from "../helpers/hero.helpers";
import {Publisher} from "../types/hero.types";
import {HeroCard} from "./HeroCard";
import {useMemo} from "react";

type HeroListProps = {
    publisher: Publisher
}

export const HeroList = ({publisher}: HeroListProps) => {

    const heroes = useMemo(() => getHeroByPublisher(publisher), [publisher]);

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

