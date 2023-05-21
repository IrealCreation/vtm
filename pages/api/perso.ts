// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const prisma = new PrismaClient();

  async function upsertPerso() {

    if (req.method === 'POST') {

      const id = req.body.id;
      let idNumber;

      if(typeof id === "string") {
        idNumber = parseInt(id);
      }
      else {
        idNumber = id;
      }

      if(typeof idNumber === "number") {

        const perso = await prisma.perso.upsert({
          where: {
            id: id
          },
          update: {
            fiche: JSON.stringify(req.body.character)
          },
          create: {
            id: id,
            fiche: JSON.stringify(req.body.character)
          },
        }).then((value) => {
          res.status(200).json(value);
        }).catch((error) => {
          res.status(400).json({error: error});
        });
        // res.status(200).json({reponse: "test"});

        // await prisma.$disconnect();
        
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
