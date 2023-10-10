/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import PortraitCoverGameCard from "./PortraitCoverGameCard";
// import Carousel from 'react-multi-carousel'
import { useQuery } from "react-query";
import axios from "axios";
import Glider from "react-glider";
import "glider-js/glider.min.css";

function PortraitCoverGameCardCarousel(props) {
  const { queryKey, queryUrl, headingText } = props;
  // console.log(headingText, queryKey, queryUrl)
  const queryFn = async () => {
    return axios.get(queryUrl);
  };
  const { data, isLoading, error } = useQuery({ queryKey, queryFn });
  if (isLoading) {
    return <div>waiting</div>;
  }

  if (error) {
    return (
      <div className="flex h-[350px] flex-col-reverse items-center justify-center rounded-xl bg-zinc-700 text-2xl text-slate-200">
        <p>
          I'm gonna be honest my gamer, this code is pretty spagetti and I'm
          surprised it worked in the first place...
        </p>
        {error.message}
      </div>
    );
  }
  const games = data.data;
  return (
    <div className="mt-2 flex max-h-fit w-full flex-col justify-center">
      <p className="my-4 pl-1 text-2xl sm:text-4xl">{headingText}</p>
      <div className="max-h-fit">
        <Glider
          style={{
            height: "fit-content",
          }}
          hasArrows
          slidesToShow={1}
          slidesToScroll={1}
          scrollLock
          responsive={[
            {
              breakpoint: 1348,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
          ]}
        >
          {games.map((game, index) => (
            <PortraitCoverGameCard game={game} key={index} />
          ))}
        </Glider>
      </div>
    </div>
  );
}

export default PortraitCoverGameCardCarousel;
