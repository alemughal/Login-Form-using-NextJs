import Link from "next/link";
import { Form, Input, Checkbox, Button, message } from "antd";
import { registerUser } from "../store/actions/authActions";

const Register = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    if (!values?.username || !values?.email || !values?.password || values?.password.length > 6) {
      return message.error("Please fill all the fields correctly");
    }
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
            name="username"
            rules={[{ required: true, message: "Please input your FullName" }]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>

          <Form.Item
            name="username"
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
