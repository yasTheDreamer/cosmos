import React, { useContext, useEffect, useState } from "react";
import Arrow from "./Arrow";
import { ArrowsContext } from "../../contexts/ArrowsContext";
import { PageContext } from "../../contexts/PageContext";

const LeftArrow = (props: any) => {
  const [scroll, setScroll] = useState(false);
  const { arrowHidden, setArrowHidden } = useContext(ArrowsContext);
  const { page, setPage } = useContext(PageContext);

  useEffect(() => {
    const first_page = document.getElementById("first_page");

    if (first_page) {
      if (page == "left") {
        first_page.classList.remove("bg-gray-400");
        first_page.classList.add("bg-white");
      } else {
        first_page.classList.remove("bg-white");
        first_page.classList.add("bg-gray-400");
      }
    }
  }, [page]);

  useEffect(() => {
    const leftArrow = document.getElementById("left_arrow");
    if (leftArrow) {
      var match = leftArrow.style.left;
      console.log(match);
    }
  }, [arrowHidden]);

  useEffect(() => {
    const leftArrow = document.getElementById("left_arrow");
    if (leftArrow) {
      if (arrowHidden) {
        leftArrow.classList.remove("hidden");
      } else {
        leftArrow.classList.add("hidden");
      }
    }
  }, [arrowHidden]);

  useEffect(() => {
    if (scroll) {
      const lastCard = document.getElementById("Grabit");

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
        setArrowHidden(false);
        setPage("left");
      }}
      icon={props.icon}
      class="absolute left-[40%]"
    />
  );
};

export default LeftArrow;
