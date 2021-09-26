// import { createContext } from 'react';
import './App.css';
import react, { lazy, Suspense } from 'react';
// import ACompo from './contextApi/ACompo';
// import { Parents } from './callback/Parents';
// import { ReducerX } from './reducer/ReducerX';
// import A from './errorBoundary/A';
// import B from './errorBoundary/B';
// import ErrorBoundary from './errorBoundary/ErrorBoundary'; //it is use for handling error
// import React, { createContext } from 'react';
// import { ComponentsA } from './ComponentsA';
// import { ComponentsB } from './ComponentsB';
// const Firstname = createContext();
// const Lastname = createContext();


// import ALazyCompo from './lazyLoading/ALazyCompo';
// import BLazyCompo from './lazyLoading/BLazyCompo';
// const A = lazy(() => import('./lazyLoading/ALazyCompo'));
// const B = lazy(() => import('./lazyLoading/BLazyCompo'));


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './BrowserRouter/Navbar';
import Home from './BrowserRouter/Home';
import About from './BrowserRouter/About';
import Contact from './BrowserRouter/Contact';
import PageNot from './BrowserRouter/PageNot';


// import { UseRef } from './useRef/UseRef';


// create a context<----------
// const authContext = createContext();
// const authContext2 = createContext();

function App() {
  return (
    <div className="App">


      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:id/:name" component={About} />
          <Route path="/contact" component={() => <Contact name="zahidkhan" />} />
          <Route component={PageNot} />
        </Switch>
      </Router>




      {/* <Suspense fallback={<div>loading.....A</div>}>
        <A />
      </Suspense>
      <Suspense fallback={<div>loading.....A</div>}>
        <B />
      </Suspense> */}

      {/* <authContext.Provider value="Zahid khan">
        <authContext2.Provider value="Learning reactjs">
          <ACompo />
        </authContext2.Provider>
      </authContext.Provider> */}


      {/* <ErrorBoundary>
        <A />
      </ErrorBoundary>
      <ErrorBoundary>
        <B />
      </ErrorBoundary> */}



      {/* <Parents /> */}

      {/* <ReducerX /> */}
      {/* <UseRef /> */}

      {/* <Firstname.Provider value="Compnents-C">
        <Lastname.Provider value="Lecture" >
          <ComponentsA name="componentsA" />
        </Lastname.Provider>
      </Firstname.Provider> */}
    </div>
  );
}

export default App;
// export { Firstname };
// export { Lastname };
// export { authContext, authContext2 }