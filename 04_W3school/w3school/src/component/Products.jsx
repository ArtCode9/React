import { Link, Outlet } from 'react-router-dom';


function Products() {
   return (
      <div>
         <h1>Products Page</h1>
         <nav style={{ marginBottom: '20px'}}>
            <Link to="CarProducts">Cars</Link> {' || '}
            <Link to="BikeProducts">Bikes</Link>
         </nav>

         <Outlet />
      </div>
   );
}

export default Products


/* 
Important notes about the example above:

1. Outlet:
   The <Outlet /> element in the Products component specifies 
   where to render the child route's content.

2. Routes:
   The Routes element contains the routes to CarProducts and BikeProducts 
   as child routes of the Products parent route.

3.URL Structure:
The URL structure is relative to the parent route's path. For example:
   - When you navigate to '/products/car', the CarProducts component is rendered.
   - When you navigate to '/products/bike', the BikeProducts component is rendered.

*/