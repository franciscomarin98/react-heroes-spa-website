import {heroes} from "../data/hero.data";
import {Publisher} from "../types/hero.types";

export const getHeroByPublisher = (publisher: Publisher) => {
    return heroes.filter(hero => hero.publisher === publisher);
}

export const getHeroByID = (id:string) => {
    return heroes.find(hero => hero.id === id);
}
