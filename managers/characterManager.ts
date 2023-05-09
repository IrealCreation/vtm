import { useContext } from "react";
import { Character } from "@/interfaces/character";

/**
 * Central manager for updating character informations
 */

export function setLignee(): void {
    
}

export function defaultCharacter(): Character {
    const character: Character = {
        nom: "",
        niveau: 1,
        experience: 0
    };
    return character;
}