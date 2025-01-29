import GitHubCalendar from "react-github-calendar";

const theme = {
  light: ["#475d4520", "#475d4540", "#82b97d", "#63ad54", "#1e830a"],
};

const Contributions = () => {
  return (
    <div>
      <GitHubCalendar
        username="1bryanvalenzuela"
        colorScheme="light"
        theme={theme}
        blockMargin={5} //4
        blockSize={8.5} //8
        labels={{
          totalCount: "Llevo {{count}} contribuciones durante 12 meses.",
          legend: { less: "Menos", more: "Más" },
        }}
      />
    </div>
  );
};

export default Contributions;
