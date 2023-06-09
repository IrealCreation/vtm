import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyAccessToken } from '@/auth/authManager';
import { findPerso } from '@/prisma/models/perso';
import { Character } from '@/interfaces/character';
import { Jet } from '@/interfaces/jet';

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

        let value1 = statNiveau(character, stat1);
        let value2 = statNiveau(character, stat2);

        const jet: Jet = {
            stat1: stat1,
            stat2: stat2,
            value1: value1, 
            value2: value2
        }

        res.status(200).json({jet: jet});
    }
    catch(error) {
        res.status(406).json({error: "Fiche personnage mal mise en forme"});
    }
    
  });
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
