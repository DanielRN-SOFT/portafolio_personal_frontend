const CardLarge = ({ img, titulo, parrafo }) => {
  return (
    <div className="card lg:card-side bg-base-300 h-90 shadow-sm">
      <figure>
        <img src={img} className="object-top-right sm:object-left" alt="fintrack" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{titulo}</h2>
        <p>{parrafo}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default CardLarge;
