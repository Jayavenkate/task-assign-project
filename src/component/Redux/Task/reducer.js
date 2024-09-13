import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
  EDIT_TASK_SUCCESS,
  GET_TASK_SUCCESS,
  VIEW_TASK_SUCCESS,
} from "./actionCreator";

const data = [
  {
    id: 1,
    title: "Complete Project Report",
    description: "Finalize and submit the project report for the client.",
    StartDate: "2024-09-15",
    EndDate: "2024-09-15",
    priority: "High",
    status: "In Progress",
    user: "user3",
  },
  {
    id: 2,
    title: "Schedule Team Meeting",
    description: "Organize a meeting with the team to discuss the next steps.",
    StartDate: "2024-09-18",
    EndDate: "2024-09-15",
    priority: "Medium",
    status: "Pending",
    user: "user2",
  },
  {
    id: 3,
    title: "Update Website Content",
    description:
      "Revise the website content based on the latest marketing strategy.",

    priority: "Low",
    status: "Pending",
    user: "user2",
    StartDate: "2024-09-18",
    EndDate: "2024-09-15",
  },
  {
    id: 4,
    title: "Client Feedback",
    description: "Review and address client feedback received last week.",
    StartDate: "2024-09-10",
    EndDate: "2024-09-15",
    priority: "High",
    status: "Completed",
    user: "user2",
  },
  {
    id: 5,
    title: "Prepare Presentation",
    description: "Create a presentation for the upcoming conference.",
    StartDate: "2024-09-25",
    EndDate: "2024-09-15",
    priority: "Medium",
    status: "In Progress",
    user: "user2",
  },
];

const initState = {
  loading: false,
  error: null,
  task: data || [],
  taskbyId: null,
};

const TaskReducer = (state = initState, action) => {
  const { type } = action;
  switch (type) {
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        task: [...state.task, action.payload],
      };
    case GET_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        task: Array.isArray(action.payload) ? action.payload : [],
      };
    case VIEW_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        taskbyId: action.payload,
      };

    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        task: state.task.filter((item) => item.id !== action.payload),
      };
    case EDIT_TASK_SUCCESS:
      console.log("EDIT_TASK_SUCCESS", action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        task: state.task.map((item) =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        ),
      };

    default:
      return state;
  }
};
export default TaskReducer;
