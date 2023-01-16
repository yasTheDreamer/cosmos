import React, { useEffect, useState, useContext } from "react";
import Arrow from "./Arrow";
import { ArrowsContext } from "../../contexts/ArrowsContext";
import { PageContext } from "../../contexts/PageContext";

const RightArrow = (props: any) => {
  const { arrowHidden, setArrowHidden } = useContext(ArrowsContext);
  const { page, setPage } = useContext(PageContext);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const second_page = document.getElementById("second_page");

    if (second_page) {
      if (page == "right") {
        second_page.classList.remove("bg-gray-400");
        second_page.classList.add("bg-white");
      } else {
        second_page.classList.remove("bg-white");
        second_page.classList.add("bg-gray-400");
      }
    }
  }, [page]);

  useEffect(() => {
    const right_arrow = document.getElementById("right_arrow");
    if (right_arrow) {
      if (arrowHidden) right_arrow.classList.add("hidden");
      else right_arrow.classList.remove("hidden");
    }
  }, [arrowHidden]);

  useEffect(() => {
    if (scroll) {
      const lastCard = document.getElementById("ChatApp");

      if (lastCard) {
        lastCard.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
      setScroll(false);
    }
  }, [scroll]);

  return (
    <Arrow
      id={props.id}
      onClick={() => {
        setScroll(true);
        setArrowHidden(true);
        setPage("right");
      }}
      icon={props.icon}
      class="absolute right-[40%]"
    />
  );
};

export default RightArrow;
