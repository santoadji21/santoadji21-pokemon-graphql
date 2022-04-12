import React from "react";

// get local storage
const [items, setItems] = React.useState([]);

useEffect(() => {
  localStorage.setItem("items", JSON.stringify(items));
}, [items]);
const getData = JSON.parse(localStorage.getItem("data"));
