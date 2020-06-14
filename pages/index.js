import Layout from "../layout/layout";
import Header from "../containers/header";
import Main from "../containers/main";
import Footer from "../containers/footer";

const index = (props) => {
  return (
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  );
};

export default index;
