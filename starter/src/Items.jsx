import { useQuery } from "@tanstack/react-query";
import SingleItem from "./SingleItem";
import customFetch from "./utils";

const Items = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customFetch.get("/"),
  });

  // console.log(result);
  // const { isLoading, data, isError } = result;

  if (isLoading) {
    return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  }

  if (isError) {
    return <p style={{ marginTop: "1rem" }}>There was an Error...</p>;
  }

  // if (error) {
  //   return <p style={{ marginTop: "1rem" }}>{error.message}</p>;
  // }

  return (
    <div className="items">
      {data.data.taskList.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
          />
        );
      })}
    </div>
  );
};
export default Items;
