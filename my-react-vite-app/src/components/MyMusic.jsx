import React from 'react';
import './MyMusic.css';

const beats = [
  { id: 1, title: 'bright lights', collaborators: '@wassupcarlo, @1prod.niko & @brigtaudio_1', audioSrc: '/beats/bright lights (155bpm) [Prod.Niko x WassupCarlo x Brigtaudio_1].mp3' },
  { id: 2, title: 'led', collaborators: '@wassupcarlo, @okayypablo & @1prod.niko', audioSrc: '/beats/led (136bpm) [prod. @1prod.niko x @okayypablo x @wassupcarlo].mp3' },
];

function AudioPlayer({ title, collaborators, audioSrc }) {
  const audioRef = React.useRef(null);

  return (
    <div className="audio-player">
      <h3>{title}</h3>
      <p>{collaborators}</p>
      <audio ref={audioRef} src={audioSrc} controls />
    </div>
  );
}

function MyMusic() {
  return (
    <section>
      <h2>My Music</h2>
      <section className="outer-section">
        {beats.map((beat) => (
          <AudioPlayer key={beat.id} title={beat.title} 
          collaborators={beat.collaborators} audioSrc={beat.audioSrc} />
        ))}
      </section>
    </section>
  );
}

export default MyMusic;
