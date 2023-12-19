// Footer.tsx

import { Box } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box sx={styles.footer}>
      <p>&copy; 2023 Users!.</p>
    </Box>
  );
};

const styles = {
  footer: {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    textAlign: "center",
    width: "100%",
  },
};

export default Footer;
