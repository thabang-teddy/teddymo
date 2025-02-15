import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function AlertComponent() {
  const { all } = useSelector((state: RootState) => state.alerts);

  return (
    <div id="alert-container">
      {all?.map((alert) => (
        <div key={alert.id} className={"alert alert-" + alert.alertType} role="alert">
          {alert.text}
        </div>
      ))}
    </div>
  );
}
