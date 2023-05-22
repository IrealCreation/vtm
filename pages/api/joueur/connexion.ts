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
        try {
          const joueur = await prisma.joueur.findFirst({
            where: {
              pseudo: req.body.pseudo,
            },
          });

          if(joueur != null) {
            // Compare the password sent with the hash in database
            bcrypt.compare(req.body.password, joueur.password, function(err, result) {
                if(result) {
                    // Todo: generate and send a JWT
                    res.status(200).json(joueur);
                }
                else {
                    res.status(401).json({error: "Mot de passe incorrect"});
                }
            })
            
          }
          else {
            res.status(401).json({error: "Aucun joueur avec ce pseudo trouvé"});
          }
  
          
        }
        catch(error) {
          res.status(400).json({error: error});
        }
      }
      
    }
    else {
        res.status(405).json({error: "Méthode invalide"});
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
