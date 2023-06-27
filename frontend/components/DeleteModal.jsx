import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function DeleteModal({ setModal }) {
  const handleNavigate = () => {
    setModal(false);
    navigate("/profile");
    toast.success("Post deleted");
  };

  const { id } = useParams();
  const navigate = useNavigate();

  const deletePost = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.delete(`https://blogs-e9qa.onrender.com/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal show={() => setModal(true)} onHide={() => setModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Warning</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you really want to delete post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModal(false)}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              deletePost();
              handleNavigate();
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
