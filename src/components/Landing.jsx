import { CircleLoader, ClipLoader, RingLoader } from "react-spinners";
const Loading = () => {
  return (
    <div className="h-screen absolute bg-black w-full flex flex-col text-4xl text-black justify-center  items-center">
      <ClipLoader color="white" size={"80px"} width={"100%"} />
    </div>
  );
};

export default Loading;
