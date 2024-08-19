function Buttons(title) {
  const { name1,name2 } = title;
  return (
    <div className="flex items-center gap-5">
      <button className="sign-in-button">{name1}</button>
      <button className="download-button">{name2}</button>
    </div>
  );
}

export default Buttons;
