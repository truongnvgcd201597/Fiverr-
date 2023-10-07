import "./Gigs.scss";
import GigCard from "../../components/GigCard/GigCard";
import { gigs } from "../../data";
export const Gigs = () => {
  return (
    <div className="Gigs">
      {gigs.map((gig) => (
        <GigCard key={gig.id} item={gig} />
      ))}
    </div>
  );
};
