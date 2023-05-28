# VTM

Companion website for a (homeruled) campaign of Vampire the Masquerade.

Inspired by White Wolf Publishing's "World of Darkness".

## Deployment

Upload the files / pull them from Git repository and run the following commands:
- `npm install`
- `npx prisma generate` (updates ORM schema)
- `npm run build`
- if first deployment: `pm2 start --name "vtm" "npm run start"`
- else: `pm2 restart vtm`