import type { NextApiRequest, NextApiResponse } from 'next'
import { verifyAccessToken } from '@/auth/authManager';
import { findJoueur } from '@/prisma/models/joueur';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const joueurId = parseInt(verifyAccessToken(req, res));

  findJoueur(req, res, joueurId).then((joueur) => {
    if (joueur != null) {
      res.status(200).json({ joueur: { id: joueur.id, pseudo: joueur.pseudo } });
    }
    else {
      res.status(401).json({ error: "Le profil n'a pas été trouvé" });
    }
  });
}
