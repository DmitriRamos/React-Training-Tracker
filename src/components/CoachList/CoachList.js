import Coach from "../Coach/Coach";

const CoachList = ({ coaches, onDelete }) => {
  return (
    <div>
      {coaches.map((name) => (
        <Coach onDelete={onDelete} key={name} name={name} />
      ))}
    </div>
  );
};
export default CoachList;
