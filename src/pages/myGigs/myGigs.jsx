import { Link } from "react-router-dom";
import "./myGigs.scss";
const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Images</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
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
            <td>0</td>
            <td>
              <i className="fas fa-trash"></i>
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
            <td>0</td>
            <td>
              <i className="fas fa-trash"></i>
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
            <td>0</td>
            <td>
              <i className="fas fa-trash"></i>
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
            <td>0</td>
            <td>
              <i className="fas fa-trash"></i>
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
            <td>0</td>
            <td>
              <i className="fas fa-trash"></i>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
