import { useEffect } from "react";

function SearchList(props) {
  // useEffect(()=>{

  // },[])

  return (
    <datalist id="pokedex-list">
      {props.arr.map((item, index) => {
        return <option value={item} key={index} id={index}/>;
      })}
    </datalist>
  );
}

export default SearchList;
