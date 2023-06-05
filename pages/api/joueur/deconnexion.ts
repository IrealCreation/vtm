import type { NextApiRequest, NextApiResponse } from 'next'
import { deleteAccessToken } from '@/auth/authManager';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  async function signOut() {
    deleteAccessToken(res);
    res.status(200).json({message: "Déconnexion réussie"});
  }

  signOut();
  
}


