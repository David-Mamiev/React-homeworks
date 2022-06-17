const data = new Date();
const getActualData = (data) => {
    const day =
      data.getDay() === 0
        ? "Sunday"
        : data.getDay() === 1
        ? "Monday"
        : data.getDay() === 2
        ? "Tuesday"
        : data.getDay() === 3
        ? "Wednesday"
        : data.getDay() === 4
        ? "Thursday"
        : data.getDay() === 5
        ? "Friday"
        : "Saturday";
    const numberDay = data.getDate();
    const month = data.getMonth();
    const year = data.getFullYear();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    return `${day}, ${numberDay}, ${month} ${year} at ${hours}:${minutes}`;
  };

export function onHistoryChange (item, fncName, state, newDescription) {
    const actualIdHistory = item.history.reduce(
      (prevValue, currentValue) => prevValue + currentValue
    );
    const newObjHistory = {
      id: actualIdHistory,
      field:
        fncName === "onDescriptionChange"
          ? item.description
          : fncName === "onFormSubmit"
          ? item.title
          : "",
      action:
        fncName === "onItemComplete"
          ? `Task changed to ${item.completed ? "completed" : "not completed"}`
          : fncName === "onDescriptionChange"
          ? `Changed task description from "${
              state.list[item.id - 1].description
            }" to "${newDescription}"`
          : fncName === "onFormSubmit"
          ? `Created task with title "${item.title}"`
          : "",
      prevValue: 
      fncName === "onItemComplete"
          ? `${!item.completed}`
          : fncName === "onDescriptionChange"
          ? `${state.list[item.id - 1].description}`
          : "",
      currentValue:
        fncName === "onItemComplete"
          ? item.completed
          : fncName === "onDescriptionChange"
          ? item.description
          : fncName === "onFormSubmit"
          ? item.title
          : "",
      appliedAt: getActualData(data),
    };
    item.history.push(newObjHistory);
  };