-- CreateTable
CREATE TABLE "todos" (
    "Serial" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "done" BOOLEAN NOT NULL,

    CONSTRAINT "todos_pkey" PRIMARY KEY ("Serial")
);
