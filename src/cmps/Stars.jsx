import { svgs } from "./Svgs";

export function Stars({bookStars}) {
  const stars = Array.from({ length: bookStars }, (_, index) => index + 1);
  const emptyStars = Array.from({ length: 5 - bookStars }, (_, index) => index + 1);

  return (
    <section className="stars">
    <div>
      {stars.map((star) => (
        <span key={stars}>
        {svgs.fullStar}
        </span>
      ))}
    </div>
    <div>
      {emptyStars.map((star) => (
        <span key={emptyStars}>
        {svgs.emptyStar}
        </span>
      ))}
    </div>
    </section>
  );
};
