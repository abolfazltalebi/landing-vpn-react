
function CaptionSubHeadLine({items}) {
  return (
    <div>
      <h2 className="text-xl font-bold">{items.count}</h2>
      <p>{items.name}</p>
    </div>
  ); 
}

export default CaptionSubHeadLine;
