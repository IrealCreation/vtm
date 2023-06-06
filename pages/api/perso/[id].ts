import type { NextApiRequest, NextApiResponse } from 'next';
import { verifyAccessToken } from '@/auth/authManager';
import { findPerso } from '@/prisma/models/perso';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const joueurId = parseInt(verifyAccessToken(req, res));

  findPerso(req, res, joueurId, joueurId).then((perso) => {
    if(perso != null) {
      res.status(200).json(perso);
    }
    else {
      res.status(404).json({ error: "Aucun personnage trouvé" });
    }
  })
}
