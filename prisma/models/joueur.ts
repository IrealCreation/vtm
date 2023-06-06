import type { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt'; // Un problème avec bcrypt ? npm rebuild !
import { createAccessToken, deleteAccessToken } from '@/auth/authManager';
import { Prisma, PrismaClient } from '@prisma/client';
import { generateCharacter } from '@/redux/store';
import { Joueur } from '@/interfaces/joueur';

export async function signIn(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {

        if (typeof req.body.pseudo !== "string") {
            res.status(400).json({ error: "Pseudo requis" });
        }
        else if (typeof req.body.password !== "string") {
            res.status(400).json({ error: "Mot de passe requis" });
        }
        else {

            const prisma = new PrismaClient();

            try {
                const joueur = await prisma.joueur.findFirst({
                    where: {
                        pseudo: req.body.pseudo,
                    },
                });

                if (joueur != null) {
                    // Compare the password sent with the hash in database
                    bcrypt.compare(req.body.password, joueur.password, function (err, result) {
                        if (result) {
                            // Create the JWT
                            createAccessToken(joueur.id, res);
                            res.status(200).json({ joueur: { id: joueur.id, pseudo: joueur.pseudo } });
                        }
                        else {
                            res.status(401).json({ error: "Mot de passe incorrect" });
                        }
                    })

                }
                else {
                    res.status(401).json({ error: "Aucun joueur avec ce pseudo trouvé" });
                }

            }
            catch (error) {
                res.status(400).json({ error: "Erreur de connexion à la base de données" });
            }
        }

    }
    else {
        res.status(405).json({ error: "Méthode invalide" });
    }

}

export async function signOut(req: NextApiRequest, res: NextApiResponse) {
    deleteAccessToken(res);
    res.status(200).json({ message: "Déconnexion réussie" });
}

export async function signUp(req: NextApiRequest, res: NextApiResponse) {

    const prisma = new PrismaClient();

    if (req.method === "POST") {

        if (typeof req.body.pseudo !== "string") {
            res.status(400).json({ error: "Pseudo requis" });
        }
        else if (typeof req.body.password !== "string") {
            res.status(400).json({ error: "Mot de passe requis" });
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
            catch (error) {
                if (error instanceof Prisma.PrismaClientKnownRequestError) {
                    // The .code property can be accessed in a type-safe manner
                    if (error.code === 'P2002') {
                        res.status(400).json({ error: "Ce pseudo est déjà utilisé" });
                    }
                }
                else {
                    res.status(400).json({ error: error });
                }
            }
        }

    }
    else {
        res.status(405).json({ error: "Méthode invalide" });
    }

}

export async function findJoueur(req: NextApiRequest, res: NextApiResponse, joueurId: number): Promise<Joueur | null> {

    const prisma = new PrismaClient();

    const joueur = await prisma.joueur.findFirst({
        where: {
            id: joueurId,
        },
    });

    return joueur;
}