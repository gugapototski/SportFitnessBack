# SportFitnessBack

![NestJS](https://img.shields.io/badge/NestJS-API-E0234E?logo=nestjs)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?logo=prisma)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-ready-4169E1?logo=postgresql&logoColor=white)

Backend do aplicativo SportFitness, responsavel por usuarios, treinos, dietas e dicas.

## Modulos

- `user`: usuarios e autenticacao.
- `treinos`: cadastro e consulta de treinos.
- `treinodia`: treinos por dia.
- `dieta`: dietas do usuario.
- `dicas`: conteudos e dicas fitness.

## Estrutura

```text
src/       codigo da API NestJS
prisma/    schema e migrations
test/      testes e2e
```

## Como rodar

```bash
npm install
cp .env.example .env
npx prisma migrate dev
npm run start:dev
```

## Scripts uteis

```bash
npm run build
npm run test
npm run lint
```

## Ambiente

Configure a `DATABASE_URL` no arquivo `.env`. O arquivo real de ambiente nao deve ser enviado para o GitHub.
