// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Prisma, PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'; // Un problème avec bcrypt ? npm rebuild !
import { generateCharacter } from '@/redux/store';

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
          // Reminder: the schema doesn't update in VSCode? Open the definition file with F12!
          const joueur = await prisma.joueur.create({
            data: {
              pseudo: req.body.pseudo,
              password: passwordHash,
            },
          });

          // Create an empty character sheet
          let fiche = JSON.stringify(generateCharacter());

          const perso = await prisma.perso.create({
            data: {
              id: joueur.id,
              fiche: fiche,
              joueur_id: joueur.id
            }
          })
  
          res.status(200).json(joueur);
        }
        catch(error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (error.code === 'P2002') {
              res.status(400).json({error: "Ce pseudo est déjà utilisé"});
            }
          }
          else {
            res.status(400).json({error: error});
          }
        }
      }
      
    }
    else {
        res.status(405).json({error: "Méthode invalide"});
    }
  
  }

  signUp();
  // .then(async () => {
  //   await prisma.$disconnect()
  // })
  // .catch(async (e) => {
  //   console.error(e)
  //   await prisma.$disconnect()
  //   process.exit(1)
  // });
}
