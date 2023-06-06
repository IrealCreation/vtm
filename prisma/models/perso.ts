import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { Perso } from '@/interfaces/perso';

export async function upsertPerso(req: NextApiRequest, res: NextApiResponse, id: number, joueurId: number) {

    const prisma = new PrismaClient();

    const perso = await prisma.perso.upsert({
        where: {
            id: joueurId,
        },
        update: {
            fiche: JSON.stringify(req.body.character)
        },
        create: {
            id: joueurId,
            fiche: JSON.stringify(req.body.character),
            joueur_id: joueurId
        },
    }).then((value) => {
        res.status(200).json(value);
    }).catch((error) => {
        console.log(error);
        res.status(400).json({ error: error });
    });

}

export async function findPerso(req: NextApiRequest, res: NextApiResponse, id: number, joueurId: number): Promise<Perso | null> {

    const prisma = new PrismaClient(); 
    
    const perso = await prisma.perso.findUniqueOrThrow({
        where: {
            id: id
        },
    });

    if(perso == null) {
        return null;
    }

    if (perso.joueur_id != joueurId && joueurId != 1) {
        // Le joueur d'id 1 (admin) a le droit d'afficher tous les personnages
        res.status(403).json({ error: "Vous n'avez pas le droit d'accéder à ce personnage" });
        return null;
    }

    return perso;
}