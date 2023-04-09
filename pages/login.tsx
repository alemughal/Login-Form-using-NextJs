import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Checkbox, Button, message } from "antd";
import { loginUser } from "../store/actions/authActions";
import { User } from "@/utils/interfaces";

const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const users: User[] = useSelector((state: any) => state?.authReducer.users);

  const onFinish = (values: User) => {
    console.log("values",values);
    if (!values?.email || !values?.password) {
      return message.error("Please fill all the fields correctly");
    } else if (values?.password.length < 6) {
      return message.error("Password must be at least 6 characters long");
    }

    values.email = values.email.toLowerCase();

    for(var u of users) {
        console.log(u)
      if (u?.email === values.email && u.password === values.password) {
        dispatch(loginUser(u));
        message.success("Login Successful");
        return router.push("/");
      }
    }

    message.error("Email or Password is incorrect");


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
          <p>Login to the Dashboard</p>
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

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              LOGIN
            </Button>
          </Form.Item>
          <p>
            Don't have an Account? <Link href={"/register"}>Register</Link>
          </p>
        </Form>
      </div>
    </div>
  );
};

export default Login;
