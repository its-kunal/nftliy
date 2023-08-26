import Card from "./Card";
import tokenSvg from "../assets/token.svg";
function Section({ title, list }) {
  return (
    <div className="mb-4">
      {/* title */}
      <div className="text-2xl font-bold">{title}</div>

      {/* card grid */}

      <div className="grid lg:grid-cols-4  grid-cols-1 mt-2 gap-y-4 gap-x-4">
        {list &&
          list.map((v, idx) => {
            return (
              <Card key={idx} title={v.title} params={v.params} svg={v.svg}  />
            );
          })}
     
      </div>
    </div>
  );
}

export default Section;
