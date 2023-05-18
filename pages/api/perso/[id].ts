// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

export default function handler(req: NextApiRequest, res: NextApiResponse) {

  async function orm() {
    if(req.method === "GET") {
      const { id } = req.query;

      if(typeof id == "string") {

        const idNumber = parseInt(id);
        console.log(idNumber);

        const prisma = new PrismaClient();

        // const persos = await prisma.perso.findMany();
        // await prisma.$disconnect();
        // res.status(200).json(persos);

        try {
            const perso = await prisma.perso.findUniqueOrThrow({
                where: {
                  id: idNumber
                },
              });
    
              await prisma.$disconnect();
              res.status(200).json(perso);
        }
        catch(error) {
            res.status(400);
            await prisma.$disconnect();
        }
      }
      else {
        res.status(400);
      }
    }
    else {
        res.status(405);
    }
  
  }

  orm();
}
