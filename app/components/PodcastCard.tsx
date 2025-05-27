import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const PodcastCard: FC<PodcastCardProps> = ({ podcast }) => {
  const formatDate = (dateString?: string | null) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={podcast.artworkUrl600 || podcast.artworkUrl100}
          alt={podcast.trackName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          priority={false}
        />
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow space-y-2">
        <div className="space-y-1">
          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white line-clamp-2 min-h-[2.5rem]">
            {podcast.trackName}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 font-medium line-clamp-1">
            {podcast.artistName}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 mt-auto">
          {podcast.primaryGenreName && (
            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-0.5 rounded-full">
              {podcast.primaryGenreName}
            </span>
          )}

          {podcast.releaseDate && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {formatDate(podcast.releaseDate)}
            </span>
          )}
        </div>

        {podcast.collectionViewUrl && (
          <Link
            href={podcast.collectionViewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block w-full text-center bg-blue-600 dark:bg-blue-500 text-white px-3 py-1.5 rounded-md font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 text-xs sm:text-sm"
          >
            Listen on Apple Podcasts
          </Link>
        )}
      </div>
    </div>
  );
};

export default PodcastCard;
