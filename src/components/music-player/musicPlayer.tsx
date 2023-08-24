import React, { useState, useEffect } from 'react';
import { Button, Slider, Paper, Text } from '@mantine/core';

const MusicPlayer = ({ src }) => {
  const [audio, setAudio] = useState(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    audio.volume = volume;
  }, [volume]);

  const togglePlayback = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Paper padding="md" shadow="xs" style={{ textAlign: 'center' }}>
      <Text size="xl">Music Player</Text>
      <audio src={src} ref={(element) => (audio.src = element?.src)}>
        Your browser does not support the audio element.
      </audio>
      <Button variant="outline" onClick={togglePlayback}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
      <Slider
        value={volume}
        onChange={setVolume}
        max={1}
        step={0.01}
        label="Volume"
      />
    </Paper>
  );
};

export default MusicPlayer;
