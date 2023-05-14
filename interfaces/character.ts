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
    attributs: CharacterAttributListe;
    talents: CharacterTalentsListe;
    disciplines: CharacterDisciplineListe;
    ressources: CharacterRessourceListe;
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