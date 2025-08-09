import Image from "next/image";

export default function LevelItem({ nama, status }) {
  let iconSrc = "";

  if (status === "done") iconSrc = "/levels/checked_bear.png";
  if (status === "current") iconSrc = "/levels/play_bear.png";
  if (status === "locked") iconSrc = "/levels/locked_bear.png";

  return (
    <div className="flex flex-col items-center">
      <div className="relative">

        <Image src={iconSrc} alt={nama} width={180} height={160} />

        {status === "current" && (
          <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 -z-50">
            <Image
              src="/assets/sipintar.png"
              alt="Current Level Bear"
              width={220}
              height={22+0}
            />
          </div>
        )}
      </div>

      <p className="mt-2 text-sm text-center">{nama}</p>
    </div>
  );
}