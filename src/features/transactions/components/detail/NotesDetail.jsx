import { Note, CaretRight } from "phosphor-react";

import TransactionUpdateDetail from "./TransactionDetail";

const NotesDetail = ({ note }) => {
  return (
    <TransactionUpdateDetail
      label={"Notes"}
      icon={<Note size={25} weight="fill" />}
      onClick={() => console.log("Clicked on notes detail")}
      actionItem={note ? null : <CaretRight size={25} />}
    >
      {note ? <p>{note}</p> : <p>None</p>}
    </TransactionUpdateDetail>
  );
};

export default NotesDetail;
