import { getPost } from "@/api/apiPost";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();

  const {
    loading: loadingPost,
    error: errorPost,
    data: dataPost,
    fn: fnPosts,
  } = useFetch(getPost);

  useEffect(() => {
    if (isLoaded) {
      fnPosts();
    }
  }, [isLoaded]);

  const renderHeading = () => {
    if (user) {
      return (
        <>
          <img
            src={user?.imageUrl || "https://via.placeholder.com/150"}
            className="dark:border-none  shadow-lg border-zinc-300 h-60 w-60  sm:h-80 sm:w-80 rounded-[100%]"
            alt={`${user?.firstName || "Guest"}'s Avatar`}
          />
          <h2 className="gradient-title leading-[40px]  md:leading-[75px] text-5xl md:text-[6rem] items-center justify-center text-center font-extrabold">
            {user?.firstName + " " + user?.lastName}
          </h2>
        </>
      );
    }
    return (
      <div className="flex flex-col ">
        <h1 className="gradient-title leading-[40px] md:leading-[75px] text-5xl md:text-[6rem] items-center justify-center text-center font-extrabold">
          Welcome To
          <br />
          Mutualyst
        </h1>
        <p className="dark:font-light text-center dark:text-zinc-300 text-zinc-800">
          Discover the latest stock market trends and insights on one seamless
          platform. Login to start exploring.
        </p>
      </div>
    );
  };

  const ShimmerLoader = () => (
    <div className="flex flex-wrap gap-6 justify-center">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse bg-zinc-200 dark:bg-zinc-800 rounded-lg h-96 w-[30rem] sm:w-[40rem]"
        >
          <div className="h-48 bg-gray-300 rounded-t-md"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="flex flex-col mx-auto justify-center">
      <main className="flex flex-col sm:pl-8 md:ml-52 justify-center items-center pt-24 pb-20">
        {renderHeading()}
        <div className="mt-4 sm:mt-10 flex sm:gap-4 gap-2 items-center max-sm:flex-col">
          <Button
            onClick={() => navigate("/community")}
            className="bg-black hover:bg-zinc-900 hover:text-white text-white border-zinc-800 dark:border-zinc-100 px-12 py-5 md:py-6 md:text-lg"
          >
            Post A Trend
          </Button>
        </div>
        {errorPost && (
          <div className="w-full text-center ">
            <p className="dark:text-zinc-400 w-full  text-zinc-800 text-center mt-12">
              Please Login To access posts
            </p>
          </div>
        )}
        <div className="flex w-full  mt-24 justify-center items-center">
          <div className="flex flex-col items-center w-full justify-center">
            {loadingPost && <ShimmerLoader />}
            {!loadingPost &&
              dataPost?.map((item, index) => {
                return (
                  <Card
                    key={index}
                    className="w-full mx-8 sm:w-3/4 md:w-[40rem]"
                  >
                    {console.log(item)}
                    <CardHeader className="border-b">
                      <CardTitle className="flex justify-between">
                        <span className="uppercase">
                          {item?.users?.trade_name}
                        </span>
                        <span>
                          {item?.users?.is_sebi_registered
                            ? "SEBI Regi."
                            : "SEBI Non-Regi"}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="mt-2">
                      <img src={item?.image} alt="" className="" />
                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                      <h2 className="text-lg font-bold">{item?.title}</h2>
                      <p className="font-light">{item?.description}</p>
                    </CardFooter>
                  </Card>
                );
              })}
          </div>
        </div>
      </main>
    </section>
  );
};

export default Landing;
