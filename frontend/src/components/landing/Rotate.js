import React from "react";
import CardRotate from "../utils/CardRotate";

function Rotate() {
  return (
    <div className="flex items-center justify-center bg-[var(--gray)] h-[60vh]">
      <div className="flex items-center justify-center h-screen rotation perpective">
        <div className="relative w-[15rem] h-[10rem] transform-style-3d rotate">
          <CardRotate img={"/images/soa2.jpg"} angle={0} nom={"soa"} />
          <CardRotate img={"/images/3.jpg"} angle={45} nom={"mendrika"} />
          <CardRotate
            img={"/images/rotate/baobaba.jpg"}
            angle={90}
            nom={"koloina"}
          />
          <CardRotate
            img={"/images/assemble.png"}
            angle={135}
            nom={"sariaka"}
          />
          <CardRotate
            img={"/images/rotate/boababa2.jpg"}
            angle={180}
            nom={"socrate"}
          />
          <CardRotate
            img={"/images/rotate/plage.jpg"}
            angle={225}
            nom={"meva"}
          />
          <CardRotate
            img={"/images/rotate/rizière.jpeg"}
            angle={270}
            nom={"tom"}
          />
          <CardRotate img={"/images/6.jpg"} angle={315} nom={"avisoa"} />
        </div>
      </div>
    </div>
  );
}

export default Rotate;
