import type { NextApiRequest, NextApiResponse } from 'next';
import { signOut } from '@/prisma/models/joueur';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  signOut(req, res);
  
}


