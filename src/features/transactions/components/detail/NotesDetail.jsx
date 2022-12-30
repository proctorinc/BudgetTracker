import { Note, CaretRight } from "phosphor-react";
import UpdateNotes from "../update/UpdateNotes";

import TransactionUpdateDetail from "./TransactionDetail";

const NotesDetail = ({ note, setSelected, onUpdate }) => {
  return (
    <TransactionUpdateDetail
      label={"Notes"}
      icon={<Note size={25} weight="fill" />}
      onClick={() =>
        setSelected(<UpdateNotes initialNote={note} onUpdate={onUpdate} />)
      }
      actionItem={<CaretRight size={25} />}
    >
      <p className="max-w-sm max-h-28 overflow-hidden">
        {note ? note : "None"}
      </p>
    </TransactionUpdateDetail>
  );
};

export default NotesDetail;
