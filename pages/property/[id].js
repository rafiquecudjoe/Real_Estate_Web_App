import { Box, Text, Spacer, Flex, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { baseUrl, fetchApi } from "../../Utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    area,
    title,
    baths,
    agency,
    isVerified,
    description,
    time,
    purpose,
    furnishingStatus,
    amenities,
    photos,
    type,
  },
}) => (
  <Box maxWidth="1000px" margin="auto" padding="4">
    {photos && <ImageScrollbar data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box
            paddingRight="3"
            alignItems="center"
            justifyContent="space-between"
          >
            {isVerified && <GoVerified />}
          </Box>

          <Text fontWeight="bold" fontSize="lg">
            {" "}
            GHC{millify(price)} {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar size="sm" src={agency?.logo?.url} />
        </Box>
      </Flex>

      <Flex
        alignItems="center"
        p="1"
        justifyContent="space-between"
        w="250px"
        color="blue.400"
      >
        {rooms}
        <FaBed />| {baths}
        <FaBath /> | {millify(area)} sqft <BsGridFill />
      </Flex>
      <Box marginTop="2" fontWeight="2">
        <Text fontSize="lg">{title}</Text>
        <Text lineHeight="2" color="gray.600">
          {description}
        </Text>
      </Box>
      <Flex
        flexWrap="wrap"
        textTransform="uppercase"
        justifyContent="space-between"
      >
        <Flex
          w="400px"
          borderBottom="1"
          borderColor="gray.100"
          justifyContent="space-between"
        >
          <Text>Type</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>
        <Flex
          w="400px"
          borderBottom="1"
          borderColor="gray.100"
          justifyContent="space-between"
        >
          <Text>Purpose</Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex
            w="400px"
            borderBottom="1"
            borderColor="gray.100"
            justifyContent="space-between"
          >
            <Text>Furnishing Status</Text>
            <Text fontWeight="bold">{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length && (
          <Text fontSize="2xl" fontWeight="black" marginTop="5">
            Facilites:
          </Text>
        )}
        <Flex flexWrap="wrap">
          {amenities?.map((item) =>
            item?.amenities?.map((amenity) => (
              <Text
                key={amenity.text}
                fontWeight="bold"
                color="blue.400"
                fontSize="l"
                p="2"
                bg="gray.200"
                m="1"
                borderRadius="5"
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
