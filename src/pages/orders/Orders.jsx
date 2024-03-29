import { Link } from "react-router-dom";
import "./Orders.scss";

export const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };
  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="delete"
              />
            </td>
            <td>Gig1</td>
            <td>100</td>
            <td>{currentUser.username}</td>
            <td>
              <i class="fa-solid fa-envelope"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="delete"
              />{" "}
            </td>
            <td>Gig1</td>
            <td>100</td>
            <td>{currentUser.username}</td>
            <td>
              <i class="fa-solid fa-envelope"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="delete"
              />{" "}
            </td>
            <td>Gig1</td>
            <td>100</td>
            <td>{currentUser.username}</td>
            <td>
              <i class="fa-solid fa-envelope"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="delete"
              />{" "}
            </td>
            <td>Gig1</td>
            <td>100</td>
            <td>{currentUser.username}</td>
            <td>
              <i class="fa-solid fa-envelope"></i>
            </td>
          </tr>
          <tr>
            <td>
              <img
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />{" "}
            </td>
            <td>Gig1</td>
            <td>100</td>
            <td>{currentUser.username}</td>
            <td>
              <i class="fa-solid fa-envelope"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};
