const bg = (index) => {
  if (index % 2 !== 0)
    return {
      accent: "bg-[#0F1422]",
      progress: "bg-[#717070]",
      text: "text-[#717070]",
    };
  else
    return {
      accent: "bg-[#70367C]",
      progress: "bg-[#652675]",
      text: "text-[#f1b3f8]",
    };
};

export default bg;
