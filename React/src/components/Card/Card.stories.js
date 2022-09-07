import React from "react";
import CardComponent from "./Card";

export default {
  title: "Card",
  component: CardComponent,
  argTypes: {
    title: { defaultValue: "Default Text" },
    cardBody: {
      defaultValue:
        "Search for the keywords to learn more about each warning. To ignore, add  eslint-disable-next-line to the line before.",
    },

    alt: {
      defaultValue: "Nothing",
    },
    image: {
      defaultValue: "https://source.unsplash.com/random",
    },
    height: {
      defaultValue: "140",
    },
  },
};

const Template = (args) => <CardComponent {...args} />;

export const BasicCard = Template.bind({});
BasicCard.args = {
  btn1: true,
};

export const BasicCardBtn2 = Template.bind({});
BasicCardBtn2.args = {
  btn1: true,
  btn2: true,
};

export const OutlinedCard = Template.bind({});
OutlinedCard.args = {
  btn1: true,
  variant: "outlined",
};

export const MediaCard = Template.bind({});
MediaCard.args = {
  img: true,
};

export const MediaCardBtn1 = Template.bind({});
MediaCardBtn1.args = {
  img: true,
  btn1: true,
};

export const MediaCardBtn2 = Template.bind({});
MediaCardBtn2.args = {
  img: true,
  btn1: true,
  btn2: true,
};
