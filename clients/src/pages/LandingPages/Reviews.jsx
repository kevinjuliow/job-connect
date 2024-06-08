import React from "react";
import { InfiniteMovingCards } from "../../components/ui/InfiniteMovingCards.tsx";
import Reviewer1 from "../../assets/imgs/reviewer1.jpeg"
import Reviewer2 from "../../assets/imgs/reviewer2.jpeg"
import Reviewer3 from "../../assets/imgs/reviewer3.jpeg"
import Reviewer4 from "../../assets/imgs/reviewer4.jpeg"
import Reviewer5 from "../../assets/imgs/reviewer5.jpeg"


const Reviews = () => {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Cristiano Ronaldo",
      title: "Football Player",
      img : Reviewer1
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "Lionel Messi",
      title: "Football Player",
      img : Reviewer2
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Keanu Reeves",
      title: "Actor",
      img : Reviewer3
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Megan Fox",
      title: "Actress",
      img : Reviewer4
    },
    {
      quote:
        "Call me Ishmael. Some years ago-never mind how long precisely-having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Anne Hathaway",
      title: "Moby-Dick",
      img : Reviewer5
    },
  ];
  return (
    <div id="reviews-page" className="h-[40rem] bg-white flex flex-col items-center justify-center border border-red-600">
      <h1 className="text-center font-bold text-3xl mb-[24px] opacity-90">Reviews</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Reviews;
