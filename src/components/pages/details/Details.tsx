import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEffectOnce } from "react-use";
import useForm from "../../../hooks/useForm";
import { useAppsCTX } from "../../../utilities/contexts";
import Button from "../../common/Button";
import Form, { Field } from "../../common/Form";

export default function Details() {
  const [app, setApp] = useState({
    id: "",
    name: "",
    email: "",
    key: "",
    logoUrl: "",
    description: "",
    website: "",
    status: "ENABLED",
  });
  const [editing, setEditing] = useState(false);
  const [keyHidden, setKeyHidden] = useState(true);
  const { loading, register, setFormData, handleSubmit } = useForm({});
  const { appId } = useParams();
  const { apps } = useAppsCTX();
  const [copy, setCopy] = useState(false);
  const onSubmit = data => {};
  useEffect(() => {
    const activeApp = apps.find(app => app.id === appId);
    setApp(activeApp);
    setFormData(activeApp);
  }, [appId]);
  const onCopy = async () => {
    await navigator.clipboard.writeText(app.key);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };
  if (!app.id) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <h1>Application Details</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Field>
            <label className='form__input__label'>Name</label>
            {editing ? (
              <input className='form__input' {...register("name")} required />
            ) : (
              app.name
            )}
          </Field>
          <Field>
            <label className='form__input__label'>Email</label>
            {editing ? (
              <input className='form__input' {...register("email")} required />
            ) : (
              app.email
            )}
          </Field>
          <Field>
            <label className='form__input__label'>Logo URL</label>
            {editing ? (
              <input
                className='form__input'
                {...register("logoUrl")}
                required
              />
            ) : (
              app.logoUrl
            )}
          </Field>
          <Field>
            <label className='form__input__label'>Website</label>
            {editing ? (
              <input
                className='form__input'
                {...register("website")}
                required
              />
            ) : (
              app.website
            )}
          </Field>
          <Field>
            <label className='form__input__label'>Status</label>
            {app.status}
          </Field>
          <Field>
            {editing ? (
              <>
                <Button role='success-2--inline'>Save</Button>
                <Button onClick={() => setEditing(false)}>Cancel</Button>
              </>
            ) : (
              <Button role='confirm-1' onClick={() => setEditing(true)}>
                Edit
              </Button>
            )}
          </Field>
        </Form>
        <div>
          <h3>Secret Key</h3>
          <div className={keyHidden ? "app-details__key--hidden" : ""}>
            {app.key}
          </div>
          <Button
            onClick={() => setKeyHidden(prev => !prev)}
            role='caution-1--inline'
          >
            View
          </Button>
          <Button onClick={onCopy} role='caution-1--inline'>
            {copy ? "Copied!" : "Copy"}
          </Button>
          <h3>Danger Zone</h3>
          <h4>Disable App</h4>
          <p>
            By disabling your app it will be impossible for your users to
            authenticate or otherwise interact with the API.
          </p>
          <Button role='warning-1--inline'>Disable</Button>
          <h4>Delete App</h4>
          <p>Your user data and app data will be perminatly deleted.</p>
          <Button role='warning-1--inline'>Delete</Button>
        </div>
      </div>
    );
  }
  return <div>Details</div>;
}
