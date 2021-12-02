import { useEffect, useState } from "react";

import { Container } from "react-bootstrap";
// import { Table } from "antd";

const Units = ({ units }) => {
  // const [filteredUnits, setFilteredUnits] = useState(units);
  // const [dataSource, setDataSource] = useState([]);
  const [filteringParameters, setFilteringParameters] = useState({
    age: "All",
    costs: {
      wood: "excluded",
      food: "excluded",
      gold: "excluded"
    }
  });

  // useEffect(() => {
  //   (() => {
  //     filteredUnits.map(({ id, name, age, cost }) => ({
  //       key: id,
  //       id,
  //       name,
  //       age,
  //       costs: cost
  //         ? Object.entries(cost)
  //             .map((entry) => `${entry[0]}: ${entry[1]}`)
  //             .join(", ")
  //         : "no cost"
  //     }));
  //   })();
  // }, [filteredUnits]);

  const filterUnits = () => {
    let query = units;
    if (filteringParameters.age !== "All") {
      query = query.filter((unitObject) => unitObject.age === filteringParameters.age);
    }
    if (filteringParameters.costs.wood !== "excluded") {
      query = query.filter(
        (unitObject) =>
          unitObject.cost?.wood >= 0 && unitObject.cost.wood < filteringParameters.costs.wood
      );
    }
    if (filteringParameters.costs.food !== "excluded") {
      query = query.filter(
        (unitObject) =>
          unitObject.cost?.food >= 0 && unitObject.cost.food < filteringParameters.costs.food
      );
    }
    if (filteringParameters.costs.gold !== "excluded") {
      query = query.filter(
        (unitObject) =>
          unitObject.cost?.gold >= 0 && unitObject.gold.wood < filteringParameters.gold.wood
      );
    }
    // setFilteredUnits(query);
  };

  const columns = [
    {
      title: "ID",
      name: "id",
      key: "id"
    },
    {
      title: "Name",
      name: "name",
      key: "name"
    },
    {
      title: "Age",
      name: "age",
      key: "age"
    },
    {
      title: "Costs",
      name: "costs",
      key: "costs"
    }
  ];

  return (
    <Container className="p-0">
      {/* <Table dataSource={dataSource} columns={columns} /> */}
    </Container>
  );
};

export default Units;
