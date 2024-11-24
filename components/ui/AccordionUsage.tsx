"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function AccordionUsage() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            color: "#002558",
            fontSize: "1.25rem",
            fontWeight: "regular",
            borderRadius: "25%",
          }}
        >
          How long can I rent a laptop?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "#717171",
            fontSize: "0.85rem",
            fontWeight: "regular",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing etlit. Aenean ut
          facilisis massa. Lorem ipsum dolor sit amet, consectetur adipiscing
          etlit. Aenean ut facilisis massa.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            color: "#002558",
            fontSize: "1.25rem",
            fontWeight: "regular",
            borderRadius: "25%",
          }}
        >
          What is included in the rental price?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "#717171",
            fontSize: "0.85rem",
            fontWeight: "regular",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            color: "#002558",
            fontSize: "1.25rem",
            fontWeight: "regular",
            borderRadius: "25%",
          }}
        >
          What is your cancellation and damage policy?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "#717171",
            fontSize: "0.85rem",
            fontWeight: "regular",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
          sx={{
            color: "#002558",
            fontSize: "1.25rem",
            fontWeight: "regular",
            borderRadius: "25%",
          }}
        >
          Do you offer deliveries?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "#717171",
            fontSize: "0.85rem",
            fontWeight: "regular",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
          sx={{
            color: "#002558",
            fontSize: "1.25rem",
            fontWeight: "regular",
            borderRadius: "25%",
          }}
        >
          Can I upgrade the laptop's configuration?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "#717171",
            fontSize: "0.85rem",
            fontWeight: "regular",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6-content"
          id="panel6-header"
          sx={{
            color: "#002558",
            fontSize: "1.25rem",
            fontWeight: "regular",
            borderRadius: "25%",
          }}
        >
          Can I extend my rental?
        </AccordionSummary>
        <AccordionDetails
          sx={{
            color: "#717171",
            fontSize: "0.85rem",
            fontWeight: "regular",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
