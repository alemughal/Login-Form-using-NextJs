import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { User } from "../utils/interfaces";
// import styles from "@/styles/Home.module.css";

// const inter = Inter({ subsets: ["latin"] });

const Home = () => {
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
      <h1>Hello {user.userName}</h1>
    </>
  );
};

export default Home;
