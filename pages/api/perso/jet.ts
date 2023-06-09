import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyAccessToken } from '@/auth/authManager';
import { findPerso } from '@/prisma/models/perso';
import { Character } from '@/interfaces/character';
import { Jet } from '@/interfaces/jet';
import { calculSoif } from '@/interfaces/character';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const joueurId = parseInt(verifyAccessToken(req, res));

  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Méthode POST attendue' })
    return
  }

  findPerso(req, res, joueurId, joueurId).then((perso) => {

    if(perso == null) {
        res.status(404).json({ error: "Aucun personnage trouvé" });
        return;
    }

    try {
        const character = JSON.parse(perso.fiche) as Character;

        let stat1 = req.body.stat1;
        let stat2 = req.body.stat2;
        let bonus = 0;
        if(typeof(req.body.bonus) == "number") {
            bonus = req.body.bonus;
        }

        const jet = lanceLesDes(character, stat1, stat2, bonus);

        res.status(200).json({jet: jet});
    }
    catch(error) {
        res.status(406).json({error: "Fiche personnage mal mise en forme"});
    }
    
  });
}

function lanceLesDes(character: Character, stat1: string, stat2: string, bonus: number): Jet {
    let value1 = statNiveau(character, stat1);
    let value2 = statNiveau(character, stat2);

    let nbDes = value1 + value2 + bonus;
    let des: Array<number> = [];
    let reussites = 0;
    let soif = calculSoif(character);
    let compulsions = 0;

    for (let index = 0; index < nbDes; index++) {
        let random = Math.floor(Math.random() * 10 + 1);
        if(random > 5) {
            reussites ++;
        }

        if(index < soif && random == 1) {
            compulsions ++;
        }

        des.push(random);
    }

    const jet: Jet = {
        stat1: stat1,
        stat2: stat2,
        value1: value1, 
        value2: value2,
        bonus: bonus,
        des: des,
        reussites: reussites,
        soif: soif,
        compulsions: compulsions, 
        timestamp: Date.now()
    }

    return jet;
}

function statNiveau(character:Character, statName: string): number {

    if(character.attributs.hasOwnProperty(statName)) {
        return character.attributs[statName].niveau;
    }
    if(character.talents.hasOwnProperty(statName)) {
        return character.talents[statName].niveau;
    }
    if(character.disciplines.hasOwnProperty(statName)) {
        return character.disciplines[statName].niveau;
    }
    if(character.ressources.hasOwnProperty(statName)) {
        return character.ressources[statName].niveau;
    }

    console.log("Stat " + statName + " inconnue dans statNiveau()")

    return 0;
}
