import React from "react";
import user from "../assets/images/user.svg";
import ColumnChart from "./ColumnChart";

const analytics = [
  { title: "Number of Agent", value: 23 },
  { title: "Complete Ticket", value: 1123 },
  { title: "Pending Ticket", value: 123 },
  { title: "Total Ticket", value: 23 }
];

const activities = [
  { image: user, title: "New Ticket #4424211", time: "1 min ago" },
  { image: user, title: "New Ticket #4424211", time: "1 min ago" },
  { image: user, title: "New Ticket #4424211", time: "1 min ago" },
  { image: user, title: "New Ticket #4424211", time: "1 min ago" }
];

function Content() {
  return (
    <div
      style={{ gridColumn: "3 / span 12", paddingLeft: 70, paddingRight: 25 }}
    >
      <div className="content__title">Dashboard Overview</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)" }}>
        <div className="content__analytics-container">
          {analytics.map((detail, i) => (
            <div
              className="content__analytics"
              style={{ borderLeft: `${i === 0 ? "" : "1px solid #C8D3D6"}` }}
            >
              <small style={{ marginBottom: 2 }}>{detail.title}</small>
              <div style={{ fontSize: "40px", marginBottom: 4 }}>
                {detail.value}
              </div>
              <small
                style={{
                  border: "1px solid #C8D3D6",
                  padding: "5px 10px",
                  fontSize: 10,
                  borderRadius: "19px"
                }}
              >
                10/12/2019 - 6/12/2019
              </small>
            </div>
          ))}
        </div>
        <div style={{ gridColumn: "1 / 5" }}>
          <div className="content__activity-heading">LIVE ACTIVITIES</div>
          <div className="content__activity-container">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="content__activity"
                style={{
                  borderBottom: `${
                    activities.length - 1 === i ? "" : "1px solid #C8D3D6"
                  }`
                }}
              >
                <img
                  src={activity.image}
                  alt="activity-user"
                  style={{ height: 54, width: 54 }}
                />
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <small>{activity.title}</small>
                  <small
                    style={{ fontSize: 12, opacity: "0.54", marginTop: 3 }}
                  >
                    {activity.time}
                  </small>
                </span>
                <button style={activityBtnStyles}>Ticket</button>
              </div>
            ))}
          </div>
        </div>
        <div className="content__chart">
          <ColumnChart />
        </div>
      </div>
    </div>
  );
}

export default Content;

const activityBtnStyles = {
  borderRadius: "16px",
  background: "#0089E1",
  color: "white",
  borderStyle: "none",
  padding: "5px 15px"
};
