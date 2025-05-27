-- AlterTable
ALTER TABLE "Podcast" ADD COLUMN     "artworkUrl600" TEXT,
ADD COLUMN     "collectionName" TEXT,
ADD COLUMN     "collectionViewUrl" TEXT,
ADD COLUMN     "feedUrl" TEXT,
ADD COLUMN     "primaryGenreName" TEXT,
ADD COLUMN     "releaseDate" TIMESTAMP(3),
ADD COLUMN     "trackCount" INTEGER,
ADD COLUMN     "trackViewUrl" TEXT;
