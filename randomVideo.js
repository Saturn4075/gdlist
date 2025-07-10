function showRandomVideo() {
  const videos = [
    "https://youtu.be/E-YG8PaUmKs",
    "https://www.youtube.com/watch?v=Frg0z2D7kzE",
    "https://youtu.be/Jtty016Fbzk",
	"https://youtu.be/UirWvrszWEw",
	"https://www.youtube.com/watch?v=pAJvLNrisZE",
	"https://youtu.be/EhG0wc7IHnA",
	"https://youtu.be/oFJ59edf9J4",
	"https://youtu.be/KQcohGzoutU"
  ];

  // Pick a random link
  const randomIndex = Math.floor(Math.random() * videos.length);
  const randomLink = videos[randomIndex];

  // Redirect to that link
  window.location.href = randomLink;
}