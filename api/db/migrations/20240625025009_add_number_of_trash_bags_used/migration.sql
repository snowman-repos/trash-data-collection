/*
  Warnings:

  - Added the required column `trashBagsUsed` to the `Record` table without a default value. This is not possible if the table is not empty.

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
    "trashBagsUsed" INTEGER NOT NULL,
    "cans" INTEGER NOT NULL,
    "drums" INTEGER NOT NULL,
    "glass" INTEGER NOT NULL,
    "electronics" INTEGER NOT NULL,
    "footwear" INTEGER NOT NULL,
    "jerryCans" INTEGER NOT NULL,
    "plasticContainers" INTEGER NOT NULL,
    "plasticStraws" INTEGER NOT NULL,
    "smokingRelated" INTEGER NOT NULL,
    "tires" INTEGER NOT NULL,
    "other" TEXT NOT NULL
);
INSERT INTO "new_Record" ("cans", "date", "drums", "electronics", "footwear", "glass", "group", "id", "jerryCans", "location", "numberOfVolunteers", "other", "plasticContainers", "plasticStraws", "smokingRelated", "tires", "totalWeight") SELECT "cans", "date", "drums", "electronics", "footwear", "glass", "group", "id", "jerryCans", "location", "numberOfVolunteers", "other", "plasticContainers", "plasticStraws", "smokingRelated", "tires", "totalWeight" FROM "Record";
DROP TABLE "Record";
ALTER TABLE "new_Record" RENAME TO "Record";
PRAGMA foreign_key_check("Record");
PRAGMA foreign_keys=ON;
