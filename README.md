# Spotify-Web

- Pour lancer l'application en local sans docker il suffit de:
- changer le port dans backend/.env a 4000
- changer le port dans frontend/.env a 8090
- Dans backend/.env commenter la ligne 1 et decommenter la ligne 2


```
cd backend 
npm install --legacy-peer-deps
npm run dev
```

```
cd frontend 
npm install --legacy-peer-deps
npm run dev
```