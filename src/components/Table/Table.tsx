import { nanoid } from "nanoid";

type Posts = {
  posts: {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
  }[];
};

function Table({ posts }: Posts) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {posts &&
              posts.length > 0 &&
              Object.keys(posts[0]).map((column) => (
                <th key={nanoid()}>{column}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {posts?.map((row) => (
            <tr key={nanoid()}>
              {Object.values(row).map((value) => (
                <td key={nanoid()}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export { Table };
