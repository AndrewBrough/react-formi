import { useState } from "react";

const useFormi = () => {
  const [formData, setFormData] = useState();

  return { formData, setFormData };
};

export default useFormi;
