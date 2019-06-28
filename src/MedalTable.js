import React from "react";
import {
  Row,
  Column,
  ColumnPoints,
  ColumnTotalPoints
} from "./styledComponents";

const MedalTable = ({ list = [], onAddGold, onAddSilver, onAddBronze }) => (
  <div>
    <Row>
      <ColumnPoints isFixed />
      <Column isFixed />
      <ColumnPoints isFixed>GOLD</ColumnPoints>
      <ColumnPoints isFixed>SILVER</ColumnPoints>
      <ColumnPoints isFixed>BRONZE</ColumnPoints>
      <ColumnTotalPoints isFixed />
    </Row>
    {list.map((i, c) => (
      <Row key={i.country}>
        <ColumnPoints counter={c}>{c + 1}</ColumnPoints>
        <Column counter={c}>
          {i.country} ({i.totalPoints})
        </Column>
        <ColumnPoints
          counter={c}
          data-test="gold"
          isClickable
          onClick={() => onAddGold(i.country, "add-gold")}
        >
          {i.gold}
        </ColumnPoints>
        <ColumnPoints
          counter={c}
          data-test="silver"
          isClickable
          onClick={() => onAddSilver(i.country, "add-silver")}
        >
          {i.silver}
        </ColumnPoints>
        <ColumnPoints
          counter={c}
          data-test="bronze"
          isClickable
          onClick={() => onAddBronze(i.country, "add-bronze")}
        >
          {i.bronze}
        </ColumnPoints>
        <ColumnTotalPoints counter={c}>{i.totalMedals}</ColumnTotalPoints>
      </Row>
    ))}
  </div>
);

export default MedalTable;
