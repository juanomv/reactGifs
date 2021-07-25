import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
//import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ categoria }) => {
   const {loading,data:images} = useFetchGifs(categoria);
   
   
  

  return (
    <>
      <h3 className="animate__animated animate__fadeInDown">{categoria}</h3>
      {loading&&<p className="sanimate__animated animate__flash">Loading</p>}
      <div className="cardgrid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
