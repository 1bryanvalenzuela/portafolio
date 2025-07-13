import GitHubCalendar from "react-github-calendar";

const themes = {
  light: ["#475d4520", "#96e0c8", "#67c7a7", "#37b087", "#16c98d"],
  dark: ["#333333", "#45665b", "#4e967e", "#37b087", "#16c98d"],
};

const Contributions = ({
  language,
  theme,
}: {
  language: string;
  theme: string;
}) => {
  const labels =
    language === "es"
      ? {
          labels: {
            totalCount: "Llevo {{count}} contribuciones durante 12 meses.",
            legend: { less: "Menos", more: "Más" },
            months: [
              "Ene",
              "Feb",
              "Mar",
              "Abr",
              "May",
              "Jun",
              "Jul",
              "Ago",
              "Sep",
              "Oct",
              "Nov",
              "Dic",
            ],
          },
        }
      : {};

  return (
    <div className="ubuntu-regular text-primary">
      <GitHubCalendar
        username="1bryanvalenzuela"
        colorScheme={theme as "light" | "dark"}
        theme={themes}
        blockMargin={5} //4
        blockSize={8.5} //8
        {...labels}
      />
    </div>
  );
};

export default Contributions;
