import { useState, useRef, useEffect } from "react";
import grabit_thumbnail from "../../images/thumbnail_grabit.svg";
import servme_thumbnail from "../../images/thumbnail_servme.svg";
import chatapp_thumbnail from "../../images/thumbnail_chatapp.svg";
import Card from "../molecules/Card";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import Footer from "../molecules/Footer";

const Cards = () => {
  const [cards, setCards] = useState([
    {
      thumbnail: grabit_thumbnail,
      name: "Grabit",
      color: "bg-cardPink",
      text: `A company delivering anyhting you order in one hour,\n their idea is to split the delivery fees with other customers.`,
      margin: "mt-0",
      href: "https://objective-austin-3b2ce1.netlify.app/",
    },
    {
      thumbnail: servme_thumbnail,
      name: "Servme",
      color: "bg-cardGreen",
      text: "A website created to offer services to clients.",
      margin: "mt-20",
      href: "",
    },
    {
      thumbnail: chatapp_thumbnail,
      name: "ChatApp",
      color: "bg-cardBlue",
      text: "A chat application using websockets to send realtime messages from a user to another.",
      margin: "mt-0",
      href: "",
      class: "chatapp_image",
    },
  ]);

  return (
    <ScrollMenu scrollContainerClassName="no-scrollbar" Footer={Footer}>
      {cards.map((card, i) => {
        return (
          <Card
            id={card.name}
            key={card.name}
            thumbnail={card.thumbnail}
            name={card.name}
            color={card.color}
            text={card.text}
            margin={card.margin}
            href={card.href}
            class={card.class}
          />
        );
      })}
    </ScrollMenu>
  );
};

export default Cards;
