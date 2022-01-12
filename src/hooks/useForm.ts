import { useState } from "react";

export default function useForm(initialValues = {}) {
  const [state, setState] = useState(initialValues);
  const [formError, setFormError] = useState(false);
  const [loading, setLoading] = useState(false);

  const register = name => {
    return {
      value: state[name],
      name,
      onChange: e => {
        setState(prev => ({ ...prev, [name]: e.target.value }));
      },
    };
  };
  const handleSubmit = handler => {
    return async e => {
      e.preventDefault();
      try {
        setLoading(true);
        await handler(state);
      } finally {
        setLoading(false);
      }
    };
  };
  return {
    handleSubmit,
    register,
    formData: state,
    formError,
    setFormError,
    setFormData: setState,
    loading,
  };
}
