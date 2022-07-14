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

import { Text } from "../Button/Button.stories";

const CardComponent = ({ title, cardBody, alt, src }) => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component="img" height="140" image={src} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">{cardBody}</Typography>
        </CardContent>
        <CardActions>
          <Text size="small" type="button">
            Share
          </Text>
          <Text size="small" type="button">
            Learn More
          </Text>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardComponent;
