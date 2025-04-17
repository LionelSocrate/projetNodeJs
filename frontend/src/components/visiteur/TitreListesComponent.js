import React from "react";

export default function TitreListesComponent() {
  return (
    <div className="w-full grid grid-cols-8 gap-1 bg-[var(--bg1)] items-center justify-center py-1 rounded-sm">
      <div className="flex items-center justify-center text-[var(--green)] uppercase text-xl">
        N° Visiteur
      </div>
      <div className="col-[2/4] flex items-center justify-center text-[var(--green)] uppercase text-xl">
        Nom
      </div>
      <div className="flex items-center justify-center text-[var(--green)] uppercase text-xl">
        Nb de jours
      </div>
      <div className="flex items-center justify-center text-[var(--green)] uppercase text-xl">
        tarif/j
      </div>
      <div className="flex items-center justify-center text-[var(--green)] uppercase text-xl">
        tarif
      </div>
      <div className="flex items-center justify-center text-[var(--green)] uppercase text-xl">
        suppression
      </div>
      <div className="flex items-center justify-center text-[var(--green)] uppercase text-xl">
        modification
      </div>
    </div>
  );
}
