import Head from "next/head";
import Image from "next/image";
import router from "next/router";
import useAuth from "../../data/hook/useAuth";
import loading from "../../assets/images/loading.gif";

export default function RouteGuard(props: any) {
  const { user, isLoading } = useAuth();

  function renderContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie?.includes('admin-template-auth')) {
                        window.location.href = '/login'
                    }`,
            }}
          />
        </Head>

        {props.children}
      </>
    );
  }

  function renderLoading() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        {/* render an external host loading image with transparent background */}
        <Image
          src={loading}
          alt="Loading..."
          width={200}
          height={200}
          layout="fixed"
        />
      </div>
    );
  }

  if (!isLoading && user?.email) {
    return renderContent();
  }
  if (isLoading) {
    return renderLoading();
  }
  router.push("/login");
  return null;
}
