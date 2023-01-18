import { useState } from "react";

function Clients() {
  const [showMore, setShowMore] = useState(false);
  const clients = [
    "Promoting Economic Pluralism",
    "NASA",
    "Ted talks",
    "Aetna",
    "NSU Florida",
    "Harvard",
    "Typeform",
    "Workato",
    "Running Remote",
  ];
  const short = clients.slice(0, 5);

  if (!showMore) {
    return (
      <ul>
        {short.map((el) => {
          return <li>{el}</li>;
        })}
        <li className="flashy pointer" onClick={() => setShowMore(true)}>
          & More ({clients.length - 5})
        </li>
      </ul>
    );
  } else
    return (
      <ul>
        {clients.map((el) => {
          return (
            <li className="pointer" onClick={() => setShowMore(false)}>
              {el}
            </li>
          );
        })}
      </ul>
    );
}

export default Clients;
