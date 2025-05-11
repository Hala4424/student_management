/*
  Warnings:

  - You are about to drop the column `courseCode` on the `Course` table. All the data in the column will be lost.
  - Added the required column `Code` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Course" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL
);
INSERT INTO "new_Course" ("category", "id", "name") SELECT "category", "id", "name" FROM "Course";
DROP TABLE "Course";
ALTER TABLE "new_Course" RENAME TO "Course";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
