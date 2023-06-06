import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
import { verifyAccessToken } from '@/auth/authManager';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const joueurId = parseInt(verifyAccessToken(req, res));

  const prisma = new PrismaClient();

  async function profil() {

    const joueur = await prisma.joueur.findFirst({
        where: {
            id: joueurId,
        },
    });

    if(joueur != null) {
        res.status(200).json({joueur: {id: joueur.id, pseudo: joueur.pseudo}});
    }
    else {
      res.status(401).json({error: "Le profil n'a pas été trouvé"});
    }
  
  }

  profil();
  // .then(async () => {
  //   await prisma.$disconnect()
  // })
  // .catch(async (e) => {
  //   console.error(e)
  //   await prisma.$disconnect()
  //   process.exit(1)
  // });
}


