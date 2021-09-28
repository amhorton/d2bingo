import React, { useState } from "react";
import styled from "styled-components";

import { detectBingo } from "../util/bingoLogic";
import { getObjectiveSet } from "../util/objectives";

enum SpaceStatus {
  NEUTRAL = "Neutral",
  COMPLETE = "Complete",
  OPP_COMPLETE = "OpponentComplete",
}

type SpaceState = {
  number: number;
  objective: string;
  status: SpaceStatus;
};

type SpaceCustomProps = {
  status: SpaceStatus;
};

function getDefaultState(): SpaceState[] {
  const arr = Array.from(Array(25).keys());
  const objectives = getObjectiveSet();

  return arr.map((num) => ({
    number: num,
    objective: objectives[num],
    status: SpaceStatus.NEUTRAL,
  }));
}

function getBingoStatus(spaces: SpaceState[]) {
  const completeSpacesByNumber = spaces
    .filter((space) => space.status === SpaceStatus.COMPLETE)
    .map((space) => space.number);
  const oppoCompleteSpacesByNumber = spaces
    .filter((space) => space.status === SpaceStatus.OPP_COMPLETE)
    .map((space) => space.number);

  const hasBingo = detectBingo(completeSpacesByNumber);
  const oppoHasBingo = detectBingo(oppoCompleteSpacesByNumber);
  const hasAllKill = completeSpacesByNumber.length === 25;
  const hasQuorum = completeSpacesByNumber.length >= 13;
  const oppoHasQuorum = oppoCompleteSpacesByNumber.length >= 13;

  if (hasAllKill) return "ALL KILL!";
  if (hasQuorum) return "Majority!";
  if (oppoHasQuorum) return "Opponent majority!";
  if (hasBingo) return "Bingo!";
  if (oppoHasBingo) return "Opponent Bingo!";

  return "Still very much in play.";
}

function getNextStatus(status: SpaceStatus): SpaceStatus {
  if (status === SpaceStatus.NEUTRAL) return SpaceStatus.COMPLETE;
  if (status === SpaceStatus.COMPLETE) return SpaceStatus.OPP_COMPLETE;
  if (status === SpaceStatus.OPP_COMPLETE) return SpaceStatus.NEUTRAL;

  return SpaceStatus.NEUTRAL;
}

const getBackgroundColorFromProps = (props: SpaceCustomProps): string => {
  const status = props.status;

  if (status === SpaceStatus.NEUTRAL) return "peachpuff";
  if (status === SpaceStatus.COMPLETE) return "mediumseagreen";
  if (status === SpaceStatus.OPP_COMPLETE) return "pink";

  return "peachpuff";
};

const CardContainer = styled.div`
  margin: 40px 0;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(5, 20%);
  background-color: black;

  border: 2px solid black;
  width: 600px;
  height: 600px;
`;

const Space = styled.button<SpaceCustomProps>`
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  background-color: ${getBackgroundColorFromProps};
  height: 100%;
  width: 100%;
  text-align: center;
  cursor: pointer;

  :hover {
    filter: brightness(85%);
  }
`;

const Subtitle = styled.h3``;

function BingoCard() {
  const [spaces, setSpaces] = useState(getDefaultState());

  console.log(spaces);

  const onSpaceClick = (num: number) => {
    const currentSpace = spaces[num];
    const newStatus = getNextStatus(currentSpace.status);

    const newSpace = Object.assign({}, currentSpace, { status: newStatus });

    const newSpaces = [...spaces];
    newSpaces[num] = newSpace;

    setSpaces(newSpaces);
  };

  return (
    <>
      <CardContainer>
        <CardWrapper>
          {spaces.map((space) => (
            <Space
              status={space.status}
              onClick={() => onSpaceClick(space.number)}
            >
              {space.objective}
            </Space>
          ))}
        </CardWrapper>
      </CardContainer>
      <Subtitle>Bingo status: {getBingoStatus(spaces)}</Subtitle>
    </>
  );
}

export default BingoCard;
