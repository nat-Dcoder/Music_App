// spotify.js
import fetch from 'node-fetch';

export default async function fetchSpotifyToken() {
    try {
        const clientId = '618d7377fa17420387ffc9ec9e12d7e4';
        const clientSecret = '1d30572400754b87a03a8816a827e767';

        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
            },
            body: 'grant_type=client_credentials'
        });

        if (response.ok) {
            const data = await response.json();
            return data.access_token;
        } else {
            throw new Error('Failed to fetch Spotify token');
        }
    } catch (error) {
        console.error('Error fetching Spotify token:', error.message);
        throw error;
    }
}

