import React, { useState } from "react";
import { Card, Container, Form } from "react-bootstrap";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SButton from "../../components/Button";
import axios from "axios";
import SAlert from "../../components/Alert";

function PageSignin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/v1/cms/auth/signin",
        {
          email: form.email,
          password: form.password,
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  return (
    <Container>
      <Card style={{ width: "18rem" }}>
        <SAlert type="success" message="fsdfsd" />
        <Card.Body>
          <Card.Title>Form Login</Card.Title>
          <Form>
            <TextInputWithLabel
              label="Email Address"
              name="email"
              value={form.email}
              type="email"
              placeholder="Enter email!"
              onChange={handleChange}
            />

            <TextInputWithLabel
              label="Password"
              name="password"
              value={form.password}
              type="password"
              placeholder="Enter password!"
              onChange={handleChange}
            />

            <SButton action={handleSubmit} variant="primary">
              Submit
            </SButton>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default PageSignin;
