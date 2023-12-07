import ReactPlayer from 'react-player';

const Vidiooo = () => {
  return (
    <div className="bg-secondaryBlack ">
      <main className="flex min-h-screen  flex-col  items-center justify-between xl:h-full xl:px-0">
        <ReactPlayer
          url="images/pexels-cottonbro-5767772 (1080p).mp4"
          controls={false}
          playing
          muted
          loop
          width="100%"
          height="100%"
          className="object-cover object-center"
          playsinline
        />
      </main>
    </div>
  );
};

export default Vidiooo;
