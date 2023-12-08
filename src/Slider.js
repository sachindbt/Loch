import React from "react";
import Slider from "react-slick";
import "./App.css";
import "slick-carousel/slick/slick.css";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Button from "@mui/material/Button";
import "slick-carousel/slick/slick-theme.css";
import BarChartIcon from "@mui/icons-material/BarChart";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import ListSubheader from "@mui/material/ListSubheader";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Demmo() {
  const settings = {
    // dots: true,
    slidesToShow: 2, // Show 1 slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // prevArrow: <button className="slick-prev">Previous</button>,
    // nextArrow: <button className="slick-next">Next</button>,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 1, // Display 1.5 slides at a time for smaller screens
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <div className="slider_main">
        <Slider {...settings}>
          <div className="main_dv_slider">
            <div className="slide_box">
              <div className="top_c">
                <span>
                  <NotificationsNoneIcon />
                </span>
                <Button>Save</Button>
              </div>
              <h2>We’ll be sending notifications to you here</h2>
              <input
                type="text"
                placeholder=""
                style={{
                  padding: "22px 11px",
                  width: "80%",
                  margin: "auto",
                  borderRadius: "6px",
                  border: "0.7px solid var(--neutral-300, #D4D4D4)",
                  background: "background: #FFF;",
                }}
              />
            </div>
          </div>
          <div>
            <div className="slide_box">
              <div className="top_c">
                <span>
                  <BarChartIcon />
                </span>
                <div className="checkbox-icon">
                  <CheckBoxIcon />
                </div>
              </div>
              <h2>Notify me when any wallets move more than</h2>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">$1,000.00</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div>
            <div className="slide_box">
              <div className="top_c">
                <span>
                  <AccessTimeIcon />
                </span>
                <div className="checkbox-icon">
                  <CheckBoxIcon />
                </div>
              </div>
              <h2>Notify me when any wallet dormant for</h2>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel htmlFor="grouped-select">{" 30 days "}</InputLabel>
                <Select defaultValue="" id="grouped-select" label="Grouping">
                  <MenuItem value="">
                    <em>Options</em>
                  </MenuItem>
                  {/* <ListSubheader>Category 1</ListSubheader> */}
                  <MenuItem value={1}>Option 1</MenuItem>
                  <MenuItem value={2}>Option 2</MenuItem>
                  {/* <ListSubheader>Category 2</ListSubheader> */}
                  <MenuItem value={3}>Option 3</MenuItem>
                  <MenuItem value={4}>Option 4</MenuItem>
                </Select>
              </FormControl>
              <p>becomes active</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Demmo;
