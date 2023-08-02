import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function Card({ children, url, handleClick, id }) {
  const [didLoad, setLoad] = useState(false);
  // const url = data.forms.url;
  function handleLoading() {
    setLoad(true);
  }

  const style = didLoad ? {} : { visibility: "hidden" };

  return (
    <div style={style} className="main__card" onClick={() => handleClick(id)}>
      <img src={url} onLoad={handleLoading} />
      <p className="main__card-name">{children}</p>
    </div>
  );
}
