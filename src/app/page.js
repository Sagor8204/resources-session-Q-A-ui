import ResourceCard from "./components/ResourceCard";

const datas = [
  {
    title: "Medical Working Group - Technology",
    date: "Fri Mar 11, 2022",
    duration: "9:00 AM-10:00 AM",
    question: 1
  },
  {
    title: "Medical Working Group - Technology",
    date: "Fri Mar 11, 2022",
    duration: "9:00 AM-10:00 AM",
    question: 2
  },
  {
    title: "Medical Working Group - Technology",
    date: "Fri Mar 11, 2022",
    duration: "9:00 AM-10:00 AM",
    question: 2
  },
  {
    title: "Medical Working Group - Technology",
    date: "Fri Mar 11, 2022",
    duration: "9:00 AM-10:00 AM",
    question: 2
  },
]

export default function Home() {
  return (
    <div className="p-5">
      <main className="">
        <div className="bg-white px-5 py-7 rounded-md mb-5">
          <h3 className="text-xl text-gray-600 font-semibold">Resources-Session Q&A</h3>
        </div>

        <div>
          {datas.map((data,index) => (
            <ResourceCard key={index} data={data} />
          ))}
        </div>
      </main>
    </div>
  );
}
