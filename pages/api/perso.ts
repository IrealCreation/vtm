import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { verifyAccessToken } from '@/auth/authManager';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const joueurId = parseInt(verifyAccessToken(req, res));
  
  const prisma = new PrismaClient();

  async function upsertPerso() {

    const perso = await prisma.perso.upsert({
      where: {
        id: joueurId,
      },
      update: {
        fiche: JSON.stringify(req.body.character)
      },
      create: {
        id: joueurId,
        fiche: JSON.stringify(req.body.character),
        joueur_id: joueurId
      },
    }).then((value) => {
      res.status(200).json(value);
    }).catch((error) => {
      console.log(error);
      res.status(400).json({error: error});
    });
    
  }

  async function findPerso() {
      try {
        const perso = await prisma.perso.findUniqueOrThrow({
          where: {
            id: joueurId
          },
        });

        if(perso.joueur_id != joueurId) {
          res.status(403).json({error: "Vous n'avez pas le droit d'accéder à ce personnage"});
        }
        res.status(200).json(perso);
      }
      catch(error) {
        console.log(error);
        res.status(400).json({error: error});
      }
  }

  if(req.method === "GET") {
    findPerso().then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    });
  }
  else if (req.method === 'POST' || req.method === 'PUT') {
    upsertPerso().then(async () => {
      await prisma.$disconnect()
    })
    .catch(async (e) => {
      console.error(e)
      await prisma.$disconnect()
      process.exit(1)
    });
  }
  else {
    res.status(405).json({});
  }
}
