const hidden = {
  transform: "translateX(400px)",
  position: "absolute",
};
const visible = {
  transform: "translateX(220px)",
  position: "absolute",
};

const activeStyle = {
  backgroundColor: "rgb(237, 181, 7)",
  textDecoration: "none",
  borderRadius: "5px",
  padding: "5px",
  color: "rgb(244, 244, 244)",
};

const inactiveStyle = {
  backgroundColor: "rgb(244, 244, 244)",
  textDecoration: "none",
  padding: "5px",
  color: "black",
};

export { hidden, visible, activeStyle, inactiveStyle };
