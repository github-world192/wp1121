import { useState } from "react";

import { Paper } from "@mui/material";

import CardDialog from "./CardDialog";

export type CardProps = {
  id: string;
  title: string;
  description: string;
  listId: string;

};

export default function Card({ id, title, description, listId }: CardProps) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
    <div style={{display:"inline-block"}}>
    <button onClick={handleClickOpen} className="text-start">
      <Paper className="flex w-full flex-col p-2" elevation={6}>
          <div style={{display:"inline-block"}}>
          <p>{title}
          </p>
          <p>{description}
          </p>
          <p>{"link"}</p>
          
          
          </div>
        </Paper>
       
        </button>
      </div>
      
      <CardDialog
      
        variant="edit"
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        description={description}
        listId={listId}
        cardId={id}
      />
    </>
  );
}
