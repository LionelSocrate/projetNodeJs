const apiUrl = process.env.REACT_PUBLIC_API_URL;

export const createServiceController = async ({
  idProject,
  nomVilla,
  type,
  numLot,
  description,
}) => {
  return await fetch(`${apiUrl}/villa/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idProject, nomVilla, type, numLot, description }),
  }).then((res) => res.json());
};
