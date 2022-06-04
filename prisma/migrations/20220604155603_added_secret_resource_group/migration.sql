/*
  Warnings:

  - Added the required column `location` to the `secret` table without a default value. This is not possible if the table is not empty.
  - Added the required column `resourceGropup` to the `secret` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_secret" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tenantId" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "clientSecret" TEXT NOT NULL,
    "subscriptionId" TEXT NOT NULL,
    "resourceGropup" TEXT NOT NULL,
    "location" TEXT NOT NULL
);
INSERT INTO "new_secret" ("clientId", "clientSecret", "id", "subscriptionId", "tenantId") SELECT "clientId", "clientSecret", "id", "subscriptionId", "tenantId" FROM "secret";
DROP TABLE "secret";
ALTER TABLE "new_secret" RENAME TO "secret";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
