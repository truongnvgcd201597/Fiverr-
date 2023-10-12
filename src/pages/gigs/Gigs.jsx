import "./Gigs.scss";
import GigCard from "../../components/GigCard/GigCard";
import { gigs } from "../../data";
import { useState } from "react";
export const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");
  const isUserOpen = () => {
    return setOpen(!open);
  };
  const updateSort = (sortValue) => {
    setSort(sortValue);
    setOpen(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Liverr &gt; Graphics & Design &gt;</span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Liverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder="min" />
            <input type="number" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by:</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <i class="fa-solid fa-caret-down" onClick={isUserOpen}></i>
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => updateSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => updateSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};
