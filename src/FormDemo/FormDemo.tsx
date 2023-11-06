import { useState } from "react";

import "./FormDemo.css";

export const FormDemo = () => {
  const [submissionMessage, setSubmissionMessage] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionMessage("submitted!");
  };

  return (
    <>
      <h1>Form Demo</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label htmlFor="field 1">Field 1</label>
          <input type="text" placeholder="field 1" />
        </div>
        <div>
          <label htmlFor="field 2">Field 2</label>
          <input type="text" placeholder="field 2" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        {submissionMessage && (
          <div>
            <p>{submissionMessage}</p>
            <button onClick={() => setSubmissionMessage("")}>clear</button>
          </div>
        )}
      </form>
    </>
  );
};
