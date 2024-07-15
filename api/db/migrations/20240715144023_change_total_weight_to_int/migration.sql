/*
  Warnings:

  - You are about to alter the column `totalWeight` on the `Record` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Record" ALTER COLUMN "totalWeight" SET DATA TYPE INTEGER;
