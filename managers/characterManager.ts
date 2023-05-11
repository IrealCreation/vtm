import { useContext } from "react";
import { Character } from "@/interfaces/character";
import { disciplines } from "@/data/disciplines";
import { attributs } from "@/data/attributs";
import { talents } from "@/data/talents";

/**
 * Central manager for updating character informations
 */

export function setLignee(): void {
    
}

export function generateCharacter(): Character {
    const character: Character = {
        nom: "",
        niveau: 1,
        experience: 0,
        disciplines: {},
        attributs: {},
        talents: {}
    };

    // for (const [name, attribut] of Object.entries(attributs)) {
    //     character.attributs[name] = {
    //         attribut: attribut,
    //         niveau: 0
    //     }
    // }
    return character;
}