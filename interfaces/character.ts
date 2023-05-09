import { Lignee } from "@/data/lignees";
import { Discipline, disciplines } from "@/data/disciplines";
import { Attribut, attributs } from "@/data/attributs";
import { Talent } from "@/data/talents";

export interface Character {
    nom: string;
    niveau: number;
    experience: number;
    lignee?: Lignee;
    attributs?: Array<CharacterAttribut>;
    talents?: Array<CharacterTalents>;
    disciplines?: Array<CharacterDiscipline>;
}

interface CharacterDiscipline {
    discipline: Discipline;
    niveau: number;
}

interface CharacterAttribut {
    attribut: Attribut;
    niveau: number;
}

interface CharacterTalents {
    talent: Talent;
    niveau: number;
}