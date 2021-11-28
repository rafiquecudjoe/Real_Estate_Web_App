import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import room1 from "../public/room1.jpg";
import room2 from "../public/room2.jpg";
import { baseUrl, fetchApi } from "../Utils/fetchApi";
import Property from "../components/Property.jsx";

const Banner = ({
  purpose,
  imageUrl,
  title1,
  title2,
  desc1,
  linkName,
  buttonText,
  desc2,
}) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text
          color="gray.700"
          fontSize="lg"
          paddingTop="3"
          paddingBottom="3"
          fontWeight="medium"
        >
          {desc1}
          <br />
          {desc2}
        </Text>
        <Button fontSize="xl">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Banner
        purpose="RENT A HOME"
        imageUrl={room1}
        title1="Rent Homes for"
        title2="Everyone"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        linkName="/search?purpose=for-rent"
        buttonText="Explore Renting"
      />
      <Flex flexWrap="wrap">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      <Banner
        purpose="BUY  A HOME"
        imageUrl={room2}
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more"
        linkName="/search?purpose=for-sale"
        buttonText="Explore Buying"
      />
      <Flex flexWrap="wrap">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const PropertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const PropertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: PropertyForSale?.hits,
      propertiesForRent: PropertyForRent?.hits,
    },
  };
}
