import React from "react";
import PropTypes from "prop-types";
import "./my-node.css";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const propTypes = {
  nodeData: PropTypes.object.isRequired
};

const MyNode = ({ nodeData }) => {

  return (
    <div>
        <OverlayTrigger
            placement="right"
            delay={{ show: 1000, hide: 5000 }}
            overlay={
                <Tooltip>
                    Téléphone : {nodeData.phone}
                    <br/>
                    Poste : {nodeData.ipphone}
                    <br/>
                    Localisation : {nodeData.city}
                </Tooltip>
            }
        >
            <Card className="card-w">
                <img src={nodeData.image} height={190} alt={nodeData.name}/>
                <div className="nom">{nodeData.name}</div>
                <div className="titre">{nodeData.title}</div>
            </Card>
        </OverlayTrigger>
    </div>
  );
};

MyNode.propTypes = propTypes;

export default MyNode;
