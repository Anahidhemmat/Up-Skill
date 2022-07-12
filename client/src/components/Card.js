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

const CardComponent = ({ title, cardBody, btn1, btn2, alt, src }) => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia component="img" height="140" image={src} alt={alt} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {cardBody}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">{btn1}</Button>
          <Button size="small">{btn2}</Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardComponent;
