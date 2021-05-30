import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const GET_PRODUCT = gql`
  query($id: ID!) {
    products(where:{id: $id}) {
      id
      name
      quantity
    }
  }
`;

function Products(props) {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { id: router.query.id },
  });

  if (error) return "Error Loading Product details";
  if (loading) return <h1>Loading ...</h1>;
  if (data.products) {
    const { products } = data;
    return (
      <>
        <h1>My values {products[0].name}</h1>
        
      </>
    );
  }
  return <h1>Add Product</h1>;
}
export default Products;