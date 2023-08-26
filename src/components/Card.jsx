export default function Card({ title, params, svg, time }) {
  return (
    <div className="bg-darkPurple flex flex-col shadow-sm rounded-xl text-white px-4 py-3 select-text" >
      {/* title */}
      <div className="text-xl">{title}</div>
      {/* parameter grid */}
      <div className="grid grid-cols-2 mt-4 gap-x-4 truncate text-ellipsis gap-y-2">
        {params.map((param, idx) => {
          return (
            <>
              <div className="font-bold">{param.name}</div>
              <div>{param.value}</div>
            </>
          );
        })}
        
      </div>

      <div className="flex-1"></div>

      {/* button right bottom */}

      <div className="flex self-end pt-4 ">
        <div className="rounded-full bg-magenta p-3">
          {/* svg 👇 */}
          <img src={svg} alt="" />
        </div>
      </div>
    </div>
  );
}
