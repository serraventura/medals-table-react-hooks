import reducer from "./reducer";

describe("reducer", () => {
  it("should return default state", () => {
    expect(reducer()).toEqual({});
  });

  it("should 'add-country' to the state", () => {
    expect(
      reducer(
        {},
        {
          type: "add-country",
          payload: {
            country: "UK"
          }
        }
      )
    ).toEqual({
      UK: {
        gold: 0,
        silver: 0,
        bronze: 0,
        totalMedals: 0,
        totalPoints: 0
      }
    });
  });

  it("should increment gold (add-gold) to the state", () => {
    expect(
      reducer(
        {
          UK: {
            gold: 0,
            silver: 0,
            bronze: 0,
            totalMedals: 0,
            totalPoints: 0
          }
        },
        {
          type: "add-gold",
          payload: {
            country: "UK"
          }
        }
      )
    ).toEqual({
      UK: {
        gold: 1,
        silver: 0,
        bronze: 0,
        totalMedals: 0,
        totalPoints: 0
      }
    });
  });

  it("should increment silver (add-silver) to the state", () => {
    expect(
      reducer(
        {
          UK: {
            gold: 1,
            silver: 5,
            bronze: 0,
            totalMedals: 0,
            totalPoints: 0
          }
        },
        {
          type: "add-silver",
          payload: {
            country: "UK"
          }
        }
      )
    ).toEqual({
      UK: {
        gold: 1,
        silver: 6,
        bronze: 0,
        totalMedals: 0,
        totalPoints: 0
      }
    });
  });

  it("should increment bronze (add-bronze) to the state", () => {
    expect(
      reducer(
        {
          UK: {
            gold: 1,
            silver: 5,
            bronze: 0,
            totalMedals: 0,
            totalPoints: 0
          }
        },
        {
          type: "add-bronze",
          payload: {
            country: "UK"
          }
        }
      )
    ).toEqual({
      UK: {
        gold: 1,
        silver: 5,
        bronze: 1,
        totalMedals: 0,
        totalPoints: 0
      }
    });
  });

  it("should increment total of medals (add-total) to the state", () => {
    expect(
      reducer(
        {
          UK: {
            gold: 1,
            silver: 5,
            bronze: 0,
            totalMedals: 0,
            totalPoints: 0
          }
        },
        {
          type: "add-total",
          payload: {
            country: "UK"
          }
        }
      )
    ).toEqual({
      UK: {
        gold: 1,
        silver: 5,
        bronze: 0,
        totalMedals: 6,
        totalPoints: 0
      }
    });
  });

  it("should increment total of points (add-total-points) to the state", () => {
    expect(
      reducer(
        {
          UK: {
            gold: 1,
            silver: 5,
            bronze: 10,
            totalMedals: 0,
            totalPoints: 0
          }
        },
        {
          type: "add-total-points",
          payload: {
            country: "UK"
          }
        }
      )
    ).toEqual({
      UK: {
        gold: 1,
        silver: 5,
        bronze: 10,
        totalMedals: 0,
        totalPoints: 23
      }
    });
  });
});
