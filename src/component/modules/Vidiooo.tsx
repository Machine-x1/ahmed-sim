import ReactPlayer from 'react-player';

const Vidiooo = () => {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <ReactPlayer
          url="https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4"
          controls={false}
        /> */}
        <ReactPlayer
          url="https://giistyxelor.s3.amazonaws.com/giists/video/video0cP3w019TiZYYcUy22WY.mp4"
          controls={false}
          width="100%"
          height="100%"
          playing
        />
      </main>
    </div>
  );
};

export default Vidiooo;
