import React, { useState, useEffect } from 'react';
import './Release.css';
import Header from './Header';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Release = () => {
  const releases = {
    albums: {
      items: [
        {
          album_type: "album",
          total_tracks: 16,
          available_markets: ["FR"],
          external_urls: {
            spotify: "https://open.spotify.com/album/7yxd0DGipOiS2oCeo93EKy"
          },
          id: "7yxd0DGipOiS2oCeo93EKy",
          images: [
            {
              url: "https://i.scdn.co/image/ab67616d0000b27395a248139b5a5da78551b863",
              height: 640,
              width: 640
            },
            {
              url: "https://i.scdn.co/image/ab67616d00001e0295a248139b5a5da78551b863",
              height: 300,
              width: 300
            },
            {
              url: "https://i.scdn.co/image/ab67616d0000485195a248139b5a5da78551b863",
              height: 64,
              width: 64
            }
          ],
          name: "Saison 2",
          release_date: "2024-01-12",
          release_date_precision: "day",
          type: "album",
          uri: "spotify:album:7yxd0DGipOiS2oCeo93EKy",
          artists: [
            {
              external_urls: {
                spotify: "https://open.spotify.com/artist/1nRbtbdYK51y71nVOxu332"
              },
              id: "1nRbtbdYK51y71nVOxu332",
              name: "Kerchak",
              type: "artist",
              uri: "spotify:artist:1nRbtbdYK51y71nVOxu332"
            }
          ]
        },
        {
          album_type: "album",
          total_tracks: 14,
          available_markets: ["FR"],
          external_urls: {
            spotify: "https://open.spotify.com/album/5U20AVSsUvycGtWip4XQfo"
          },
          id: "5U20AVSsUvycGtWip4XQfo",
          images: [
            {
              url: "https://i.scdn.co/image/ab67616d0000b2736b291990c6ae00ab2fe5bfcc",
              height: 640,
              width: 640
            },
            {
              url: "https://i.scdn.co/image/ab67616d00001e026b291990c6ae00ab2fe5bfcc",
              height: 300,
              width: 300
            },
            {
              url: "https://i.scdn.co/image/ab67616d000048516b291990c6ae00ab2fe5bfcc",
              height: 64,
              width: 64
            }
          ],
          name: "ORQUÍDEAS",
          release_date: "2024-01-12",
          release_date_precision: "day",
          type: "album",
          uri: "spotify:album:5U20AVSsUvycGtWip4XQfo",
          artists: [
            {
              external_urls: {
                spotify: "https://open.spotify.com/artist/1U1el3k54VvEUzo3ybLPlM"
              },
              id: "1U1el3k54VvEUzo3ybLPlM",
              name: "Kali Uchis",
              type: "artist",
              uri: "spotify:artist:1U1el3k54VvEUzo3ybLPlM"
            }
          ]
        }
      ]
    }
  };

  return (
    <div className='Release'>
        <Header />
        <main className="Release-main">
            <div className='releases'>
                <h2>Dernières sorties (FR) :</h2>
                <div className="albums-list">
                    {releases.albums.items.map((album) => (
                        <div key={album.id} className="album-item">
                            <img src={album.images[0].url} alt={album.name} />
                            <h3>{album.name}</h3>
                            <p>{album.release_date}</p>
                            <p>Artiste: {album.artists[0].name}</p>
                            <a href={album.external_urls.spotify} target="_blank" rel="noopener noreferrer">Écouter sur Spotify</a>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    </div>
);
};

export default Release;
