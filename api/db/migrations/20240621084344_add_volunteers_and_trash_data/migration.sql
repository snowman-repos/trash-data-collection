/*
  Warnings:

  - You are about to drop the column `data` on the `Record` table. All the data in the column will be lost.
  - Added the required column `cans` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `drums` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `electronics` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `footwear` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `glass` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jerryCans` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfVolunteers` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `other` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plasticContainers` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plasticStraws` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `smokingRelated` to the `Record` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalWeight` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Record" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "numberOfVolunteers" INTEGER NOT NULL,
    "totalWeight" REAL NOT NULL,
    "cans" INTEGER NOT NULL,
    "drums" INTEGER NOT NULL,
    "glass" INTEGER NOT NULL,
    "electronics" INTEGER NOT NULL,
    "footwear" INTEGER NOT NULL,
    "jerryCans" INTEGER NOT NULL,
    "plasticContainers" INTEGER NOT NULL,
    "plasticStraws" INTEGER NOT NULL,
    "smokingRelated" INTEGER NOT NULL,
    "other" TEXT NOT NULL
);
INSERT INTO "new_Record" ("date", "group", "id", "location") SELECT "date", "group", "id", "location" FROM "Record";
DROP TABLE "Record";
ALTER TABLE "new_Record" RENAME TO "Record";
PRAGMA foreign_key_check("Record");
PRAGMA foreign_keys=ON;
