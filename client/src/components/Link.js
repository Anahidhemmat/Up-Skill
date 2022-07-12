import React from "react";
import { Stack, Link } from "@mui/material";

const LinkComponent = ({ linkName, href, color, underline, variant }) => {
  return (
    <Stack>
      <Link href={href} color={color} underLine={underline} variant={variant}>
        {LinkName}
      </Link>
    </Stack>
  );
};

export default LinkComponent;
