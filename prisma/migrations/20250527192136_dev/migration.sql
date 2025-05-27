/*
  Warnings:

  - You are about to drop the column `artworkUrl600` on the `Podcast` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Podcast` table. All the data in the column will be lost.
  - You are about to drop the column `feedUrl` on the `Podcast` table. All the data in the column will be lost.
  - You are about to drop the column `trackCount` on the `Podcast` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Podcast" DROP COLUMN "artworkUrl600",
DROP COLUMN "description",
DROP COLUMN "feedUrl",
DROP COLUMN "trackCount";
