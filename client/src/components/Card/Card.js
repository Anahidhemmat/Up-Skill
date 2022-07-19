import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

import PropTypes from "prop-types";
import { Text } from "../Button/Button.stories";

const CardComponent = ({
  title,
  cardBody,
  alt,
  image,
  height,
  btn1,
  btn2,
  img,
  variant,
  btn1Label = "default",
  btn2Label = "default",
}) => {
  return (
    <Box width="300px">
      <Card varianr={variant} data-testid="card">
        {img ? (
          <CardMedia image={image} component="img" height={height} alt={alt} />
        ) : null}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{cardBody}</Typography>
        </CardContent>
        <CardActions>
          {btn1 ? (
            <Text size="small" type="button">
              {btn1Label}
            </Text>
          ) : null}
          {btn2 ? (
            <Text size="small" type="button">
              {btn2Label}
            </Text>
          ) : null}
        </CardActions>
      </Card>
    </Box>
  );
};

CardComponent.propTypes = {
  title: PropTypes.string,
  cardBody: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.string,
  height: PropTypes.string,
  btn1: PropTypes.bool,
  btn2: PropTypes.bool,
  img: PropTypes.bool,
  variant: PropTypes.string,
};
export default CardComponent;
