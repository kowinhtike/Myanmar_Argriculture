import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import SearchableList from "../components/SearchableList";

export default function Favourite() {
  const [expanded, setExpanded] = useState(null);
  const { favouriteData, setFavouriteData } = useContext(AppContext);

  return (
    <SearchableList
      data={favouriteData}
      favouriteData={favouriteData}
      setFavouriteData={setFavouriteData}
      expanded={expanded}
      setExpanded={setExpanded}
      resetExpanded={true}
    />
  );
}
