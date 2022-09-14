import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const SubmissionForm = () => {
  return (
    <Form className="submit">
          
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-light">
        
        </Form.Text>
    

      <Button variant="info" type="submit">
        SUBSCRIBE
      </Button>
    </Form>
  );
};

export default SubmissionForm;
