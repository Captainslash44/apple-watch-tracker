import { useSelector } from "react-redux";

const activities = useSelector((state) => state.activities);

const stepCount = [];
const steps = activities.map((activity) => stepCount.push(activity.steps));

export default steps;
