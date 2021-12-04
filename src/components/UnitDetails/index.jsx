import { useParams } from "react-router";
import { costStringFromObject } from "../../utils/helpers";

import { Table } from "antd";

const UnitDetails = ({ unitsState }) => {
  const { uuid } = useParams();
  console.log(unitsState, "eyoo");
  const selectedUnitObject = unitsState.filter((unitObject) => unitObject.uuid === uuid);

  const columns = [
    {
      title: "ID",
      name: "id",
      key: "id",
      render: ({ id }) => id
    },
    {
      title: "Name",
      name: "name",
      key: "name",
      render: ({ name }) => name
    },
    {
      title: "Age",
      name: "age",
      key: "age",
      render: ({ age }) => age
    },
    {
      title: "Costs",
      name: "cost",
      key: "cost",
      render: (unitObj) => (unitObj.cost ? costStringFromObject(unitObj.cost) : "no cost")
    }
  ];

  return (
    <Table
      rowKey={({ id }) => id}
      dataSource={selectedUnitObject}
      columns={columns}
      pagination={{ position: ["bottomCenter"] }}
    />
  );
};

export default UnitDetails;
