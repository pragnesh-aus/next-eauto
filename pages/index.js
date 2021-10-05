import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import NextLink from 'next/link';
import Layout from '../components/Layout';
//import data from '../utils/data';
import db from '../utils/db';
import Product from '../models/Product';
export default function Home(props) {
  const { products } = props;
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <Grid container spacing={3}>
          {products.map((products) => (
            <Grid item md={4} key={products.name}>
              <Card>
                <NextLink href={`/product/${products.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={products.images}
                      title={products.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{products.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${products.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();
  return {
    props: {
      // converting to the primary data type
      products: products.map(db.convertDocToObj),
    },
  };
}
