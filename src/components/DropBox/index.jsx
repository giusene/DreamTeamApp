import { useDispatch } from "react-redux";
import { savePlayer } from "./../../store/actions";
import { DropTarget } from "react-drag-drop-container";
import "./style.css";
import PlayerCard from "../PlayerCard";
import { useState } from "react";
import { httpGetImage } from "../../libs/http";

const DropBox = ({ role, index, content }) => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const dropped = e => {
    httpGetImage(e.dragData.name + " " + e.dragData.team.name).then(data => {
      dispatch(
        savePlayer(
          role,
          index,
          e.dragData,
          data.data.result.items[0].media_fullsize
        )
      );
      setData({ ...e.dragData, img: data.data.result.items[0].media_fullsize });
    });
  };

  return (
    <>
      {content.assigned ? (
        <PlayerCard data={data} index={index} />
      ) : (
        <div className="dropWrapper">
          <DropTarget onHit={dropped} targetKey={role}></DropTarget>
        </div>
      )}
    </>
  );
};

export default DropBox;
