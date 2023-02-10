import DataTable from "./components/DataTable";

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
            maxWidth: "50rem",
            minWidth: "40rem",
            backgroundColor: "white",
          }}
        >
          <DataTable />
        </div>
      </div>
    </>
  );
}

export default App;
