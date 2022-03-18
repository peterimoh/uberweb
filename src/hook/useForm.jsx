import { useState } from 'react';

export const useForm = ({ callback, initialState }) => {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    callback();
  };

  return { handleChange, onSubmit, value };
};
