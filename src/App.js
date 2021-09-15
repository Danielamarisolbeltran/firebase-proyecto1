// import { collection, getDocs } from "firebase/firestore";
// import db  from './firebase'
// import React, { useState, useEffect } from 'react'
import './App.css'

import Header from './components/Header/Header' 
import Navbar from './components/Navbar/Navbar'

// views
import Home from './views/Home/Home'
import Nosotros from './views/Nosotros/Nosotros'
import Contacto from './views/Contacto/Contacto'
import Tienda from './views/Tienda/Tienda';


// React Router Dom
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Context 
// import { ItemsProvider } from './Components/ItemsContext';
import ItemsList from './Components/ItemsList';

const App = () => {
  return (
    <Router>

      <ItemsProvider>

        <div className="App">

          <Navbar />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/nosotros" component={Nosotros} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/tienda" component={Tienda} />
          </Switch>
          <Header />

          <ItemsList/>
          
        </div>
      </ItemsProvider>
    </Router>
  );
}
   

export default App;


// const App = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const getProducts = async () => {
//       const products = await getDocs(collection(db, 'products'));
//       datos.forEach((documento.data));
      
//     }
//     getProducts();
//   }, []);
    
  
//   return (
//     <div className="App">
//       <Header />
//       {products.map((product) => {
//         return (
//           <div className= "card">
//             <CardExampleCard data={product} />
//           </div> 
//         )   
//       }
//    )}  
//     </div>
//   );
// }

// export default App;
