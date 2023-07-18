import { Lignee } from "@/data/lignees";
import { Discipline, disciplines } from "@/data/disciplines";
import { Attribut, attributs } from "@/data/attributs";
import { Talent } from "@/data/talents";
import { Ressource } from "@/data/ressources";

export interface Character {
    nom: string;
    niveau: number;
    experience: number;
    activite?: string;
    apparence?: string;
    personnalite?: string;
    lignee?: Lignee;
    sante: number;
    santeMax: number;
    santeNiveau?: number;
    volonte: number;
    volonteMax: number;
    volonteNiveau?: number;
    sang: number;
    sangMax: number;
    sangNiveau?: number;
    humanite: number;
    attributs: CharacterAttributListe;
    talents: CharacterTalentsListe;
    disciplines: CharacterDisciplineListe;
    ressources: CharacterRessourceListe;
    inventaire?: string;
}

export interface CharacterDisciplineListe {
    [index:string]: CharacterDiscipline
}

interface CharacterDiscipline {
    discipline: Discipline;
    niveau: number;
}

export interface CharacterAttributListe {
    [index:string]: CharacterAttribut
}

interface CharacterAttribut {
    attribut: Attribut;
    niveau: number;
}

export interface CharacterTalentsListe {
    [index:string]: CharacterTalents
}

interface CharacterTalents {
    talent: Talent;
    niveau: number;
}

export interface CharacterRessourceListe {
    [index:string]: CharacterRessource
}

interface CharacterRessource {
    ressource: Ressource;
    niveau: number;
    detail: string;
}

export function calculSoif(character: Character): number {
    return Math.floor((character.sangMax - character.sang) / 3);
}