const display = (ele) => {
  return ele.places.map((item) => {
    return (
      <div key={item.name} className="display">
        <div className="section-image">
          <img src={item.link} alt={item.name} />
        </div>
        <div className="section-rating">
          <small>{item.rating}</small>
        </div>
        <div className="Section-name">
          <h3>{item.name}</h3>
        </div>
      </div>
    );
  });
};

export default display;
