import React from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../common/Button";
import Form, { Field, Input } from "../../common/Form";
import AstroIcon from "../../../assets/astro-white.svg";
import useForm from "../../../hooks/useForm";
import request from "../../../utilities/request";
import { useUserCTX } from "../../../utilities/contexts";
import { useAsync } from "react-use";

export default function Login() {
  const nav = useNavigate();
  const { setUser } = useUserCTX();
  const { handleSubmit, register, loading } = useForm({
    email: "",
    password: "",
  });
  useAsync(async () => {
    const token = localStorage.getItem("AT");
    if (!token) return;
    const result = await request({
      method: "GET",
      path: "/accounts/refresh",
      auth: true,
    });
    if (result.status !== 200) {
      localStorage.removeItem("AT");
      return;
    }
    setUser(result.data);
    nav("/dashboard");
  }, []);
  const onSubmit = async data => {
    const result = await request({
      method: "POST",
      path: "/accounts/login",
      data,
    });
    console.log(result);
    localStorage.setItem("AT", result.data.token);
    setUser(result.data);
    nav("/dashboard");
  };
  return (
    <div className='login__page'>
      <div className='login__prompt'>
        <h1 className='login__prompt__title'>
          <img className='login__prompt__icon' src={AstroIcon} />
          Auth Command
        </h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder='john@doe.com'
            label='Email'
            type='email'
            required
            {...register("email")}
          />

          <Input
            placeholder='1234...'
            label='Password'
            type='password'
            required
            {...register("password")}
          />
          <Field>
            <Button role='success-1--inline' type='submit' disabled={loading}>
              Sign In
            </Button>
            <Link to='sign-up'>Sign up</Link>
          </Field>
        </Form>
      </div>
    </div>
  );
}
