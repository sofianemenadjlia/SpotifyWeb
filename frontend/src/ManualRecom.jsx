import { React, useState, useEffect } from 'react';
import Header from './Header';
import { Form } from 'react-router-dom';
import axios from 'axios';
import './ManualRecom.css';
//import { get, set } from '../../backend/src/app';

function ManualRecom() {

    const [genres, setGenres] = useState([]);
    const [markets, setMarkets] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);
    const [results, setResults] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false); // New state variable for tracking form submission


    useEffect(() => {
        // Utilisation de la fonction asynchrone dans useEffect
        const fetchData = async () => {
            const genresData = getGenres();
            const marketsData = getMarkets();
            const resultsData = getResults();

            setGenres(genresData);
            setMarkets(marketsData);
            setResults(resultsData);
        };

        fetchData();
    }, []);

    const getGenres = () => {
        return ["acoustic", "afrobeat", "alt-rock", "alternative", "ambient", "anime",
            "black-metal", "bluegrass", "blues", "bossanova", "brazil", "breakbeat", "british",
            "cantopop", "chicago-house", "children", "chill", "classical", "club", "comedy",
            "country", "dance", "dancehall", "death-metal", "deep-house", "detroit-techno",
            "disco", "disney", "drum-and-bass", "dub", "dubstep", "edm", "electro", "electronic",
            "emo", "folk", "forro", "french", "funk", "garage", "german", "gospel", "goth",
            "grindcore", "groove", "grunge", "guitar", "happy", "hard-rock", "hardcore",
            "hardstyle", "heavy-metal", "hip-hop", "holidays", "honky-tonk", "house", "idm",
            "indian", "indie", "indie-pop", "industrial", "iranian", "j-dance", "j-idol", "j-pop",
            "j-rock", "jazz", "k-pop", "kids", "latin", "latino", "malay", "mandopop", "metal",
            "metal-misc", "metalcore", "minimal-techno", "movies", "mpb", "new-age", "new-release",
            "opera", "pagode", "party", "philippines-opm", "piano", "pop", "pop-film",
            "post-dubstep", "power-pop", "progressive-house", "psych-rock", "punk", "punk-rock",
            "r-n-b", "rainy-day", "reggae", "reggaeton", "road-trip", "rock", "rock-n-roll",
            "rockabilly", "romance", "sad", "salsa", "samba", "sertanejo", "show-tunes",
            "singer-songwriter", "ska", "sleep", "songwriter", "soul", "soundtracks", "spanish",
            "study", "summer", "swedish", "synth-pop", "tango", "techno", "trance", "trip-hop",
            "turkish", "work-out", "world-music"
        ];
    }

    const getMarkets = () => {
        return ["AD", "AE", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB",
            "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY",
            "BZ", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CO", "CR", "CV", "CW", "CY", "CZ",
            "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM",
            "FR", "GA", "GB", "GD", "GE", "GH", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK",
            "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP",
            "KE", "KG", "KH", "KI", "KM", "KN", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK",
            "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML",
            "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI",
            "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT",
            "PW", "PY", "QA", "RO", "RS", "RW", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL",
            "SM", "SN", "SR", "ST", "SV", "SZ", "TD", "TG", "TH", "TJ", "TL", "TN", "TO", "TR",
            "TT", "TV", "TW", "TZ", "UA", "UG", "US", "UY", "UZ", "VC", "VE", "VN", "VU", "WS",
            "XK", "ZA", "ZM", "ZW"
        ];

    }

    const getResults = () => {
        return {
            "seeds": [{ "afterFilteringSize": 1221, "afterRelinkingSize": 1221, "href": null, "id": "hip-hop", "initialPoolSize": 1221, "type": "GENRE" }], "tracks": [{ "album": { "album_type": "ALBUM", "total_tracks": 7, "external_urls": { "spotify": "https://open.spotify.com/album/0jlFChyFxDKLRNx8b59Ywz" }, "href": "https://api.spotify.com/v1/albums/0jlFChyFxDKLRNx8b59Ywz", "id": "0jlFChyFxDKLRNx8b59Ywz", "images": [{ "url": "https://i.scdn.co/image/ab67616d0000b27338943be0c8121545a86341b5", "height": 640, "width": 640 }, { "url": "https://i.scdn.co/image/ab67616d00001e0238943be0c8121545a86341b5", "height": 300, "width": 300 }, { "url": "https://i.scdn.co/image/ab67616d0000485138943be0c8121545a86341b5", "height": 64, "width": 64 }], "name": "You Are Forgiven", "release_date": "2016-08-19", "release_date_precision": "day", "type": "album", "uri": "spotify:album:0jlFChyFxDKLRNx8b59Ywz", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/5SyGEPymt1G2uto47tVWvZ" }, "href": "https://api.spotify.com/v1/artists/5SyGEPymt1G2uto47tVWvZ", "id": "5SyGEPymt1G2uto47tVWvZ", "name": "MadeinTYO", "type": "artist", "uri": "spotify:artist:5SyGEPymt1G2uto47tVWvZ" }], "is_playable": true }, "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/5SyGEPymt1G2uto47tVWvZ" }, "href": "https://api.spotify.com/v1/artists/5SyGEPymt1G2uto47tVWvZ", "id": "5SyGEPymt1G2uto47tVWvZ", "name": "MadeinTYO", "type": "artist", "uri": "spotify:artist:5SyGEPymt1G2uto47tVWvZ" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/0Y5tJX1MQlPlqiwlOH1tJY" }, "href": "https://api.spotify.com/v1/artists/0Y5tJX1MQlPlqiwlOH1tJY", "id": "0Y5tJX1MQlPlqiwlOH1tJY", "name": "Travis Scott", "type": "artist", "uri": "spotify:artist:0Y5tJX1MQlPlqiwlOH1tJY" }], "disc_number": 1, "duration_ms": 181107, "explicit": true, "external_ids": { "isrc": "QM4HH1610014" }, "external_urls": { "spotify": "https://open.spotify.com/track/5YCs9rP6ZcMJW6me3QhtWr" }, "href": "https://api.spotify.com/v1/tracks/5YCs9rP6ZcMJW6me3QhtWr", "id": "5YCs9rP6ZcMJW6me3QhtWr", "is_playable": true, "linked_from": { "external_urls": { "spotify": "https://open.spotify.com/track/79wTHFxVJXRrR5afZeBd16" }, "href": "https://api.spotify.com/v1/tracks/79wTHFxVJXRrR5afZeBd16", "id": "79wTHFxVJXRrR5afZeBd16", "type": "track", "uri": "spotify:track:79wTHFxVJXRrR5afZeBd16" }, "name": "Uber Everywhere (feat. Travis Scott)", "popularity": 53, "preview_url": "https://p.scdn.co/mp3-preview/9cea23ca53f5bbebbf0f4f3ea4453760e9aca762?cid=c5de5506a2eb4a1d8ef34eb38803b2d6", "track_number": 4, "type": "track", "uri": "spotify:track:5YCs9rP6ZcMJW6me3QhtWr", "is_local": false }, { "album": { "album_type": "ALBUM", "total_tracks": 22, "external_urls": { "spotify": "https://open.spotify.com/album/1lXY618HWkwYKJWBRYR4MK" }, "href": "https://api.spotify.com/v1/albums/1lXY618HWkwYKJWBRYR4MK", "id": "1lXY618HWkwYKJWBRYR4MK", "images": [{ "url": "https://i.scdn.co/image/ab67616d0000b2734f0fd9dad63977146e685700", "height": 640, "width": 640 }, { "url": "https://i.scdn.co/image/ab67616d00001e024f0fd9dad63977146e685700", "height": 300, "width": 300 }, { "url": "https://i.scdn.co/image/ab67616d000048514f0fd9dad63977146e685700", "height": 64, "width": 64 }], "name": "More Life", "release_date": "2017-03-18", "release_date_precision": "day", "type": "album", "uri": "spotify:album:1lXY618HWkwYKJWBRYR4MK", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" }, "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4", "id": "3TVXtAsR1Inumwj472S9r4", "name": "Drake", "type": "artist", "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4" }], "is_playable": true }, "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/3TVXtAsR1Inumwj472S9r4" }, "href": "https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4", "id": "3TVXtAsR1Inumwj472S9r4", "name": "Drake", "type": "artist", "uri": "spotify:artist:3TVXtAsR1Inumwj472S9r4" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/17lzZA2AlOHwCwFALHttmp" }, "href": "https://api.spotify.com/v1/artists/17lzZA2AlOHwCwFALHttmp", "id": "17lzZA2AlOHwCwFALHttmp", "name": "2 Chainz", "type": "artist", "uri": "spotify:artist:17lzZA2AlOHwCwFALHttmp" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/50co4Is1HCEo8bhOyUWKpn" }, "href": "https://api.spotify.com/v1/artists/50co4Is1HCEo8bhOyUWKpn", "id": "50co4Is1HCEo8bhOyUWKpn", "name": "Young Thug", "type": "artist", "uri": "spotify:artist:50co4Is1HCEo8bhOyUWKpn" }], "disc_number": 1, "duration_ms": 307593, "explicit": true, "external_ids": { "isrc": "USCM51700067" }, "external_urls": { "spotify": "https://open.spotify.com/track/0xl1w2q4VLojeXp4JfazPL" }, "href": "https://api.spotify.com/v1/tracks/0xl1w2q4VLojeXp4JfazPL", "id": "0xl1w2q4VLojeXp4JfazPL", "is_playable": true, "name": "Sacrifices", "popularity": 62, "preview_url": null, "track_number": 12, "type": "track", "uri": "spotify:track:0xl1w2q4VLojeXp4JfazPL", "is_local": false }, { "album": { "album_type": "ALBUM", "total_tracks": 14, "external_urls": { "spotify": "https://open.spotify.com/album/6rEm9wAyZP79RFa2qW2bf7" }, "href": "https://api.spotify.com/v1/albums/6rEm9wAyZP79RFa2qW2bf7", "id": "6rEm9wAyZP79RFa2qW2bf7", "images": [{ "url": "https://i.scdn.co/image/ab67616d0000b27321a0329a398c9f726822f8b8", "height": 640, "width": 640 }, { "url": "https://i.scdn.co/image/ab67616d00001e0221a0329a398c9f726822f8b8", "height": 300, "width": 300 }, { "url": "https://i.scdn.co/image/ab67616d0000485121a0329a398c9f726822f8b8", "height": 64, "width": 64 }], "name": "F.A.M.E.", "release_date": "2011-03-18", "release_date_precision": "day", "type": "album", "uri": "spotify:album:6rEm9wAyZP79RFa2qW2bf7", "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z" }, "href": "https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z", "id": "7bXgB6jMjp9ATFy66eO08Z", "name": "Chris Brown", "type": "artist", "uri": "spotify:artist:7bXgB6jMjp9ATFy66eO08Z" }], "is_playable": true }, "artists": [{ "external_urls": { "spotify": "https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z" }, "href": "https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z", "id": "7bXgB6jMjp9ATFy66eO08Z", "name": "Chris Brown", "type": "artist", "uri": "spotify:artist:7bXgB6jMjp9ATFy66eO08Z" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/55Aa2cqylxrFIXC767Z865" }, "href": "https://api.spotify.com/v1/artists/55Aa2cqylxrFIXC767Z865", "id": "55Aa2cqylxrFIXC767Z865", "name": "Lil Wayne", "type": "artist", "uri": "spotify:artist:55Aa2cqylxrFIXC767Z865" }, { "external_urls": { "spotify": "https://open.spotify.com/artist/1YfEcTuGvBQ8xSD1f53UnK" }, "href": "https://api.spotify.com/v1/artists/1YfEcTuGvBQ8xSD1f53UnK", "id": "1YfEcTuGvBQ8xSD1f53UnK", "name": "Busta Rhymes", "type": "artist", "uri": "spotify:artist:1YfEcTuGvBQ8xSD1f53UnK" }], "disc_number": 1, "duration_ms": 222586, "explicit": true, "external_ids": { "isrc": "USJI11100017" }, "external_urls": { "spotify": "https://open.spotify.com/track/3hsmbFKT5Cujb5GQjqEU39" }, "href": "https://api.spotify.com/v1/tracks/3hsmbFKT5Cujb5GQjqEU39", "id": "3hsmbFKT5Cujb5GQjqEU39", "is_playable": true, "linked_from": { "external_urls": { "spotify": "https://open.spotify.com/track/0LWQWOFoz5GJLqcHk1fRO2" }, "href": "https://api.spotify.com/v1/tracks/0LWQWOFoz5GJLqcHk1fRO2", "id": "0LWQWOFoz5GJLqcHk1fRO2", "type": "track", "uri": "spotify:track:0LWQWOFoz5GJLqcHk1fRO2" }, "name": "Look At Me Now (feat. Lil' Wayne & Busta Rhymes)", "popularity": 74, "preview_url": "https://p.scdn.co/mp3-preview/3457b4690b44440e6597fb7ab77104b7c681b8c1?cid=c5de5506a2eb4a1d8ef34eb38803b2d6", "track_number": 4, "type": "track", "uri": "spotify:track:3hsmbFKT5Cujb5GQjqEU39", "is_local": false }]
        };
    }

    const handleGenreChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions);
        const selectedValues = selectedOptions.map((option) => option.value);
        setSelectedGenres(selectedValues);
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitted(true); 
    };

    return (
        <div className='ManualRecom'>
            <Header />
            <main className="ManualRecom-main">
                <div className='Formulaire'>
                    <h2>Formulaire de recommendations</h2>
                    <Form onSubmit={handleSubmit} className="form" method="post" action="/">

                        <label htmlFor='nb_tracks'>Nombre de titres</label>
                        <input type="number" name="nb_tracks" id="nb_tracks" min="1" max="100" defaultValue={10} />

                        <label htmlFor="genres">Genres (Max 5)</label>
                        <select
                            name="genres"
                            id="genres"
                            multiple
                            size="5"
                            onChange={handleGenreChange}
                            value={selectedGenres}
                        >
                            {genres.map((genre, index) => (
                                <option key={index} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>

                        <label htmlFor='market'>Pays</label>
                        <select name="market" id="market">
                            {markets.map((market, index) => (
                                <option key={index} value={market}>
                                    {market}
                                </option>
                            ))}
                        </select>

                        <button type="submit">Obtenir les recommendations</button>

                    </Form>
                </div>
                {isSubmitted &&
                    <div className='results'>
                        <h2>Recommendations</h2>
                        {results.seeds && results.seeds.map((seed, index) => (
                            <div key={index}>
                                <p>Type: {seed.type}</p>
                                <p>ID: {seed.id}</p>
                            </div>
                        ))}

                        {results.tracks && results.tracks.map((track, index) => (
                            <div key={index}>
                                <p>Track Name: {track.name}</p>
                                <p>Artist(s): {track.artists.map(artist => artist.name).join(', ')}</p>
                                <p>Album: {track.album.name}</p>
                                <img src={track.album.images[0].url} alt={`Album cover for ${track.album.name}`} />
                                <button onClick={() => window.open(track.external_urls.spotify, '_blank')}>
                                    Écouter sur Spotify
                                </button>
                            </div>
                        ))}
                    </div>
                }
            </main>
        </div>
    )
}

export default ManualRecom;