import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "./utils";

const SingleItem = ({ item }) => {
  // Real Time update we'll go with the useQueryClient()
  const queryClient = useQueryClient();

  const { mutate: editTask, isLoading: editLoading } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customFetch.patch(`${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: (id) => {
      return customFetch.delete(`${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={(e) => editTask({ taskId: item.id, isDone: !item.isDone })}
        disabled={editLoading}
        className={editLoading ? "btn-disabled " : ""}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className={
          isLoading ? "btn remove-btn btn-disabled " : "btn remove-btn"
        }
        type="button"
        onClick={() => deleteTask(item.id)}
        disabled={isLoading}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
