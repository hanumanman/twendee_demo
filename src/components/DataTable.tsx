import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";
import useAxios from "../hooks/useAxios";
import "./DataTable.css";

interface user {
  login: {
    username: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };

  picture: {
    thumbnail: string;
  };
}

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    headerClassName: "table-header",
    headerAlign: "center",
    width: 50,
  },
  {
    field: "avatar",
    headerName: "Avatar",
    headerClassName: "table-header",
    headerAlign: "center",
    width: 70,
    renderCell: (params) => {
      return (
        <>
          <Avatar src={params.row.avatar} />
        </>
      );
    },
  },
  {
    field: "name",
    headerName: "Full name",
    headerClassName: "table-header",
    headerAlign: "center",
    flex: 1,
  },
  {
    field: "username",
    headerName: "Username",
    headerClassName: "table-header",
    headerAlign: "center",
    flex: 1,
  },
];

export default function DataTable() {
  const { response, loading, error } = useAxios({
    method: "get",
    url: "?results=100",
  });

  let randomUser = [];
  if (response?.data) {
    console.log(response.data);
    randomUser = response.data.results.map((user: user) => ({
      id: response.data.results.indexOf(user) + 1,
      name: user.name.title + " " + user.name.first + " " + user.name.last,
      username: user.login.username,
      avatar: user.picture.thumbnail,
    }));
    console.log(`randomuser is`, randomUser);
  }

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={randomUser}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        loading={loading}
        error={error}
      />
    </div>
  );
}
