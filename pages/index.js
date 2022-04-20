import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();
  // const dispatch = useDispatch();

  // const logout = () => {
  //   dispatch({ type: LOGOUT });
  //   router.push("/");
  //   setUser(null);
  // };

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, [router,dispatch]);
  return (
    <Layout title="Lobby | colMotors">
      <div className={styles.grid}>
        <section className={styles.card1}>
          <div className={styles.containerText}>
            <h4 className={styles.description2}>
              Cotiza los repuestos de tu auto en{" "}
            </h4>
            <h1 className={styles.description1}>30 Minutos</h1>
            <Link href={user ? '/home': '/auth'}>
              <a>
                <Button
                  className={styles.button}
                  color="secondary"
                  variant="contained"
                >
                  COTIZA YA!
                </Button>
              </a>
            </Link>
          </div>
        </section>

        <section className={styles.card}>
          {user ? (
            <>
              <div className={styles.containerButtons}>
                <Link href={"/home"}>
                  <a>
                    <Button
                      className={styles.btn}
                      variant="contained"
                      color="primary"
                    >
                      Ve a cotizar!
                    </Button>
                  </a>
                </Link>
                <Button  variant="contained" color="secondary">
                  Cerrar Sesion
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2>1. Registrate o Inicia Sesion &rarr;</h2>
              </div>
              <div className={styles.containerButtons}>
                <Link href={"/auth"}>
                  <a>
                    <Button
                      className={styles.btn}
                      variant="contained"
                      color="primary"
                    >
                      Iniciar Sesion
                    </Button>
                  </a>
                </Link>
                <Link href={"/auth"}>
                  <a>
                    <Button variant="contained" color="secondary">
                      Registrarse
                    </Button>
                  </a>
                </Link>
              </div>
            </>
          )}
        </section>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </Layout>
  );
}
