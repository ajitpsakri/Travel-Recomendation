const display = (ele) => {
  return ele.places.map((item) => {
    return (
      <div key={item.name} className="display">
        <div className="section-image">
          <img src={item.link} alt={item.name} />
        </div>
        
          <small>Rating: {item.rating}</small>
       
  
          <h3>{item.name}</h3>
        
      </div>
    );
  });
};

export default display;
