export const data = {
  header: {
    _id: 1,
    name: "css",
    text: `$columns: 7;
$rows: 7;
$cells: $columns * $rows;

@for $i from 1 through $cells {
  .checkerboard > div:nth-child(#{$i}) {
    animation-delay: (random($cells) / $columns) + s;
  }
}

.checkerboard {
  background-image: url("https://assets.codepen.io/9632/walkrus-gradient.jpg");
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  height: 100vh;
  width: 100%;
}

@media screen and (prefers-reduced-motion: no-preference) {
  .checkerboard > div {
    animation-name: poof;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    background: #fff;
  }
  .checkerboard > div:nth-child(even) {
    background: #2f2f2f;
  }
}

@keyframes poof {
  to {
    opacity: 0;
  }
}
    `,
  },
  data: [
    {
      _id: 1,
      name: "css",
      text: `$columns: 7;
$rows: 7;
$cells: $columns * $rows;

@for $i from 1 through $cells {
  .checkerboard > div:nth-child(#{$i}) {
    animation-delay: (random($cells) / $columns) + s;
  }
}

.checkerboard {
  background-image: url("https://assets.codepen.io/9632/walkrus-gradient.jpg");
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  height: 100vh;
  width: 100%;
}

@media screen and (prefers-reduced-motion: no-preference) {
  .checkerboard > div {
    animation-name: poof;
    animation-duration: 0.25s;
    animation-fill-mode: forwards;
    background: #fff;
  }
  .checkerboard > div:nth-child(even) {
    background: #2f2f2f;
  }
}

@keyframes poof {
  to {
    opacity: 0;
  }
}
    `,
    },
  ],
};
