import {heroes} from "../data/hero.data";
import {Hero, Publisher} from "../types/hero.types";

export const getHeroByPublisher = (publisher: Publisher) => {
    return heroes.filter(hero => hero.publisher === publisher);
}

export const getHeroByID = (id: string) => {
    return heroes.find(hero => hero.id === id);
}

export const getHeroByName = (name: string = ''): Hero[] => {
    return (name.length > 0) ? heroes.filter(hero => hero.superhero.toLowerCase().includes(name)) : [];
}
