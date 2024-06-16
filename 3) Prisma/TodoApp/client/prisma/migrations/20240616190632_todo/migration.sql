-- CreateTable
CREATE TABLE "todoList" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "todoList_pkey" PRIMARY KEY ("id")
);
