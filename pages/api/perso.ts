import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { verifyAccessToken } from '@/auth/authManager';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const joueurId = parseInt(verifyAccessToken(req, res));
  console.log(joueurId);
  
  const prisma = new PrismaClient();

  async function upsertPerso() {

    if (req.method === 'POST' || req.method === 'PUT') {

      const id = req.body.id;
      let idNumber;

      if(typeof id === "string")
        idNumber = parseInt(id);
      else
        idNumber = id;

      if(typeof idNumber === "number") {

        const perso = await prisma.perso.upsert({
          where: {
            id: id,
          },
          update: {
            fiche: JSON.stringify(req.body.character)
          },
          create: {
            id: id,
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
      else {
        res.status(400).json({error: "ID incorrect:" + typeof idNumber});
      }
    }
    else {
      // await prisma.$disconnect();
      res.status(405).json({});
    }
  
  }

  upsertPerso().then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
}
