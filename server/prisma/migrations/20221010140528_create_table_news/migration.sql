-- CreateTable
CREATE TABLE "News" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "matchId" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    CONSTRAINT "News_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "Match" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Match" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "timeA" TEXT NOT NULL,
    "timeB" TEXT NOT NULL,
    "placarTimeA" TEXT NOT NULL,
    "placarTimeB" TEXT NOT NULL,
    "imgTimeA" TEXT NOT NULL,
    "imgTimeB" TEXT NOT NULL,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Match" ("data", "id", "imgTimeA", "imgTimeB", "placarTimeA", "placarTimeB", "timeA", "timeB") SELECT "data", "id", "imgTimeA", "imgTimeB", "placarTimeA", "placarTimeB", "timeA", "timeB" FROM "Match";
DROP TABLE "Match";
ALTER TABLE "new_Match" RENAME TO "Match";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
