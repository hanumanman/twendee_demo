import DataTable from "./components/DataTable";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          backgroundColor: "#edeae1",
        }}
      >
        <div
          id="GridContainer"
          style={{
            maxWidth: "100%",
            minWidth: "50%",
            backgroundColor: "white",
          }}
        >
          <DataTable />

          <Typography
            variant="subtitle1"
            gutterBottom
            sx={{ textAlign: "center", fontStyle: "italic" }}
          >
            Table 1. 100 random users
          </Typography>
        </div>
      </div>
    </>
  );
}

export default App;
