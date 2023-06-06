import type { NextApiRequest, NextApiResponse } from 'next'
import { signIn } from '@/prisma/models/joueur';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  signIn(req, res);
  // .then(async () => {
  //   await prisma.$disconnect()
  // })
  // .catch(async (e) => {
  //   console.error(e)
  //   await prisma.$disconnect()
  //   process.exit(1)
  // });
}


