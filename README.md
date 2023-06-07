# VTM

Companion website for a homeruled campaign of Vampire the Masquerade.

Inspired by White Wolf Publishing's "World of Darkness".

## Deployment

Upload the files / pull them from Git repository and run the following commands:
- `npm install` (if something goes bad: `npm rebuild`)
- `npx prisma generate` (updates ORM schema)
- `npm run build` 
- if first deployment: `pm2 start --name "vtm" "npm run start"`
- else: `pm2 restart vtm`

Don't forget to create the .env file containing the following informations (see .env.example):
- `DATABASE_URL`
- `ACCESS_TOKEN_SECRET`
- `NODE_ENV`