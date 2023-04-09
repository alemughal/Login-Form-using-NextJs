import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { User } from "../utils/interfaces";
import Login from "./login";
import Register from "./register";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  <Head>
    <title>My ss title</title>
  </Head>
  const user: any = useSelector((state: any) => state?.authReducer.users);
  console.log("user", user);
  const router = useRouter();
  useEffect(() => {
    if (user?.id) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      {/* <h1>Hello {user.userName}</h1> */}
      <Login />

    </>
  );
};

export default Home;
