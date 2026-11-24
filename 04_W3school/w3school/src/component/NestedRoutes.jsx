/* 
Nested Routes :
You can have a Route inside another Route, this is called nested routes.
Nested routes allow you change parts of the page when you 
navigate to a new URL, while other parts is not changed or reloaded,
almost like having a page within a page.

check: 
   Products.jsx - CarProducts.jsx - BikeProducts.jsx - App.jsx 
   StyleActiveLinks.jsx - Router.jsx

also check this note from Ai to summary :
*/

/* 

React Router — Professional Concept Summary

This document summarizes the React Router concepts used in the separate
react-router-practice example.

1. What React Router does

React Router connects browser URLs to React components. When the URL
changes, it selects the route that matches and renders the corresponding
component. Navigation can happen without a full browser-page reload.

A route is a URL pattern plus the React element to render when that
pattern matches.

2. The routing ecosystem

BrowserRouter

-   Provides browser-based routing to the application.
-   Uses the browser’s History API and URL.
-   Usually wraps the application once, near the React root in main.jsx.
-   Do not create another BrowserRouter inside a component already
    rendered beneath one.

Routes

-   Holds a group of route definitions.
-   Examines the current URL and renders the best matching route branch.
-   It does not create navigation links; it matches the URL.

Route

-   Declares a URL pattern and the element associated with it.
-   path defines the route pattern.
-   element defines the React element to render.
-   Routes can be nested to create parent/child route relationships.

Link

-   Navigates to another URL within the React Router application.
-   Use to to specify the destination.
-   It behaves like a client-side navigation link rather than causing a
    normal full-page navigation.
-   Link destinations are URLs, not component filenames.

Outlet

-   Marks the location where a matched child route should render inside
    its parent route.
-   It belongs in the parent component’s JSX.
-   A nested child route can match, but its UI will not appear inside
    the parent unless the parent renders an Outlet (or uses another
    supported rendering arrangement).

3. How the example fits together

The route tree:

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Products" element={<Products />}>
          <Route path="CarProducts" element={<CarProducts />} />
          <Route path="BikeProducts" element={<BikeProducts />} />
        </Route>

        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>

The parent route /Products renders the Products component. Its child
routes are nested beneath it:

-   /Products/CarProducts renders CarProducts inside the Outlet in
    Products.
-   /Products/BikeProducts renders BikeProducts inside the same Outlet.

The parent layout remains visible while the child content changes.

4. Parent and child paths: absolute vs. relative

A path beginning with / is absolute: it starts at the application root.

A child path without a leading / is relative to its parent route.

Correct nested routes:

    <Route path="/Products" element={<Products />}>
      <Route path="CarProducts" element={<CarProducts />} />
      <Route path="BikeProducts" element={<BikeProducts />} />
    </Route>

These resolve to:

  Parent path   Child path     Resulting URL
  ------------- -------------- ------------------------
  /Products     CarProducts    /Products/CarProducts
  /Products     BikeProducts   /Products/BikeProducts

An absolute child path is only valid when it begins with the complete
combined path of its parent routes. For this beginner example, relative
child paths are clearer and easier to maintain.

5. The parent component and Outlet

Example Products.jsx:

    import { Link, Outlet } from 'react-router-dom';

    function Products() {
      return (
        <div>
          <h1>Products Page</h1>

          <nav>
            <Link to="CarProducts">Cars</Link>
            {' | '}
            <Link to="BikeProducts">Bikes</Link>
          </nav>

          <Outlet />
        </div>
      );
    }

    export default Products;

Because these links are rendered inside the /Products route, their
relative destinations resolve to /Products/CarProducts and
/Products/BikeProducts.

The Outlet is the insertion point for whichever child route matches.

6. Where BrowserRouter belongs

A typical main.jsx setup is:

    import { StrictMode } from 'react';
    import { createRoot } from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';
    import App from './App.jsx';

    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StrictMode>
    );

In this setup, App and all its descendants can use React Router
components. If BrowserRouter is already in main.jsx, do not wrap App in
another one.

7. Index routes

An index route is the default child page shown when the parent URL is
visited without a child segment.

    <Route path="/Products" element={<Products />}>
      <Route index element={<ProductsOverview />} />
      <Route path="CarProducts" element={<CarProducts />} />
      <Route path="BikeProducts" element={<BikeProducts />} />
    </Route>

Here, /Products displays ProductsOverview inside the parent’s Outlet.
The other child URLs display their respective components.

8. Common mistakes and how to diagnose them

Mistake: Using component filenames in Link

Incorrect:

    <Link to="./CarProducts.jsx">Cars</Link>

Correct:

    <Link to="CarProducts">Cars</Link>

A route link points to a URL, not to a .jsx file.

Mistake: Using an invalid absolute child path

Incorrect:

    <Route path="/Products" element={<Products />}>
      <Route path="/CarProducts" element={<CarProducts />} />
    </Route>

Correct:

    <Route path="/Products" element={<Products />}>
      <Route path="CarProducts" element={<CarProducts />} />
    </Route>

Mistake: Forgetting Outlet

If the URL changes but the nested component is not visible, check that
the parent component renders <Outlet />.

Mistake: Forgetting to define a route

A Link changes the URL, but a matching Route must exist for React Router
to render the intended page.

Mistake: Wrapping the app in multiple BrowserRouter components

Use one router provider around the part of the application that needs
routing.

9. A reliable debugging checklist

When a link does not display the expected page, check these items in
order:

1.  Does the clicked Link point to the intended URL?
2.  Is there a matching Route for that URL?
3.  Is the child route nested under the correct parent route?
4.  Is the child path relative, or is an absolute path correctly
    prefixed with the full parent path?
5.  Does the parent component render <Outlet />?
6.  Are the imported component paths and export statements correct?
7.  Are there errors in the browser console?

10. Mental model to remember

Think of React Router as a URL-driven rendering system:

-   BrowserRouter provides routing context.
-   Link changes the URL through client-side navigation.
-   Routes checks the current URL against route definitions.
-   Route describes what should render for a matching path.
-   Nested Route elements describe child pages.
-   Outlet is where the matched child page appears inside its parent.
-   An index route provides the default child page at the parent URL.

The complete flow is:

User clicks a Link → URL changes → Routes matches a route branch →
parent element renders → Outlet renders the matched child element.

Keep this distinction clear: navigation changes the URL; route matching
selects the component; Outlet places nested child content in the parent
layout.

*/
