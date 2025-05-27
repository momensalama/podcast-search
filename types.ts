interface PodcastCardProps {
  podcast: {
    trackId: number;
    trackName: string;
    artistName: string;
    artworkUrl100: string;
    artworkUrl600?: string | null;
    description?: string | null;
    primaryGenreName?: string | null;
    trackCount?: number | null;
    releaseDate?: string | null;
    collectionViewUrl?: string | null;
  };
}

interface Podcast {
  id: number;
  trackId: number;
  trackName: string;
  artistName: string;
  artworkUrl100: string;
  description?: string;
}
