import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />

          <div className="info">
            <span>Olivia</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          magni.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
          dignissimos quasi maxime architecto ratione! Eveniet odit tenetur vel
          explicabo atque repellat repellendus ea sint veniam eligendi. Quis ex
          quasi cupiditate.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          suscipit natus quia, libero sit perferendis fugit, molestiae
          praesentium nihil doloremque odio, doloribus accusamus in dolores
          maiores sed obcaecati quaerat non consectetur est! Incidunt quibusdam
          molestias commodi sapiente tempore earum suscipit hic laboriosam,
          nostrum minima nisi cupiditate repudiandae impedit cumque temporibus?
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
          dicta quos voluptatum odio reiciendis, maiores commodi ducimus maxime
          nesciunt, asperiores blanditiis quaerat consequatur eligendi dolores
          eius quas? Repellat maxime quas accusamus non placeat molestias neque
          eligendi voluptatum incidunt labore fugit soluta sapiente, nemo in
          qui. Quo, perspiciatis enim. Possimus odio cum officiis ipsam pariatur
          at non architecto nam, eius placeat exercitationem temporibus quaerat
          laboriosam. Tempore, vero. Ratione illum, doloremque delectus eius
          commodi molestias quasi quisquam temporibus obcaecati, amet doloribus
          velit.
        </p>
      </div>

      <Menu />
    </div>
  );
};

export default Single;
