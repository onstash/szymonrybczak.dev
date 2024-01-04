import Badge from "@/components/badge";
import Image from "next/image";
import party from "./../public/images/party.png";
import berlin from "./../public/images/berlin.png";
import camera from "./../public/images/camera.png";
import rneu from "./../public/images/rneu.png";
import festival from "./../public/images/festival.png";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-xl mb-8">hey, I{"'"}m Szymon 👋</h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a 17 years old React Native Developer at `}
        <span className="not-prose pt-1 pl-1">
          <Badge href="https://callstack.com/">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 868.93 172.9"
              className="fill-[#7837F5] dark:fill-white"
              height="13"
            >
              <path
                className="cls-1"
                d="M354.82,107.81a75.19,75.19,0,0,0,34.53,10.06c7.4,0,11.9-2,11.9-6.75,0-6.75-9.79-6.08-23-9.39-16.53-4.1-26.32-11-26.32-25.27,0-18.39,16.53-28.84,38.23-28.84a81.16,81.16,0,0,1,33.47,6.88V77.26A74.31,74.31,0,0,0,390.93,68c-7.14,0-11.37,2.11-11.37,6.08,0,6.09,9.39,6.09,22.35,9,16.67,4.1,26.86,10.45,26.86,25.53,0,19-16.94,29.5-39.29,29.5A83.74,83.74,0,0,1,355,130.83l-.13-23Zm148.1,25.8a41,41,0,0,1-19.71,4.76,30.44,30.44,0,0,1-22.75-8.73c-4.63-4.89-7.67-12.17-7.67-26.06v-32H438.63V49.34h14.16V15.48h27V49.34h23.15V71.7H479.77v29.23c0,8.47,2,14.82,10.19,14.82a31.51,31.51,0,0,0,13-3.57v21.43ZM705.58,15.48h27V86.12h.4l30.56-37h30.55l-33.46,39,36,48.16H764.72L732.84,91.81h-.4v44.31h-27Zm121.55,94.45c0-13.1,3-20.11,12.3-23.15v-.4c-9.26-3-12.3-10-12.3-23.15V32c0-9.39-3.31-12.7-11.24-12.7a38.61,38.61,0,0,0-6.75.67V1.06A77.38,77.38,0,0,1,821.44,0C842.48,0,852,11.91,852,28.84V64.29c0,9,2.51,12.57,11.77,12.57h5.16V96.3h-5.16c-9.26,0-11.77,3.58-11.77,12.57v35.59c0,16.93-9.79,28.84-30.56,28.84a77.38,77.38,0,0,1-12.3-1.06V153.32a29.34,29.34,0,0,0,6.75.79c7.8,0,11.24-3.3,11.24-12.7V109.93Zm-227.21,6.22c-3.7,0-5.29-2.78-5.29-6.88V79.77a28.7,28.7,0,0,0-9.79-24.08,46.6,46.6,0,0,0-29.1-8.33,69.6,69.6,0,0,0-30.56,6.75V77.26a54.15,54.15,0,0,1,25.53-6.88,20.53,20.53,0,0,1,13.49,3.7,12.55,12.55,0,0,1,3.31,9.26v3.44a72,72,0,0,0-15.08-1.59A44.1,44.1,0,0,0,528,91.28a24.43,24.43,0,0,0-10.72,21,24,24,0,0,0,10.32,20.37,36.33,36.33,0,0,0,20.24,5.69,42.53,42.53,0,0,0,24.47-7.27l.27-.14a25.61,25.61,0,0,0,18.91,6.88,29.29,29.29,0,0,0,13-2.64V115.09A10.72,10.72,0,0,1,599.92,116.15Zm-32.28-1.06a25,25,0,0,1-12.3,3.57c-6.35,0-11.25-3-11.25-8.73,0-6.75,7-8.86,13.89-8.86a39.08,39.08,0,0,1,9.66,1.19Zm120.9,16.54a60,60,0,0,1-28.71,6.74c-28.05,0-49-19.18-49-45.37,0-27.39,22.76-45.64,50.14-45.64A58.89,58.89,0,0,1,687,53.44v25a46.44,46.44,0,0,0-24.47-8.07,22.65,22.65,0,0,0-20.64,11.24,22.71,22.71,0,0,0,21,34.26,44.1,44.1,0,0,0,25.67-8.73v24.48ZM307.86,16.93h27V136.39h-27Zm-161,114.7a61.49,61.49,0,0,1-28.57,6.74c-28,0-48.95-19.18-48.95-45.37,0-27.39,22.76-45.64,50.14-45.64a58.92,58.92,0,0,1,25.93,6.08v25a46.47,46.47,0,0,0-24.48-8.07A22.86,22.86,0,0,0,100.39,105a22.88,22.88,0,0,0,20.9,10.84,43.38,43.38,0,0,0,25.53-8.73v24.48Zm96-15.48c-3.7,0-5.29-2.78-5.29-6.88V79.77a28.7,28.7,0,0,0-9.79-24.08,46.56,46.56,0,0,0-29.1-8.33,69.63,69.63,0,0,0-30.56,6.75V77.26a54.18,54.18,0,0,1,25.53-6.88,20.51,20.51,0,0,1,13.49,3.7,12.5,12.5,0,0,1,3.31,9.26v3.44a71.91,71.91,0,0,0-15.08-1.59,43,43,0,0,0-24.47,6.09,24.45,24.45,0,0,0-10.72,21,24.06,24.06,0,0,0,10.32,20.37,36.33,36.33,0,0,0,20.24,5.69,42.53,42.53,0,0,0,24.47-7.27l.27-.14a25.62,25.62,0,0,0,18.92,6.88,29.27,29.27,0,0,0,13-2.64V115.09A10.72,10.72,0,0,1,242.86,116.15Zm-32.41-1.06a25,25,0,0,1-12.3,3.57c-6.35,0-11.24-3-11.24-8.73,0-6.75,7-8.86,13.89-8.86a39.06,39.06,0,0,1,9.65,1.19Zm50.93-98.16h27V136.39h-27ZM16.93,108.87c0-9-2.51-12.57-11.77-12.57H0V76.86H5.16c9.26,0,11.77-3.57,11.77-12.57V28.84C16.93,11.77,26.72,0,47.49,0a77.38,77.38,0,0,1,12.3,1.06V20a29.27,29.27,0,0,0-6.74-.8c-7.81,0-11.25,3.31-11.25,12.7V63.1c0,13.1-3,20.11-12.3,23.15v.4c9.26,3,12.3,10,12.3,23.15V141c0,9.39,3.44,12.7,11.25,12.7a29.27,29.27,0,0,0,6.74-.8v18.92a77.38,77.38,0,0,1-12.3,1.06c-21,0-30.56-11.91-30.56-28.84V108.87Z"
              />
            </svg>
          </Badge>
        </span>
        {`. I'm based in Cracow, PL, currently maintaining `}
        <Badge href="https://github.com/react-native-community/cli">
          <span className="font-medium text-s px-1">
            react-native-community/cli
          </span>
        </Badge>
        <span className="pl-1">
          and focusing on bringing web concepts to native world.
        </span>
      </p>
      <div className="grid grid-cols-3 gap-4 my-8">
        <div className="relative h-40">
          <Image
            alt="Me at the 2022 EOY party"
            src={party}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[20%]"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me at the 2022 EOY party"
            src={camera}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>

        <div className="relative h-80 row-span-2">
          <Image
            alt="Me at the 2022 EOY party"
            src={rneu}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-left"
          />
        </div>

        <div className="relative h-80 col-span-2 row-span-2">
          <Image
            alt="Me at the 2022 EOY party"
            src={berlin}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40">
          <Image
            alt="Me at the 2022 EOY party"
            src={festival}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-right"
          />
        </div>
      </div>
    </section>
  );
}
