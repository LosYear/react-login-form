import React, { useEffect, useRef, useState } from "react";
import SidebarLayout from "../sidebar-layout/SidebarLayout";
import FormLayout from "../form-layout/FormLayout";
import Input from "../input/Input";
import Button from "../button/Button";
import FormRow from "../form-row/FormRow";
import authRequest from "../../helpers/authRequest";
import Link from "../link/Link";
import "./styles.scss";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingState, setLoadingState] = useState("normal");
  const [hasError, setHasError] = useState(false);

  const emailRef = useRef();

  const onFormSubmit = async (event) => {
    event.preventDefault();

    setHasError(false);
    setLoadingState("loading");
    const isOk = await authRequest(email, password);
    setLoadingState(isOk ? "success" : "error");
    setHasError(!isOk);
  };

  useEffect(() => {
    setHasError(false);
    setLoadingState("normal");
  }, [email, password]);

  useEffect(() => {
    if (!hasError) {
      return;
    }

    emailRef.current.focus();
  }, [hasError]);

  useEffect(() => {
    if (loadingState !== "error") {
      return;
    }

    setTimeout(() => setLoadingState("normal"), 2000);
  }, [loadingState]);

  return (
    <SidebarLayout>
      <FormLayout>
        <div
          className="sr-only"
          role="alert"
          aria-hidden={loadingState !== "success"}
        >
          You have successfully logged in
        </div>
        <form onSubmit={onFormSubmit}>
          <FormRow>
            <Input
              label="Email Address"
              type="email"
              inputName="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-required="true"
              autoComplete="email"
              aria-invalid={hasError}
              autoFocus
              ref={emailRef}
            />
          </FormRow>
          <FormRow>
            <Input
              label="Password"
              type="password"
              inputName="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-required="true"
              autoComplete="current-password"
              aria-invalid={hasError}
            />
          </FormRow>
          <FormRow className="forgot-password-row">
            <Button label="Sign in" type="submit" state={loadingState} />
            <Link className="forgot-password-row__link" s>
              Forgot password?
            </Link>
          </FormRow>
          <FormRow className="signup-row">
            Not a member? <Link>Sign up now</Link>
          </FormRow>
        </form>
      </FormLayout>
    </SidebarLayout>
  );
};

export default App;
