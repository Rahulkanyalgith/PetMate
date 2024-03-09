
import { useContext } from "react";
import Filter from "../../components/filter/Filter";
import Hero from "../../components/hero/Hero";
import Layout from "../../components/layout/Layout";
import Pets from "../../components/pets/Pets";
import MyContext from "../../context/MyContext";


const HomePage = () => {

    const context = useContext(MyContext);
    const name = context
    return (
        <Layout>
           <Hero/>
          <Filter/>
          <Pets/>

        </Layout>
    );
}

export default HomePage;