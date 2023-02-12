import Session from "./Session";

const SessionList = ({ sessions, onDelete }) => {
  return (
    <div>
      {sessions.map((text) => (
        <Session key={text} session={text} onDelete={onDelete}></Session>
      ))}
    </div>
  );
};
export default SessionList;
