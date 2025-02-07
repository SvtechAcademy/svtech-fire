import React, { createContext, useState, useContext } from 'react';

const BlogContext = createContext();

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  return (
    <BlogContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext };
export default ContextProvider;
