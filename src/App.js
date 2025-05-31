// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import Header from './components/Header';
// import AboutMe from './components/AboutMe';
// import Projects from './components/Projects';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div>
//       <Header />
//       <AboutMe />
//       <Projects />
//       <Footer />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
