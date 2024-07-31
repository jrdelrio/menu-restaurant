const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      curentTab: "dishes",
      language: 'spanish'
    },

    actions: {
      setCurrentTab: (tab) => {
        setStore({ currentTab: tab });
        console.log(`Current tab set to ${tab}`);
      },
    setLanguage: (language) => {
      setStore({ language: language });
      console.log(`Language set to ${language}`);
    },
  }}
};

export default getState;