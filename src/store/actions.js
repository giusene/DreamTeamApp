export const changeFormation = input => ({
  type: "change-formation",
  payload: input,
});

export const savePlayer = (role, index, data, img) => ({
  type: "set-player",
  payload: {
    role: role,
    index: index,
    data: {
      ...data,
      img: img,
      assigned: true,
    },
  },
});

export const deletePlayer = (role, index) => ({
  type: "delete-player",
  payload: {
    role: role,
    index: index,
    data: {
      assigned: false,
    },
  },
});
