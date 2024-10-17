import { CiCalendarDate } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { MdQuestionMark } from "react-icons/md";

export default function ResourceCard({ data }) {
  return (
    <div className="bg-white p-7 rounde-md mb-8 text-gray-500">
      <h1 className="text-3xl mb-3 font-semibold text-gray-600">{data.title}</h1>
      <div className="flex items-center gap-7 mb-3 font-semibold">
        <div className="flex items-center gap-3">
          <CiCalendarDate className="text-3xl -mt-[3px]" />
          <span>{data.date}</span>
        </div>
        <div className="flex items-center gap-3">
          <GoClock className="text-[27px] -mt-[3px]" />
          <span>{data.duration}</span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-3">
          <div className="bg-primary-100 rounded-full w-7 h-7 text-primary-400 p-1">
          <MdQuestionMark className="text-xl" />
          </div>
          <span className="text-sm">{data.question} {data.question === 1 ? "question" : "questions"}</span>
        </div>
      </div>
    </div>
  );
}
