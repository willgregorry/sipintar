const Roadmap = ({ progress = 50, correct = 80, incorrect = 20 }) => {
  const total = correct + incorrect;
  const correctPercentage = total > 0 ? (correct / total) * 100 : 0;
  const incorrectPercentage = total > 0 ? (incorrect / total) * 100 : 0;

  const donutStyle = {
    background: `conic-gradient(#5D4037 ${progress}%, #E0E0E0 ${progress}%)`,
  };

  return (
    <div className="p-0 w-full max-w-xs mx-auto font-sans">
      <h2 className="font-fredoka text-center text-4xl font-bold text-[#543310] mb-6">
        ROADMAP
      </h2>

      <div className="relative mb-8">
        <div
          className="w-48 h-48 mx-8 rounded-full grid place-items-center"
          style={donutStyle}
        >
          <div className="bg-[#FBF3E4] w-36 h-36 rounded-full flex flex-col items-center justify-center text-center">
            <span className="text-sm font-fredoka font-black text-accent-theme">
              PROGRESS
            </span>
            <span className="text-sm font-fredoka font-black text-accent-theme">
              BELAJAR KAMU
            </span>
            <span className="text-3xl font-fredoka font-semibold text-accent-theme mt-2">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      <h2 className="text-center text-md font-fredoka font-bold text-[#5D4037] mb-4">
        SOAL DIKERJAKAN
      </h2>

      <div className="w-[100%] flex h-20 rounded-full overflow-hidden bg-gray-300">
        <div
          className="bg-[#72AF6F] flex items-center justify-center text-white font-bold"
          style={{ width: `${correctPercentage}%` }}
        >
          {correct}
        </div>
        <div
          className="bg-[#9B3032] flex items-center justify-center text-white font-bold"
          style={{ width: `${incorrectPercentage}%` }}
        >
          {incorrect}
        </div>
      </div>

      <div className="flex justify-between mt-2 px-1">
        <div className="text-left">
          <span className="font-bold text-green-600">BENAR</span>
          <p className="font-bold text-green-600">
            {correctPercentage.toFixed(0)}%
          </p>
        </div>
        <div className="text-right">
          <span className="font-bold text-red-700">SALAH</span>
          <p className="font-bold text-red-700">
            {incorrectPercentage.toFixed(0)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
