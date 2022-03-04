const initialState = {
  tat: [4, 4, 2],
  formation: {
    Goalkeeper: [{ assigned: false }],
    Defender: [
      { assigned: false },
      { assigned: false },
      { assigned: false },
      { assigned: false },
    ],
    Midfielder: [
      { assigned: false },
      { assigned: false },
      { assigned: false },
      { assigned: false },
    ],
    Attacker: [{ assigned: false }, { assigned: false }],
  },
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "change-formation":
      return {
        tat: action.payload,
        formation: {
          Goalkeeper: [{ assigned: false }],
          Defender: [...Array(action.payload[0])].map(i => ({
            assigned: false,
          })),
          Midfielder: [...Array(action.payload[1])].map(i => ({
            assigned: false,
          })),
          Attacker: [...Array(action.payload[2])].map(i => ({
            assigned: false,
          })),
        },
      };

    case "set-player":
      const newItem = state.formation[action.payload.role];
      newItem[action.payload.index] = action.payload.data;
      return {
        ...state,
        formation: {
          ...state.formation,
          newItem,
        },
      };

    case "delete-player":
      const delItem = state.formation[action.payload.role];
      delItem[action.payload.index] = action.payload.data;
      return {
        ...state,
        formation: {
          ...state.formation,
          delItem,
        },
      };

    default:
      return state;
  }
};
