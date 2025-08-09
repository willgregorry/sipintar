import Image from "next/image";

export default function LevelItem({ nama, status }) {
  let iconSrc = "";

  if (status === "done") iconSrc = "/levels/checked_bear.png";
  if (status === "current") iconSrc = "/levels/play_bear.png";
  if (status === "locked") iconSrc = "/levels/locked_bear.png";

  return (
    <div className="flex flex-col items-center">
      <Image src={iconSrc} alt={nama} width={180} height={160} />
      <p className="mt-2 text-sm text-center">{nama}</p>
    </div>
  );
}