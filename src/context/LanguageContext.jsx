// // src/context/LanguageContext.jsx

// import React, { createContext, useContext } from "react";
// import i18n from "../i18n"; // Adjust the path if needed

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <LanguageContext.Provider value={{ changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => useContext(LanguageContext);
