-- CreateTable
CREATE TABLE "Record" (
    "id" SERIAL NOT NULL,
    "date" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "numberOfVolunteers" INTEGER NOT NULL,
    "totalWeight" DOUBLE PRECISION NOT NULL,
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
    "other" TEXT NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrashData" (
    "id" SERIAL NOT NULL,
    "data" TEXT NOT NULL,

    CONSTRAINT "TrashData_pkey" PRIMARY KEY ("id")
);
