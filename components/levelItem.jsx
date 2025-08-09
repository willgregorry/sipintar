import Image from "next/image";

export default function LevelItem({ nama, status }) {
  let iconSrc = "";

  if (status === "done") iconSrc = "/icons/check-bear.png";
  if (status === "current") iconSrc = "/icons/play-bear.png";
  if (status === "locked") iconSrc = "/icons/locked-bear.png";

  return (
    <div className="flex flex-col items-center">
      <Image src={iconSrc} alt={nama} width={80} height={80} />
      <p className="mt-2 text-sm text-center">{nama}</p>
    </div>
  );
}