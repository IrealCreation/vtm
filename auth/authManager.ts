import { NextApiRequest, NextApiResponse } from "next";
import cookie, { CookieSerializeOptions } from "cookie";
import jwt from "jsonwebtoken";

// BUG : les options semblent ignorer lors de la création du cookie (voir sans doute ligne 17)
const cookieOptions: CookieSerializeOptions = {
    httpOnly: true,
    maxAge: 2592000,
    path: "/",
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
};

export function createAccessToken(id: number, res: NextApiResponse) {
    if (typeof process.env.ACCESS_TOKEN_SECRET === "string") {
        // On crée un token en fonction de l'id de l'utilisateur
        const token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "12 hours" });
        // Stockons ce token dans un cookie
        res.setHeader('Set-Cookie', cookie.serialize("auth", "token", cookieOptions));
        // La méthode cookies() native de next est encore expérimentale : https://nextjs.org/docs/app/api-reference/functions/cookies#cookiessetname-value-options
    }
    else {
        throw new Error("Undefined ACCESS_TOKEN_SECRET environment variable");
    }
};

export function verifyAccessToken(req: NextApiRequest, res: NextApiResponse): string {

    // Récupération du token dans les cookies
    const { auth: token } = req.cookies;
    if(typeof token != "string") {
        res.status(401).json({error: "Error while getting the auth cookie"});
        console.log("Error while getting the auth cookie");
        process.exit(1);
    }

    // Récupération du token dans les headers de la requête
    // let token: string;
    // try {
    //     let headerAuth = req.headers["Authorization"];
    //     if(headerAuth == null) {
    //         throw new Error;
    //     }
    //     if(Array.isArray(headerAuth)) {
    //         headerAuth = headerAuth[0];
    //     }
    //     token = headerAuth.replace("Bearer ", "");
    // }
    // catch {
    //     res.status(401).json({error: "Error while getting the Authorization header"});
    //     console.log("Error while getting the Authorization header");
    //     process.exit(1);
    // }
    
    console.log(token);

    // Si l'utilisateur n'a pas de token...
    if (!token) {
        res.status(401).send({error: "Veuillez vous connecter pour effectuer cette action"});
    }
    
    // Sinon, on le vérifie grâce au secret
    if (typeof process.env.ACCESS_TOKEN_SECRET === "string") {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                res.status(403).send("Token invalide");
                process.exit(1);
            }
            return decoded;
        });
    }
    else {
        throw new Error("Undefined ACCESS_TOKEN_SECRET environment variable");
    }

    throw new Error("Unprocessed verifyAccessToken call");
}