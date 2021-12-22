import { Image } from "@material-ui/icons";
import { Avatar, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import universityData from "../data";

export default function Clubs() {
  const location = useLocation().pathname.split("/")[1];
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(universityData[location]);

    setLoading(false);
  }, [location]);

  useEffect(() => {
    console.log(data?.bg);
  }, [data]);

  useEffect(() => {
    console.log(location);
  }, [location]);
  return (
    !isLoading && (
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.3)), url(${data["bg"]})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            width: "100%",
            height: "200px",

            alignItems: "center",
            position: "absolute",
          }}
        >
          <Box sx={{ height: "100%" }}>
            <Avatar
              sx={{ width: "100%", height: "100%" }}
              alt="University Logo"
              src={data.logo}
            />
          </Box>
        </Box>
        <Box
          sx={{
            px: 30,
            py: 10,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {data.clubs.map((item, index) => {
            console.log(item);
            return (
              <Box
                key={index}
                sx={{
                  width: "300px",
                  height: "300px",
                  border: "solid 3px black",
                  margin: "15px",
                  padding: "30px",
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${item.clubImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 1,
                    width: "100%",
                    height: "100%",
                  }}
                ></Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    )
  );
}
