import React from 'react';
import './Credits.css';

function Credits() {
    return (
        <section>
            <h2>Credits</h2>
            <section className="outer-section">
                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/track/7e2QnH6TDsvyrgczmIOvJp?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/track/0evM19o83YM7NXHawzXc9i?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
                <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/track/3sSdeR5JVFM6Nx6vYXuu4k?utm_source=generator"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </section>
        </section>
    );
}

export default Credits;
