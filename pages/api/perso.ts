import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { verifyAccessToken } from '@/auth/authManager';
import { findPerso, upsertPerso } from '@/prisma/models/perso';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const joueurId = parseInt(verifyAccessToken(req, res));

  if(req.method === "GET") {
    findPerso(req, res, joueurId, joueurId).then((perso) => {
      if(perso != null) {
        res.status(200).json(perso);
      }
      else {
        res.status(404).json({ error: "Aucun personnage trouvé" });
      }
    })
    .catch((reason) => {
      console.log(reason);
      res.status(400).json({ error: reason });
    });
  }
  else if (req.method === 'POST' || req.method === 'PUT') {
    upsertPerso(req, res, joueurId, joueurId);
  }
  else {
    res.status(405).json({error: "Méthode incorrecte : utilisez GET pour la lecture, et POST / PUT pour l'écriture"});
  }
}
