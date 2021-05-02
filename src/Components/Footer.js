// import React, { Component } from "react";
// import Fade from "react-reveal";

// class Footer extends Component {
//   render() {
//     if (!this.props.data) return null;

//     const networks = this.props.data.social.map(function (network) {
//       return (
//         <li key={network.name}>
//           <a href={network.url}>
//             <i className={network.className}></i>
//           </a>
//         </li>
//       );
//     });

//     return (
//       <footer>
//         <div className="row">
//           <Fade bottom>
//             <div className="twelve columns">
//               <ul className="social-links">{networks}</ul>

//               <ul className="copyright">
//                 <li>&copy; Copyright 2021 Nordic Giant</li>
//                 <li>
//                   Design by{" "}
//                   <a title="Styleshout" href="http://www.styleshout.com/">
//                     Styleshout
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </Fade>

//           <div id="go-top">
//             <a className="smoothscroll" title="Back to Top" href="#home">
//               <i className="icon-up-open"></i>
//             </a>
//           </div>
//         </div>
//       </footer>
//     );
//   }
// }

// export default Footer;


import React from 'react';


export default function Footer ()  {
  return (
    <footer className="d-flex flex-column justify-content-center align-items-center bg-dark">
    <p className="lead my-3 text-white">
      &copy; Made with <span>♥️</span> by{" "}
      <a
        id="myInfo"
        href="https://github.com/erumd"
        target="_blank"
        rel="noreferrer"
      >
        Erum Dhukka
      </a>
    </p>
  </footer>
  );
};
