import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export function createAccessToken(id: number) {
  if (typeof process.env.ACCESS_TOKEN_SECRET === "string") {
    // On retourne un token en fonction de l'id utilisateur
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1 hours" });
  }
  else {
    throw new Error("Undefined ACCESS_TOKEN_SECRET environment variable");
  }
};

export function verifyAccessToken(req: NextApiRequest, res: NextApiResponse): string | false {

    let token: string;

    // Récupération du token dans les headers de la requête
    try {
        let headerAuth = req.headers["Authorization"];
        if(headerAuth == null) {
            throw new Error;
        }
        if(Array.isArray(headerAuth)) {
            headerAuth = headerAuth[0];
        }
        token = headerAuth.replace("Bearer ", "");
    }
    catch {
        res.status(401).json({error: "Error while getting the Authorization header"});
        console.log("Error while getting the Authorization header");
        process.exit(1);
    }
    
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

    return false;
}