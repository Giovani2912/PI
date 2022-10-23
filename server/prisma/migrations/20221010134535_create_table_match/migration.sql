-- CreateTable
CREATE TABLE "Match" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "timeA" TEXT NOT NULL,
    "timeB" TEXT NOT NULL,
    "placarTimeA" TEXT NOT NULL,
    "placarTimeB" TEXT NOT NULL,
    "imgTimeA" TEXT NOT NULL,
    "imgTimeB" TEXT NOT NULL,
    "data" DATETIME NOT NULL
);
