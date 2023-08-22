import './App.css';
import Content from "./content"

function App() {
  return (
    <div>
      <header>
        <title> teaching // priya </title>
        <link
          href='https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Roboto+Mono:wght@100&display=swap'
          rel='stylesheet'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link
          href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css'
          rel='stylesheet'
          integrity='sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl'
          crossorigin='anonymous'
        />
      </header>

      <body>
        <Content />
      </body>
  </div>

  );
}

export default App;
