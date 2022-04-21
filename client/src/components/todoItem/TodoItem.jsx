import React from "react";
import { Button, IconButton, Tooltip, Grid, Typography } from "@mui/material";
// import todoContext from "../../todoContext/TodoContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

const TodoItem = (props) => {
  const deleteItem = (e) => {
    props.deleteItem(props.id);
  };

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography variant="h4">{props.task}</Typography>
          </Grid>
          <Grid item xs={4}>
            <Tooltip title="Delete" style={{ float: "right" }}>
              <IconButton onClick={deleteItem}>
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

// <div>
//   <li className="list-group-item">
//     <div className="row">
//       <div className="col">
//         <h3>{props.task}</h3>
//       </div>
//       <div className="col">
//         <Tooltip title="Delete" style={{ float: "right" }}>
//           <IconButton onClick={deleteItem}>
//             <DeleteForeverIcon />
//           </IconButton>
//         </Tooltip>
//       </div>
//     </div>
//     <div></div>
//   </li>
// </div>
export default TodoItem;
