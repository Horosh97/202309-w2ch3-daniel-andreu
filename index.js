const songs = [
  {
    id: "001",
    title: "Bohemian Rhapsody",
    artist: "Queen",
    genre: "Rock",
    duration: 355,
    year: 1975,
    success: true,
  },
  {
    id: "002",
    title: "Imagine",
    artist: "John Lennon",
    genre: "Soft Rock",
    duration: 181,
    year: 1971,
    success: true,
  },
  {
    id: "003",
    title: "El swing del fusíl",
    artist: "Sleep Bad",
    genre: "Metal mestizaje",
    duration: 308,
    year: 2023,
    success: false,
  },
  {
    id: "004",
    title: "Aires del 36",
    artist: "Sleep Bad",
    genre: "Metal mestizaje",
    duration: 332,
    year: 2023,
    success: false,
  },
  {
    id: "005",
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    genre: "Folk Rock",
    duration: 485,
    year: 1971,
    success: true,
  },
];

const addSongToList = (
  list,
  id,
  title,
  artist,
  genre,
  duration,
  year,
  success
) => list.push({ id, title, artist, genre, duration, year, success });

const deleteSong = (title, list) =>
  list.splice(
    list.indexOf(list.find((deletedSong) => deletedSong.title === title)),
    1
  );
