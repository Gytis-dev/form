export const getUsers = (): User[] => {
  const storage = localStorage.getItem("users");

  return storage ? JSON.parse(storage) : [];
};

export const setUser = (user: User) => {
  localStorage.setItem("users", JSON.stringify([...getUsers(), user]));
};
