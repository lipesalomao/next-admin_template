import type { NextPage } from "next";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div>
      <Layout title="Página inicial" subtitle="Construindo template admin...">
        <h3>Conteúdo...</h3>
      </Layout>
    </div>
  );
};

export default Home;
