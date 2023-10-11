import CardDialog from './CardDialog';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import type { CardProps } from "./Card";
export type CardListProps = {
    id: string;
    name: string;
    cards: CardProps[];
  };
const [openNewCardDialog, setOpenNewCardDialog] = useState(false);
export default function FolderList() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem>
      <CardDialog
        variant="new"
        open={openNewCardDialog}
        onClose={() => setOpenNewCardDialog(false)}
        listId={id}
      />
      </ListItem>
      <ListItem>
        <p>s</p>
        
      </ListItem>
      <ListItem>
        
       
      </ListItem>
    </List>
  );
}