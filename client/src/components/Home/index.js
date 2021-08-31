import { useState } from "react";
import "./index.css";
import { Button, TextField } from "@material-ui/core";
import axios from "axios";

function Home() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // Client side form validation can be done here
    axios({
      method: "post",
      url: "http://localhost:7001/api/login",
      data: { username: username },
    }).then(
      (response) => {
        if (response.data.error === null) {
          setError(null);
          setEmail(response.data.data);
        } else {
          setError(response.data.data);
        }
      },
      (error) => {
        setError("Some error occured on server side.");
      }
    );
  };
  return (
    <div className="container">
      {email === null ? (
        <>
          <TextField
            label="Your username"
            name="username"
            value={username}
            className="username-input"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <Button
            type="submit"
            className="username-submit"
            variant="contained"
            onClick={onSubmitHandler}
          >
            Send
          </Button>
        </>
      ) : (
        // Complate new React component can be rendered here.
        email
      )}
      {error}
    </div>
  );
}

export default Home;
