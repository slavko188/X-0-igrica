function Cell({ id, cell, cells, setCells, firstGo, setFirstGo, winner }) {
  const handleGame = (e) => {
    let cellClick =
      e.target.firstChild.classList.contains("circle") ||
      e.target.firstChild.classList.contains("cross"); //sta sad kad znam jeli to mesto zauzeto.

    //pitamo ako na kockicu nije kliknuto
    if (!cellClick) {
      if (firstGo === "circle") {
        e.target.firstChild.classList.add("circle");
        setFirstGo("cross");
        handleCellChange("circle");
      } else if (firstGo === "cross") {
        e.target.firstChild.classList.add("cross");
        setFirstGo("circle");
        handleCellChange("cross");
      }
    }
  };

  const handleCellChange = (classList) => {
    let updateArayCell = cells.map((el, index) => {
      if (index === id) {
        return classList;
      } else {
        return el;
      }
    });
    setCells(updateArayCell);
  };

  return (
    <div className="square" id={id} onClick={!winner ? handleGame : null}>
      <div className={cell}></div>
    </div>
  );
}

export default Cell;
