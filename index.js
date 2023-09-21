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
    list.indexOf(
      (deletedSong) => deletedSong.title.toLowerCase() === title.toLowerCase()
    ),
    1
  );

const getSong = (title, list) => list.find((song) => song.title === title);

const filterSongByGenre = (genre, list) =>
  list.filter((song) => song.genre === genre);

const filterSongBySuccess = (songs) =>
  songs.filter((song) => song.success).length;

const sortSongsByYear = (songs) =>
  songs.toSorted((songA, songB) => songA.year - songB.year);

const getSongsTitles = (songs) => songs.map((song) => song.title);

const getAverageSeconds = (songs) =>
  songs
    .map((song) => song.duration)
    .reduce((accumulator, duration) => accumulator + duration) / songs.length;
console.log(getAverageSeconds(songs));
