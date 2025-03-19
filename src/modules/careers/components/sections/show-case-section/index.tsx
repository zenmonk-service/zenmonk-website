import Title from "@/shared/title";
import { Box, Typography } from "@mui/material";
import { showCaseList } from "./show-case";
import ShowCaseCard from "./card";
import "./styles.scss";

const Showcases = () => {
  return (
    <Box className="show-case-section">
      <Title
        text="The Ultimate Showcase of Skill, Strategy, and Champions"
        className="show-case-title"
      />
      <Box className="show-case-description-wrapper">
        <Typography component="p" className="show-case-description">
          State burst think end are its. Arrived off she elderly beloved him
          affix ed noisier yet. Course regard to up he hardly elder noisier.
          state burst think end are its.
        </Typography>
      </Box>
      <Box className="showcases">
        {showCaseList.map((event, index) => {
          return (
            <ShowCaseCard
              key={index}
              imageProps={{
                place: "top",
              }}
              cardProps={{
                details: {
                  date: event.date,
                  description: event.description,
                  image: event.image,
                  title: event.title,
                },
                height: 610,
                width: 630,
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default Showcases;
