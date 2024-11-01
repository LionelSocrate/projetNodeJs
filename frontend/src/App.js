import React, { useEffect, useState } from "react";
import Routes from "./components/Routes";
import { UidContext } from "../src/components/AppContext";
import axios from "axios";

export default function App() {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        await axios({
          method: "get",
          url: "http://localhost:5000/jwtid",
          withCredentials: true,
        }).then((res) => {
          setUid(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchToken();
    console.log(uid);
  }, [uid]);

  return (
    <>
      <UidContext.Provider value={uid}>
        <Routes />
      </UidContext.Provider>
    </>
  );
}
