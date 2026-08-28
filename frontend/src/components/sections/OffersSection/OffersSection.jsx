import React from "react";
import "./style.css";

const offers = [
  {
    title: "Stay + Breakfast",
    benefit: "Start your day with a delicious breakfast included in your stay.",
    value: "From ₹5,999/night",
    validity: "Valid on selected weekdays",
    cta: "Book Now",
  },
  {
    title: "Weekend Escape",
    benefit: "Enjoy a relaxing weekend stay with special pricing and comfort.",
    value: "Up to 15% Off",
    validity: "Friday to Sunday",
    cta: "Plan Weekend",
  },
  {
    title: "Early Bird Discount",
    benefit: "Book in advance and save more on your next Fuggler stay.",
    value: "Up to 20% Off",
    validity: "Book 7+ days early",
    cta: "Reserve Early",
  },
  {
    title: "Couple Stay Package",
    benefit: "A premium getaway experience for couples with extra comfort.",
    value: "Complimentary Perks",
    validity: "Limited time offer",
    cta: "View Offer",
  },
];

export default function OffersSection() {
  return (
    <section className="offers-section" id="offers">
      <div className="offers-section__header">
        <p className="offers-section__eyebrow">Special Offers</p>
        <h2>Exclusive Deals for Your Stay</h2>
        <p>
          Discover curated offers that bring together comfort, dining, and better value for every kind of getaway.
        </p>
      </div>

      <div className="offers-section__grid">
        {offers.map((offer, index) => (
          // <article className="offer-card" key={index}>
          //   <div className="offer-card__badge">Offer {index + 1}</div>

          //   <h3 className="offer-card__title">{offer.title}</h3>
          //   <p className="offer-card__benefit">{offer.benefit}</p>

          //   <div className="offer-card__meta">
          //     <span className="offer-card__value">{offer.value}</span>
          //     <span className="offer-card__validity">{offer.validity}</span>
          //   </div>

          //   {/* <button type="button" className="offer-card__button">
          //     {offer.cta}
          //   </button> */}

          //   <div className="offer-card__bottom">
          //     <button type="button" className="offer-card__button">
          //       {offer.cta}
          //     </button>
          //   </div>
          // </article>

          // <article className="offer-card" key={index}>
          //   <div className="offer-card__top">
          //     <div className="offer-card__badge">Offer {index + 1}</div>

          //     <h3 className="offer-card__title">{offer.title}</h3>
          //     <p className="offer-card__benefit">{offer.benefit}</p>

          //     <div className="offer-card__meta">
          //       <span className="offer-card__value">{offer.value}</span>
          //       <span className="offer-card__validity">{offer.validity}</span>
          //     </div>
          //   </div>

          //   <div className="offer-card__bottom">
          //     {/* <button type="button" className="offer-card__button">
          //       {offer.cta}
          //     </button> */}

          //     <button type="button" className="offer-card__button">
          //       {offer.cta}
          //     </button>
          //   </div>
          // </article>

          <article className="offer-card" key={index}>
            <div className="offer-card__top">
              <div className="offer-card__badge">Offer {index + 1}</div>

              <h3 className="offer-card__title">{offer.title}</h3>
              <p className="offer-card__benefit">{offer.benefit}</p>
            </div>

            <div className="offer-card__bottom">
              <div className="offer-card__meta">
                <span className="offer-card__value">{offer.value}</span>
                <span className="offer-card__validity">{offer.validity}</span>
              </div>

              {/* <button type="button" className="offer-card__button">
                {offer.cta}
              </button> */}

              <button type="button" className="offer-card__button">
                {offer.cta}
              </button>
            </div>
          </article>

        ))}

      </div>
    </section>
  );
}
