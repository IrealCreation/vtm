// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const prisma = new PrismaClient();

  async function upsertPerso() {

    if (req.method === 'POST') {

      const { id } = req.body.id;

      if(typeof id == "number") {

        const perso = await prisma.perso.upsert({
          where: {
            id: id
          },
          update: {
            fiche: req.body.character
          },
          create: {
            id: id,
            fiche: req.body.character
          },
        }).then((value) => {
          res.status(200).json(value);
        }).catch((reason) => {
          res.status(405).json({reason: reason});
        });
        // res.status(200).json({reponse: "test"});

        // await prisma.$disconnect();
        
      }
      else {
        res.status(405);
      }
    }
    else {
      // await prisma.$disconnect();
      res.status(405);
    }
  
  }

  upsertPerso()

  .then(async () => {

    await prisma.$disconnect()

  })

  .catch(async (e) => {

    console.error(e)

    await prisma.$disconnect()

    process.exit(1)

  });
}
