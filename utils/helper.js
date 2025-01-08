const H = {
  // With Field Validation
  url: (path = "") => {
      return (
        (localStorage.getItem("slug")
          ? "/" + localStorage.getItem("slug")
          : "") + path
      );
  },
};
export default H;
