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
    return query;
  };

  useEffect(() => {
    // prevent below code to run at the initial render
    if (isFirstRender) {
      setIsFirstRender((prevVal) => !prevVal);
      return;
    }
    setFilteredUnitsToBeRendered(filterUnits(unitsState));
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

  const onParameterValueChange = (parameterType, parameterName, value) => {
    setFilteringParameters((previousFilteringParameters) => ({
      ...previousFilteringParameters,
      [parameterName]:
        parameterType === "switch" ? !previousFilteringParameters[parameterName] : value
    }));
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

      <Row>
        <Col xs={24} sm={24} md={24} lg={7} className="d-flex mt-4 mb-2 mb-lg-4">
          <Col xs={10}>
            <Switch
              onChange={(boolean) => {
                onParameterValueChange("switch", "isWoodEnabled", boolean);
                setParameterChangeSwitch((prevVal) => !prevVal);
              }}
            />{" "}
            <span className="ms-1">Wood :</span>
          </Col>
          <Col xs={14} className="pe-1">
            <Slider
              max={200}
              onChange={(number) => {
                onParameterValueChange("range", "woodValue", number);
                setParameterChangeSwitch((prevVal) => !prevVal);
              }}
            />
          </Col>
        </Col>

        <Col xs={24} sm={24} md={24} lg={7} className="d-flex my-2 my-lg-4 mx-lg-3 px-lg-3">
          <Col xs={10}>
            <Switch
              onChange={(boolean) => {
                onParameterValueChange("switch", "isFoodEnabled", boolean);
                setParameterChangeSwitch((prevVal) => !prevVal);
              }}
            />{" "}
            <span className="ms-1">Food :</span>
          </Col>
          <Col xs={14} className="pe-1">
            <Slider
              max={200}
              onChange={(number) => {
                onParameterValueChange("range", "foodValue", number);
                setParameterChangeSwitch((prevVal) => !prevVal);
              }}
            />
          </Col>
        </Col>

        <Col xs={24} sm={24} md={24} lg={7} className="d-flex my-lg-4 mb-4 mt-2">
          <Col xs={10}>
            <Switch
              onChange={(boolean) => {
                onParameterValueChange("switch", "isGoldEnabled", boolean);
                setParameterChangeSwitch((prevVal) => !prevVal);
              }}
            />{" "}
            <span className="ms-1">Gold :</span>
          </Col>

          <Col xs={14} className="pe-1">
            <Slider
              max={200}
              onChange={(number) => {
                onParameterValueChange("range", "goldValue", number);
                setParameterChangeSwitch((prevVal) => !prevVal);
              }}
            />
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
