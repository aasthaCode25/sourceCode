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
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/blogs?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
            },
          }
        );
        setBlogData(response.data.data); // Strapi v4+ format
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Removed setBlogData from deps (stable setter)

  return (
    <UpdateContext.Provider value={{ blogData, setBlogData }}>
      {children}
    </UpdateContext.Provider>
  );
};
