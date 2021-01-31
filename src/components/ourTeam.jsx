import { team } from "../resources/data.js";

const Team = () => {
  return (
    <div key="team" id="team">
      {team.map(worker => (
        <div id={worker.id} key={worker.id}>
          <img src={worker.photo} alt="Worker photo" key={`${worker.id}-photo`}></img>
          <h2 key={`${worker.id}-name`}>{worker.name}</h2>
          <h3 key={`${worker.id}-role`}>{worker.role}</h3>
          <p key={`${worker.id}-description`}>{worker.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;
