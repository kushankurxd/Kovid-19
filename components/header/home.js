import { useState, useEffect } from "react";
import Axios from "axios";

export const monthAsString = (monthIndex) => {
  return [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ][monthIndex];
};

const home = (props) => {
  const [total, setTotal] = useState("~");
  const [recovered, setRecovered] = useState("~");
  const [death, setDeath] = useState("~");
  const [updated, setUpdated] = useState("~");

  useEffect(() => {
    Axios.get("https://api.thevirustracker.com/free-api?global=stats")
      .then((res) => {
        animateValue("total", 0, res.data.results[0].total_cases, 1000);
        animateValue("recovered", 0, res.data.results[0].total_recovered, 1000);
        animateValue("death", 0, res.data.results[0].total_deaths, 1000);

        const time = new Date();
        const month = monthAsString(time.getMonth());
        const date = time.getDate();
        const year = time.getFullYear();
        const hour = time.getHours();
        const min = time.getMinutes();
        const dayNight = hour >= 12 ? "PM" : "AM";
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        const lastUpdated = `${month} ${date}, ${year}, ${
          hour.toString().length == 1 ? `0${hour}` : hour
        }:${
          min.toString().length == 1 ? `0${min}` : min
        } ${dayNight} ${timeZone}`;

        setUpdated(lastUpdated);
      })
      .catch((err) => err);
  }, []);

  const animateValue = (id, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      if (id === "total") {
        setTotal(Math.floor(progress * (end - start) + start));
      } else if (id === "recovered") {
        setRecovered(Math.floor(progress * (end - start) + start));
      } else if (id === "death") {
        setDeath(Math.floor(progress * (end - start) + start));
      }
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <div className="nk-banner">
      <div className="container">
        <div
          className={[
            "row g-gs align-items-center justify-content-between",
          ].join(" ")}
        >
          <div className={["col-lg-5 order-lg-last"].join(" ")}>
            <div className="nk-banner-image">
              {" "}
              <img src="/gfx/header-a.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="nk-banner-block">
              <div className="content">
                <h1 className="heading">
                  {" "}
                  <span>CORONA</span>{" "}
                  <span className="heading-sm">
                    {" "}
                    <span className="sup">COVID-19</span>{" "}
                    <span className="sub">VIRUS</span>{" "}
                  </span>
                </h1>
                <p>
                  The Coronavirus (COVID-19) was first reported in Wuhan, Hubei,
                  China in December 2019, the outbreak was later recognized as a
                  pandemic by the World Health Organization (WHO) on 11 March
                  2020.
                </p>
                <ul className="nk-banner-btns">
                  <li>
                    <a href="#protect" className={["btn scrollto"].join(" ")}>
                      <span>How to Protect</span>
                      <em className={["icon ni ni-shield-half"].join(" ")}></em>
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="btn btn-transparent scrollto">
                      <span>About COVID-19</span>
                      <em className={["icon ni ni-arrow-right"].join(" ")}></em>
                    </a>
                  </li>
                </ul>
                <div className="status" data-covid="world">
                  <div className={["row g-gs"].join(" ")}>
                    <div className={["col-sm-4 col-6"].join(" ")}>
                      <div className="status-item">
                        <h6 className="title">Worldwide Cases</h6>
                        <div
                          className={["h3 count covid-stats-cases"].join(" ")}
                        >
                          {total.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className={["col-sm-4 col-6"].join(" ")}>
                      <div className="status-item">
                        <h6 className="title">Deaths</h6>
                        <div
                          className={["h3 count covid-stats-death"].join(" ")}
                        >
                          {death.toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className={["col-sm-4 col-6"].join(" ")}>
                      <div className="status-item">
                        <h6 className="title">Recovered</h6>
                        <div
                          className={["h3 count covid-stats-recovered"].join(
                            " "
                          )}
                        >
                          {recovered.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="status-note">
                    * Last updated:{" "}
                    <span className="covid-update-time">{updated}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
