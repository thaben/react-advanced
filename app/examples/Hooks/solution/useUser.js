import { useState, useEffect } from "react";

export default function useUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/user")
      .then((res) => res.json())
      .then((user) => {
        setUser(user);
      });
  }, []);

  return user;
}
