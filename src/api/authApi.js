export const fakeLoginApi = (userData) => {
  return Promise.resolve({
    id: Date.now(),
    name: userData.name || "Travique User",
    email: userData.email,
  });
};