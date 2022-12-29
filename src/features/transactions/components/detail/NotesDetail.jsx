import { Note, CaretRight } from "phosphor-react";
import UpdateNotes from "../update/UpdateNotes";

import TransactionUpdateDetail from "./TransactionDetail";

const NotesDetail = ({ note, setSelected }) => {
  return (
    <TransactionUpdateDetail
      label={"Notes"}
      icon={<Note size={25} weight="fill" />}
      onClick={() => setSelected(<UpdateNotes note={note} />)}
      actionItem={note ? null : <CaretRight size={25} />}
    >
      {note ? <p>{note}</p> : <p>None</p>}
    </TransactionUpdateDetail>
  );
};

export default NotesDetail;
