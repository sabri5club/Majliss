import React, { useState, useEffect, useCallback } from "react";
import Coran from "../Components/Home/Coran";
import axios from "axios";
import { FormControl, Dropdown } from "react-bootstrap";

export default function SearchBar() {
  const [value, setValue] = useState("al-faatiha");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchMyApi = useCallback(async () => {
    setLoading(true);
    await axios.get("./quran.json").then((res) => {
      setData(res.data.sourates);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    fetchMyApi();
  }, [fetchMyApi]);

  if (loading) {
    return <p>Chargement des sourates veuillez patienter</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

 
  return (
    <>
      <div className="row m-2 d-flex justify-content-center ">
        <div className="col-md-7  d-flex justify-content-end ">
          <div style={{ position: "relative" }} className="row">
            <form onSubmit={handleSubmit} className="form-inline ">
              <input
                style={{ maxWidth: 600 }}
                className="form-control mr-sm-2"
                type="search"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                placeholder="Rechercher une sourate"
                aria-label="Search"
              ></input>
              <button
                className="btn btn-outline-warning my-2 my-sm-0"
                type="submit"
                onSubmit={handleSubmit}
              >
                Rechercher
              </button>
            </form>
          </div>
        </div>

      </div>
      <Coran data={data} value={value} />
    </>
  );
}
