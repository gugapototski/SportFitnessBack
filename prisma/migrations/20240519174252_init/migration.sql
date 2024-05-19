-- CreateTable
CREATE TABLE "users" (
    "iduser" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "codpersonal" TEXT NOT NULL,
    "flagpersonal" BOOLEAN NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("iduser")
);

-- CreateTable
CREATE TABLE "treinos" (
    "idtreinos" SERIAL NOT NULL,
    "iduser" INTEGER NOT NULL,
    "diasemana" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "treinos_pkey" PRIMARY KEY ("idtreinos")
);

-- CreateTable
CREATE TABLE "treinodia" (
    "idtreinodia" SERIAL NOT NULL,
    "iduser" INTEGER NOT NULL,
    "idtreinos" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "treinodia_pkey" PRIMARY KEY ("idtreinodia")
);

-- CreateTable
CREATE TABLE "dieta" (
    "iddieta" SERIAL NOT NULL,
    "iduser" INTEGER NOT NULL,
    "diasemana" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "dieta_pkey" PRIMARY KEY ("iddieta")
);

-- CreateTable
CREATE TABLE "dietadia" (
    "idtreinodia" SERIAL NOT NULL,
    "iduser" INTEGER NOT NULL,
    "iddieta" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "dietadia_pkey" PRIMARY KEY ("idtreinodia")
);

-- CreateTable
CREATE TABLE "dicas" (
    "iddica" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "dicas_pkey" PRIMARY KEY ("iddica")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "treinos" ADD CONSTRAINT "treinos_iduser_fkey" FOREIGN KEY ("iduser") REFERENCES "users"("iduser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treinodia" ADD CONSTRAINT "treinodia_iduser_fkey" FOREIGN KEY ("iduser") REFERENCES "users"("iduser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "treinodia" ADD CONSTRAINT "treinodia_idtreinos_fkey" FOREIGN KEY ("idtreinos") REFERENCES "treinos"("idtreinos") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dieta" ADD CONSTRAINT "dieta_iduser_fkey" FOREIGN KEY ("iduser") REFERENCES "users"("iduser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dietadia" ADD CONSTRAINT "dietadia_iduser_fkey" FOREIGN KEY ("iduser") REFERENCES "users"("iduser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dietadia" ADD CONSTRAINT "dietadia_iddieta_fkey" FOREIGN KEY ("iddieta") REFERENCES "dieta"("iddieta") ON DELETE RESTRICT ON UPDATE CASCADE;
