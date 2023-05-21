// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const prisma = new PrismaClient();

  async function signUp() {

    if(req.method === "POST") {

      if(typeof req.body.pseudo !== "string") {
        res.status(400).json({error: "Pseudo requis"});
      }
      else if(typeof req.body.password !== "string") {
        res.status(400).json({error: "Mot de passe requis"});
      }
      else {
        const passwordHash = await bcrypt.hash(req.body.password, 10);

        try {
          const joueur = await prisma.joueur.create({
            data: {
              pseudo: req.body.pseudo,
              password: passwordHash,
            },
          });
  
          res.status(200).json(joueur);
        }
        catch(error) {
          res.status(400).json({error: error});
        }
      }
      
    }
    else {
        res.status(405).json({});
    }
  
  }

  signUp().then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  });
}
