import useSWR, { useSWRConfig } from "swr";

interface WoofVideo {
  url: string;
  isLiked: boolean;
}

export default function WoofTv() {
  const { data, mutate: boundMutate } = useSWR<WoofVideo>(
    "https://dogs-api.nomadcoders.workers.dev"
  );

  const onLikeClick = () => {
    boundMutate((prev) => prev && { ...prev, isLiked: !prev.isLiked }, false);
  };

  const onNewDog = () => {
    boundMutate();
  };

  return (
    <div
      className="r absolute left-0 flex h-[100vh]  w-[100vw]
    flex-col items-center justify-evenly bg-slate-700"
    >
      <h1 className=" w-[80%] text-2xl font-bold text-white">Woof.tv</h1>

      <div className=" flex h-[70%] w-[80%] flex-col items-center justify-center bg-slate-600">
        <video
          src={data?.url}
          className="h-[70%]"
          controls
          autoPlay
          muted
          loop
        ></video>

        <div className="mt-5 flex w-full justify-evenly">
          <button
            onClick={onNewDog}
            className="h-[40px] w-[45%] rounded bg-white"
          >
            New Dog!
          </button>
          <button
            onClick={onLikeClick}
            className="h-[40px] w-[45%] rounded bg-sky-500 text-white"
          >
            {data?.isLiked ? "Unlike" : "Like"}
          </button>
        </div>
      </div>
    </div>
  );
}
