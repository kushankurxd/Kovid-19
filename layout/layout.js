import Head from "next/head";

const layout = (props) => {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Softnio" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Kovid19</title>
      </Head>
      <div className="nk-body">
        <div className="nk-wrap">{props.children}</div>
      </div>
    </div>
  );
};

export default layout;
