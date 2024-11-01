import React, { useState } from "react";
import CardFive from "../utils/CardFive";

export default function FiveCard() {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);

  const DeleteAll = () => {
    setOne(false);
    setTwo(false);
    setThree(false);
    setFour(false);
    setFive(false);
  };

  const handleOne = () => {
    DeleteAll();
    setOne(true);
  };
  const handleTwo = () => {
    DeleteAll();
    setTwo(true);
  };
  const handleThree = () => {
    DeleteAll();
    setThree(true);
  };
  const handleFour = () => {
    DeleteAll();
    setFour(true);
  };
  const handleFive = () => {
    DeleteAll();
    setFive(true);
  };

  return (
    <>
      <div className=" w-full flex items-center justify-center bg-[var(--white)] py-16 ">
        <div className=" w-[80%] flex items-center gap-16 ">
          <div className=" w-1/2 flex gap-6">
            <CardFive
              img={"/images/mendrika/mendrika.jpg"}
              state={one}
              onMouseOver={() => handleOne()}
            />
            <CardFive
              img={"/images/koloina/koloina.jpg"}
              state={two}
              onMouseOver={() => handleTwo()}
            />
            <CardFive
              img={"/images/tsara/tsara3.png"}
              state={three}
              onMouseOver={() => handleThree()}
            />
            <CardFive
              img={"/images/kanto/kanto.png"}
              state={four}
              onMouseOver={() => handleFour()}
            />
            <CardFive
              img={"/images/G3.jpg"}
              state={five}
              onMouseOver={() => handleFive()}
            />
          </div>
          <div className=" w-1/2  flex flex-col gap-12">
            <p className=" uppercase text-[var(--blue)] text-3xl font-semibold ">
              qui sommes-nous ?
            </p>
            <p className=" text-[rgb(0,0,0,0.65)]  tracking-wider">
              Polypus Corporation construit des maisons préfabriqués innovantes,
              écologiques, autonomes en énergie, en sécurité, durable en toute
              rapitdité
            </p>
            <button className=" w-max uppercase text-white py-2 px-4 bg-[var(--blue)] tracking-wide text-sm ">
              détails
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
