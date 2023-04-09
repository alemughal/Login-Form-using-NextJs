import Link from "next/link";
import { Form, Input, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../store/actions/authActions";

const Register = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) =>
    state?.authReducer.users?.map((user: any) => user?.email)
  );
//   console.log("users", users);

  const onFinish = (values: any) => {
    // console.log("Success:", values);
    if (!values?.fullName || !values?.email || !values?.password) {
      return message.error("Please fill all the fields correctly");
    } else if (values?.password.length < 6) {
      return message.error("Password must be at least 6 characters long");
    }

    values.email = values.email.toLowerCase();

    if (users?.indexOf(values?.email) !== -1) {
      return message.error("Email already exists");
    }

    dispatch(registerUser(values));

    message.success("Registration Successful");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Welcome back</p>
          <h2>Register Yourself</h2>

          <Form.Item
            name="fullName"
            rules={[{ required: true, message: "Please input your FullName" }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              SIGN UP
            </Button>
          </Form.Item>

          <p>
            Already have an Account? <Link href={"/login"}>Login</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Register;
