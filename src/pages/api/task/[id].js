import Task from "../../../model/task";
import { dbConnect, runMiddleware } from "../../../utils";
import Morgan from "morgan";

dbConnect();

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req;
  const morgan = Morgan("dev");

  switch (method) {
    case "GET":
      try {
        const tasks = await Task.findById(id);
        if (!tasks)
          return res.status(404).json({ msg: "Task does not exists" });
        await runMiddleware(req, res, morgan);
        return res.status(200).json(tasks);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    case "DELETE":
      try {
        const deletTask = await Task.findByIdAndDelete(id);
        if (!deletTask) {
          return res.status(404).json({ msg: "Task dosn exixt" });
        }

        await runMiddleware(req, res, morgan);
        return res.status(200).json();
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    case "PUT":
      try {
        const updateTask = await Task.findByIdAndUpdate(id, body, {
          new: true,
          runValidators: true,
        });
        if (!updateTask) {
          return res.status(404).json({ msg: "Task dosn exixt" });
        }

        return res.status(200).json(updateTask);
      } catch (err) {
        return res.status(400).json({ msg: err.message });
      }

    default:
      return res.status(400).json({ mgs: "This method is not supported" });
  }
};
