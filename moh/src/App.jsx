import React from "react";
import ReactDOM from "react-dom";
import MaterialTable from 'material-table'

import "./index.css";

export const App = () =>{

return (
    <div style={{  width:'800px'  }}>
    <MaterialTable
      columns={[
        { title: "Ad", field: "name" },
        { title: "Soyad", field: "surname" },
        { title: "Doğum Y", field: "birthYear", type: "numeric" },
        {
          title: "Doğum Yeri",
          field: "birthCity",
          lookup: { 34: "İstanbul", 63: "Şanlurfa" },
        },
      ]}
      data={[
        {
          name: "Mehmet",
          surname: "Baran",
          birthYear: 1987,
          birthCity: 63,
        },
      ]}
      title="Demo Title"
    />
  </div>
);

}
ReactDOM.render(<App />, document.getElementById("app"));
