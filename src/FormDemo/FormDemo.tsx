import { useState } from "react";

import "./FormDemo.css";
import { ResponseMessage } from "./ResponseMessage/ResponseMessage";

type FormFields = {
  field1?: string;
  field2?: string;
};

type FormData = {
  fields: FormFields;
  errors?: FormFields;
  response?: string;
};

export const FormDemo = () => {
  const [formData, setFormData] = useState<FormData>({
    fields: {
      field1: "",
      field2: "",
    },
  });
  const {
    fields: { field1, field2 },
    response,
  } = formData;

  const onUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(e, name, value);
    setFormData({ ...formData, fields: { ...formData.fields, [name]: value } });
  };

  const setResponse = (value: string) => {
    setFormData({ ...formData, response: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponse("Submitted!");
  };

  console.log({ field1, field2 });

  return (
    <>
      <h1>Form Demo</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <label htmlFor="field1">Field 1</label>
          <input
            type="text"
            name="field1"
            placeholder="field 1"
            value={field1}
            onChange={(e) => onUpdate(e)}
          />
        </div>
        <div>
          <label htmlFor="field2">Field 2</label>
          <input
            type="text"
            name="field2"
            placeholder="field 2"
            value={field2}
            onChange={(e) => onUpdate(e)}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <ResponseMessage
          response={response}
          setResponse={(value) => setResponse(value)}
        />
      </form>
    </>
  );
};
