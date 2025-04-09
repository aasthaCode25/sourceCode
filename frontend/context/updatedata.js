"use client"
import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const UpdateContext = createContext(); // Corrected context name

export const UpdateContextProvider = ({ children }) => {

    const [blogData, setBlogData] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('http://localhost:1337/api/blogs?populate=*');
            setBlogData(response.data.data); // Strapi v4+ format
          } catch (err) {
          console.log(err)
          } finally {
            setLoading(false);
          }
        };
        
        fetchData();
      }, [setBlogData]);

    return (
        <UpdateContext.Provider value={{ blogData, setBlogData }}> {/* Corrected Provider access */}
            {children}
        </UpdateContext.Provider>
    );
}
