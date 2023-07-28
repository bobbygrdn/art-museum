# Art Museum Project

This project will help you build a frontend React application using function components to display a list of art galleries. We will be using React Router which will enable the user to navigate through the different art galleries to see images and descriptions of the artwork.

The API we will be using is the `Harvard Art Museum API`.

### Part I: Setup and Gallery Navigation

#### Phase 0: Setup

1. Install `React Router Dom`
2. Start your project in your terminal
3. Import `BrowserRouter` from React Router Dom in your `index.jsx` file
4. Wrap your `<App>` component in a `<BrowserRouter>`
5. Import `harvardArt` from `harvardArt.js` into your `app.jsx` file

#### Phase 1: Gallery Navigation

1. Create **src/components** folder
2. Create **src/components/GalleryNavigation** folder
3. Create `GalleryNavigation.jsx` in the **GalleryNavigation** folder
4. Create `<GalleryNavigation>` component
5. Export `<GalleryNavigation>` component and import it in your `<App>` component
6. Pass `harvardArt.records` to `<GalleryNavigation>` as prop **galleries**
7. Destructure **galleries** in your `<GalleryNavigation>` component
8. Add `<NavLink>` to `<GalleryNavigation>` component
9. Add `<nav>` element to `<GalleryNavigation>` component to contain other elements
10. Map through galleries and create component containing `<NavLink>` for each gallery object
11. Create `GalleryNavigaiton.css` in the **GalleryNavigation** folder
12. Make CSS styles for `.active` elements
13. Import `GalleryNavigation.css` in `GalleryNavigation.jsx`

### Part II: Gallery View

1. Create **src/components/GalleryView** folder
2. Create `GalleryView.jsx` in the **GalleryView** folder
3. Create `<GalleryView>` component with placeholder content `<h1>`
4. Add `<GalleryView>` to `<App>`, wrapped with a `<Route>` from **React Router**
5. Use `useParams` to access the gallery ID value from the **URL**
6. Pass `harvardArt.records` to `<GalleryView>` as the **galleries** prop
7. Receive the **galleries** prop in `<GalleryView>` and use the gallery ID to find correct gallery
8. Render header with the gallery name

### Part III: Routing

1. Create `<Route>` in `App.jsx` for the **home page**
2. Create `<Route>` in `App.jsx` for **404 errors/unknown paths**

### Part IV: Art Image Tiles

1. Create **src/components/ArtImageTile** folder
2. Create `ArtImageTile.jsx` in the **ArtImageTile** folder
4. Create `<ArtImageTile>` component
5. Iterate over **gallery.objects** to create `<ArtImageTile art={art}>` per art object
6. Create the contents `<Link>s` and `<img>s` in `<ArtImageTile>` component
7. Restrict the visibility of all arts in `<GalleryView>` using a `<Route>` with URL **/galleries/:galleryId**

### Part V: Art Descriptions

1. Create **src/components/ArtDescription** folder
2. Create `ArtDescription.jsx` in the **ArtDescription** folder
1. Create `<ArtDescription>` component.
2. Use a `<Route>` in `<GalleryView>` component to render `<ArtDescription>` at the correct route.
3. Add a `<Link>` to the art's gallery in `<ArtDescription>`.
4. Render a link to the **Harvard Art Museum page** included in the art object.
5. Render more information about the artwork however you choose.

### Part 6: Freestyle CSS

1. Add CSS to the project to reflect your own personality