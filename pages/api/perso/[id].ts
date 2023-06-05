import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { verifyAccessToken } from '@/auth/authManager';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const joueurId = parseInt(verifyAccessToken(req, res));

  const prisma = new PrismaClient();

  async function findPerso() {

    if(req.method === "GET") {
      const { id } = req.query;

      if(typeof id == "string") {

        const idPerso = parseInt(id);

        try {
          const perso = await prisma.perso.findUniqueOrThrow({
            where: {
              joueur_id: joueurId
            },
          });

          if(perso.joueur_id != joueurId) {
            res.status(403).json({error: "Vous n'avez pas le droit d'accéder à ce personnage"});
          }
          res.status(200).json(perso);
        }
        catch(error) {
          res.status(400).json({error: error});
        }
      }
      else {
        res.status(400).json({});
      }
    }
    else {
        res.status(405).json({});
    }
  
  }

  findPerso().then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
}
