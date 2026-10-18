# FilmAngular

A responsive web application built with Angular that allows users to browse a list of movies, view detailed information about each movie, and save their favorite titles to a personal list.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-B7178C?style=for-the-badge&logo=reactivex&logoColor=white)
![Repo Size](https://img.shields.io/github/repo-size/p0lzx/filmangular?style=for-the-badge)
![Last Commit](https://img.shields.io/github/last-commit/p0lzx/filmangular?style=for-the-badge)

---

## Features

* **Movie List:** Browse popular, top-rated, and upcoming movies in a responsive grid layout.
* **Movie Details:** View complete information for any selected movie, including the plot summary, release date, rating, genres, and cast.
* **Favorites List:** Add or remove movies from your personal Favorites list. Saved movies are stored in the browser's `localStorage` so they stay saved after refreshing the page.
* **Search Functionality:** Search for movies by title to quickly find specific films.
* **Responsive Layout:** Works smoothly across desktop, tablet, and mobile screens.

---

## Tech Stack

* **Framework:** [Angular](https://angular.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **State & Async Handling:** [RxJS](https://rxjs.dev/)
* **Routing:** Angular Router
* **Styling:** CSS3 / SCSS / Bootstrap
* **Data Source:** [The Movie Database (TMDB) API](https://developer.themoviedb.org/)

---


## Prerequisites

Ensure you have the following installed on your computer before running the project:

* [Node.js](https://nodejs.org/) (v18.x or higher recommended)
* npm (included with Node.js)
* [Angular CLI](https://angular.dev/tools/cli):
  ```bash
  npm install -g @angular/cli
  ```

---

## How to Install and Run

### 1. Clone the repository

```bash
git clone [https://github.com/p0lzx/filmangular.git](https://github.com/p0lzx/filmangular.git)
cd filmangular
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your API Key (if using an external API)

If the project uses an external movie API such as TMDB, add your API key inside your environment configuration file (`src/environments/environment.ts` or directly inside your movie service):

```typescript
export const environment = {
  production: false,
  apiUrl: '[https://api.themoviedb.org/3](https://api.themoviedb.org/3)',
  apiKey: 'YOUR_API_KEY_HERE',
  imageBaseUrl: '[https://image.tmdb.org/t/p/w500](https://image.tmdb.org/t/p/w500)'
};
```

### 4. Start the development server

```bash
ng serve
```

Open your browser and go to `http://localhost:4200/`. The app will reload automatically whenever you edit and save a source file.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm start` or `ng serve` | Runs the app in development mode at `http://localhost:4200/` |
| `npm run build` or `ng build` | Builds the production files into the `dist/filmangular` directory |
| `npm test` or `ng test` | Runs unit tests via Karma and Jasmine |

---

## Application Routes

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` or `/movies` | `MovieListComponent` | Displays the main catalog of movies |
| `/movie/:id` | `MovieDetailsComponent` | Shows full details for the selected movie ID |
| `/favorites` | `FavoritesComponent` | Shows all movies added to the user's favorites list |

---

## Screenshots

| Movie List | Movie Details | Favorites List |
| :---: | :---: | :---: |
| ![Movie List](https://placehold.co/600x350?text=Movie+List+Page) | ![Movie Details](https://placehold.co/600x350?text=Movie+Details+Page) | ![Favorites](https://placehold.co/600x350?text=Favorites+Page) |

---

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

* **p0lzx** - [@p0lzx](https://github.com/p0lzx)
* **Project Link:** [https://github.com/p0lzx/filmangular](https://github.com/p0lzx/filmangular)
