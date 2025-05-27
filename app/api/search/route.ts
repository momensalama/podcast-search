import { NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");

    if (!query) {
      return NextResponse.json(
        { error: "Search query is required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://itunes.apple.com/search?term=${query}&media=podcast&limit=10`
    );
    const data = await response.json();
    const results = data.results;

    const savedPodcasts = await Promise.all(
      results.map(async (podcast: any) => {
        return prisma.podcast.upsert({
          where: { trackId: podcast.trackId },
          update: {
            trackName: podcast.trackName,
            artistName: podcast.artistName,
            artworkUrl100: podcast.artworkUrl100,
            collectionName: podcast.collectionName || null,
            primaryGenreName: podcast.primaryGenreName || null,
            releaseDate: podcast.releaseDate
              ? new Date(podcast.releaseDate)
              : null,
            collectionViewUrl: podcast.collectionViewUrl || null,
            trackViewUrl: podcast.trackViewUrl || null,
          },
          create: {
            trackId: podcast.trackId,
            trackName: podcast.trackName,
            artistName: podcast.artistName,
            artworkUrl100: podcast.artworkUrl100,
            collectionName: podcast.collectionName || null,
            primaryGenreName: podcast.primaryGenreName || null,
            releaseDate: podcast.releaseDate
              ? new Date(podcast.releaseDate)
              : null,
            collectionViewUrl: podcast.collectionViewUrl || null,
            trackViewUrl: podcast.trackViewUrl || null,
          },
        });
      })
    );

    return NextResponse.json(savedPodcasts);
  } catch (error) {
    console.error("Search error:", error);
    return NextResponse.json(
      { error: "Failed to search podcasts" },
      { status: 500 }
    );
  }
}
