const display = (ele) => {
  return ele.places.map((item) => {
    return (
      <div key={item.name} className="display">
        <img src={item.link} alt={item.name} />
        <h3>{item.name}</h3>
      </div>
    );
  });
};

export default display;
