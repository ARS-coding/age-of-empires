import { useEffect, useState } from "react";

import { costStringFromObject } from "../../utils/helpers";

import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table, Radio, Row, Col, Slider, Switch } from "antd";
const { Group, Button } = Radio;

const Units = ({ unitsState }) => {
  const initialFilteringParameters = {
    age: "All",
    isWoodEnabled: false,
    woodValue: "excluded",
    isFoodEnabled: false,
    foodValue: "excluded",
    isGoldEnabled: false,
    goldValue: "excluded"
  };
  const [filteringParameters, setFilteringParameters] = useState(initialFilteringParameters);
  const [parameterChangeSwitch, setParameterChangeSwitch] = useState(false);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const [filteredUnitsToBeRendered, setFilteredUnitsToBeRendered] = useState(unitsState);

  const filterUnits = (allUnits) => {
    let query = allUnits.filter(({ age }) =>
      filteringParameters.age !== "All" ? age === filteringParameters.age : true
    );
    console.log(query, "initial query");
    if (
      filteringParameters.isWoodEnabled === true &&
      filteringParameters.woodValue !== "excluded"
    ) {
      query = query.filter(
        (unitObject) =>
          unitObject?.cost?.Wood >= 0 && unitObject.cost.Wood <= filteringParameters.woodValue
      );
    }
    if (
      filteringParameters.isFoodEnabled === true &&
      filteringParameters.foodValue !== "excluded"
    ) {
      query = query.filter(
        (unitObject) =>
          unitObject?.cost?.Food >= 0 && unitObject.cost.Food <= filteringParameters.foodValue
      );
    }
    if (
      filteringParameters.isGoldEnabled === true &&
      filteringParameters.goldValue !== "excluded"
    ) {
      query = query.filter(
        (unitObject) =>
          unitObject?.cost?.Gold >= 0 && unitObject.cost.Gold <= filteringParameters.goldValue
      );
    }
    console.log(query, "query after ifs");
    return query;
  };

  useEffect(() => {
    // prevent below code to run at the initial render
    if (isFirstRender) {
      setIsFirstRender((prevVal) => !prevVal);
      return;
    }
    setFilteredUnitsToBeRendered(filterUnits(unitsState));
    console.log("filteringParameters has changed!");
  }, [parameterChangeSwitch]);

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
      render: ({ name, id }) => (
        <Link key={id} to={id}>
          {name}
        </Link>
      )
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
  console.log(filteringParameters);

  const onParameterValueChange = (parameterType, parameterName, value) => {
    // if (parameterType === "switch") {
    setFilteringParameters((previousFilteringParameters) => ({
      ...previousFilteringParameters,
      [parameterName]:
        parameterType === "switch" ? !previousFilteringParameters[parameterName] : value
    }));
    // } else if (parameterType === "range") {
    //   setFilteringParameters((previousFilteringParameters) => ({
    //     ...previousFilteringParameters,
    //     [parameterName]: !previousFilteringParameters[parameterName]
    //   }))
    // }
  };

  return (
    <Container className="p-0">
      <Group
        value={filteringParameters.age}
        onChange={({ target: { value: ageValue } }) => {
          setFilteringParameters({ ...filteringParameters, age: ageValue });
          setParameterChangeSwitch((prevVal) => !prevVal); // initialise the code in useEffect
        }}
        size="large">
        <Button value="All">All</Button>
        <Button value="Dark">Dark</Button>
        <Button value="Feudal">Feudal</Button>
        <Button value="Castle">Castle</Button>
        <Button value="Imperial">Imperial</Button>
      </Group>

      <Row className="my-4">
        <Col lg={7} className="d-flex">
          <Col xs={10}>
            <Switch
              onChange={(boolean) => onParameterValueChange("switch", "isWoodEnabled", boolean)}
            />{" "}
            <span className="ms-1">Wood :</span>
          </Col>
          <Col xs={14} className="pe-1" style={{ borderRight: "1px solid gray" }}>
            <Slider />
          </Col>
        </Col>

        <Col lg={7} className="d-flex mx-3">
          <Col xs={10}>
            <Switch
              onChange={(boolean) => onParameterValueChange("switch", "isFoodEnabled", boolean)}
            />{" "}
            <span className="ms-1">Food :</span>
          </Col>
          <Col xs={14} className="pe-1" style={{ borderRight: "1px solid gray" }}>
            <Slider />
          </Col>
        </Col>

        <Col lg={7} className="d-flex">
          <Col xs={10}>
            <Switch
              onChange={(boolean) => onParameterValueChange("switch", "isGoldEnabled", boolean)}
            />{" "}
            <span className="ms-1">Gold :</span>
          </Col>
          <Col xs={14} className="pe-1" style={{ borderRight: "1px solid gray" }}>
            <Slider />
          </Col>
        </Col>
      </Row>
      <Table
        rowKey={({ id }) => id}
        dataSource={filteredUnitsToBeRendered}
        columns={columns}
        pagination={{ position: ["bottomCenter"] }}
      />
    </Container>
  );
};

export default Units;
